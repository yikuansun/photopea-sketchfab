<script>
    import { onMount } from "svelte";

    let viewerFrame;
    let uid = "7w7pAfrCfjovwykkEeRFLGw5SXS";
    let screenshotSrc = "";
    let api;
    let models = [];
    let categories = [];
    let selectedCat = "animals-pets";
    let client;
    let nextPageEndpoint = new URL("https://api.sketchfab.com/v3/models");

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

    onMount(() => {
        resetClient();

        getModels();
        getCategories();
    });
</script>

<iframe src="" bind:this={viewerFrame} id="viewerFrame" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" title="sketchfab embed"></iframe>

<br />
<button on:click={() => {
    api.getScreenShot("image/png", (err, result) => {
        if (!err) {
            screenshotSrc = result;
        }
    });
}}>
    Take screenshot
</button>
<br />

<img src={screenshotSrc} alt="screenshot" />
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
    <img src={m["thumbnails"]["images"][0]["url"]}
        alt={m["name"]}
        title={m["name"]}
        width={200}
        on:click={() => {
            uid = m["uid"];
            resetClient();
        }} />
{/each}
<br />
<button on:click={addMoreModels}>
    More
</button>

<style>
    #viewerFrame {
        width: 500px;
        height: 500px;
        border: 0;
    }
</style>