<script>
    import { onMount } from "svelte";
    import Photopea from "$lib/photopea.js";
    import { fly } from "svelte/transition";

    let viewerFrame;
    let uid = "7w7pAfrCfjovwykkEeRFLGw5SXS";
    let screenshotSrc = "";
    let api;
    let models = [];
    let categories = [];
    let selectedCat = "animals-pets";
    let client;
    let nextPageEndpoint = new URL("https://api.sketchfab.com/v3/models");
    let searchQuery = "";
    let modelGalleryVisible = false;

    async function getModels() {
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
        nextPageEndpoint = new URL(json["next"]);
    }

    async function getModelsBySearch() {
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
        nextPageEndpoint = new URL(json["next"]);
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
    }}>
        Add to Document
    </button>
    <br />
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
            }}>
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
                }}></div>
        {/each}
        <br />
        <button on:click={addMoreModels}>
            More
        </button>
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
        background-color: white;
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
        padding: 5px 8px;
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
        padding: 12px;
        background-color: #222222;
        color: aliceblue;
        border-radius: 8px;
        border: 1px solid grey;
        outline: none!important;
        font-size: 16px;
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
</style>