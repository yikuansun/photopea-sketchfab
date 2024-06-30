<script>
    import { onMount } from "svelte";
    import Photopea from "$lib/photopea.js";
    import { fly, slide } from "svelte/transition";

    let viewerFrame;
    let uid = "7w7pAfrCfjovwykkEeRFLGw5SXS";
    let screenshotSrc = "";
    let api;
    let models = [];
    let categories = [];
    let selectedCat = "animals-pets";
    let client;
    let nextPageEndpoint = "https://api.sketchfab.com/v3/models";
    let searchQuery = "";
    let modelGalleryVisible = false;

    async function getModels() {
        models = [];
        let endpoint = new URL("https://api.sketchfab.com/v3/models");
        endpoint.searchParams.set("sort_by", "-viewCount");
        endpoint.searchParams.set("categories", selectedCat);
        endpoint.searchParams.set("staffpicked", true);
        endpoint.searchParams.set("animated", false);
        endpoint.searchParams.set("has_sound", false);
        endpoint.searchParams.set("archives_flavours", false);
        let response = await fetch(endpoint);
        let json = await response.json();
        models = json["results"];
        nextPageEndpoint = json["next"];
    }

    async function getModelsBySearch() {
        models = [];
        let endpoint = new URL("https://api.sketchfab.com/v3/search");
        endpoint.searchParams.set("type", "models");
        endpoint.searchParams.set("sort_by", "-viewCount");
        endpoint.searchParams.set("q", searchQuery);
        endpoint.searchParams.set("staffpicked", true);
        endpoint.searchParams.set("animated", false);
        endpoint.searchParams.set("has_sound", false);
        endpoint.searchParams.set("archives_flavours", false);
        let response = await fetch(endpoint);
        let json = await response.json();
        models = json["results"];
        nextPageEndpoint = new URL(json["next"]);
    }

    async function addMoreModels() {
        let response = await fetch(nextPageEndpoint);
        let json = await response.json();
        models = [...models, ...json["results"]];
        nextPageEndpoint = json["next"];
    }

    async function getCategories() {
        let response = await fetch("https://api.sketchfab.com/v3/categories?sort_by=slug");
        let json = await response.json();
        categories = json["results"];
    }

    function resetClient() {
        client = new Sketchfab(viewerFrame);
        client.init(uid, {
            success: (api_) => {
                api = api_;
                api.start();
                api.addEventListener("viewerready", function() {
                    console.log("viewer is ready");
                    /*api.setBackground({
                        color: [0, 96, 0],
                    });*/
                });
            },
            error: () => {
                console.log("error making viewer");
            },
            transparent: 1, // requires pro acc
        });
    }

    function getSharpestThumbnail(m) {
        return m["thumbnails"]["images"].sort((a, b) => {
            return b["size"] - a["size"];
        })[0]["url"];
    }

    onMount(() => {
        resetClient();

        getModels();
        getCategories();
    });
</script>

<div id="centered">
    <button on:click={() => { modelGalleryVisible = true; }}>Show gallery</button>
    <br /> <br />

    <iframe src="" bind:this={viewerFrame} id="viewerFrame" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" title="sketchfab embed"></iframe>

    <br />
    <br />
    <button on:click={() => {
        api.getScreenShot(2048, 2048, "image/png", (err, result) => {
            Photopea.runScript(window.parent, `app.open("${result}", null, true);`);
        });
    }} class="pink">
        Add to Document
    </button>
    <br />
</div>

<div style:position="fixed"
    style:bottom="-20px"
    style:left="50vw"
    style:transform="translate(-50%, -50%)"
    style:text-align="center"
    style:background-color="#353535"
    style:color="white"
    style:padding="5px"
    style:font-size="8px"
    style:font-family="Arial, sans-serif">
    Models courtesy of <a style:color="white" target="_blank" href="https://sketchfab.com/">Sketchfab</a>
    <br />
    <a style:color="white" target="_blank" href="https://github.com/yikuansun/photopea-sketchfab/issues">Report a bug</a>
    <br />
    <a style:color="white" target="_blank" href="https://github.com/yikuansun/photopea-sketchfab">Contribute on GitHub</a>
</div>

{#if modelGalleryVisible}
    <div id="modelGallery" transition:fly={{ y: "100vh", opacity: 1, }}>
        <button on:click={() => { modelGalleryVisible = false; }}>Hide gallery</button>
        <br /> <br />
        <input bind:value={searchQuery} on:change={getModelsBySearch} placeholder="Search for a model" id="searchBar" />
        <br />
        {#each categories as cat}
            <button on:click={() => {
                selectedCat = cat["slug"];
                getModels();
            }}
            style:padding="4px 8px"
            style:font-size="10px">
                {cat["name"]}
            </button>
        {/each}
        <br />
        {#each models as m}
            <div class="imageThumbnail"
                style:background-image="url('{getSharpestThumbnail(m)}')"
                title={m["name"]}
                on:click={() => {
                    uid = m["uid"];
                    resetClient();
                    modelGalleryVisible = false;
                }}
                transition:slide></div>
        {/each}
        <br />
        {#if nextPageEndpoint}
            <button on:click={addMoreModels}>More</button>
        {/if}
    </div>
{/if}

<style>
    #viewerFrame {
        width: 500px;
        aspect-ratio: 1 / 1;
        max-width: calc(100vw - 40px);
        border: 0;
        border-radius: 20px;
    }

    #modelGallery {
        width: 100vw;
        height: 100vh;
        background-color: #353535;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 16px;
        overflow-y: scroll;
    }

    :global(body) {
        overflow-x: hidden;
    }

    #centered {
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    button {
        padding: 8px 14px;
        background-color: #1caad9;
        border: 0;
        font-weight: bold;
        color: white;
        margin: 1px;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #1c88bb;
        cursor: pointer;
    }

    .imageThumbnail {
        background-size: cover;
        aspect-ratio: 200 / 112.5;
        width: calc(50% - 16px);
        display: inline-block;
        margin: 8px;
        border-radius: 10px;
        cursor: pointer;
    }

    #searchBar {
        width: 100%;
        box-sizing: border-box;
        padding: 8px;
        background-color: #222222;
        color: aliceblue;
        border-radius: 8px;
        border: 1px solid grey;
        outline: none!important;
        font-size: 12px;
    }

    @media screen and (min-width: 600px) {
        .imageThumbnail {
            width: calc((100% / 3) - 16px);
        }
    }

    @media screen and (min-width: 800px) {
        .imageThumbnail {
            width: calc(25% - 16px);
        }
    }

    .pink {
        background-color: #df1660;
    }

    .pink:hover {
        background-color: #c81859;
    }
</style>