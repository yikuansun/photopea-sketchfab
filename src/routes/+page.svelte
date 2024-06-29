<script>
    import { onMount } from "svelte";

    let viewerFrame;
    let uid = "7w7pAfrCfjovwykkEeRFLGw5SXS";
    let screenshotSrc = "";
    let api;

    onMount(() => {
        let client = new Sketchfab(viewerFrame);
        client.init(uid, {
            success: (api_) => {
                api = api_;
                api.start();
                api.addEventListener("viewerready", function() {
                    console.log("viewer is ready");
                });
            },
            error: () => {
                console.log("error making viewer");
            },
            transparent: 1, // requires pro acc
        });
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

<style>
    #viewerFrame {
        width: 500px;
        height: 500px;
        border: 0;
    }
</style>