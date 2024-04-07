<script>
    export let type;
    export let url;

    const makeYoutubeShareUrl = (url) => {
        let id = url.split('?v=')[1]
        return id
    }

    const displayEmoji = (type) => {
        let emoji;
        if (type == "Audio") {
            emoji = "🔊"
        } else if (type == "Slides") {
            emoji = "🪪"
        } else if (type == "Video") {
            emoji = "📼"
        } else {
            emoji = ""
        }
        return emoji;
    }
</script>

<div class="embed">
    <p>
        <span class="emoji">{displayEmoji(type)} </span>
    </p>
    {#if type == "Video"}
    <div class="video-wrapper">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${makeYoutubeShareUrl(url)}?si=X0fj19T1cl89Pj8V`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    {:else if type == "Audio"}
        <figure class="audio">
        <audio controls src={url}></audio>
        <figcaption>Listen to the talk</figcaption>
        </figure>
    {:else if type == "Slides"}
        <object data="https://resources.ire.org/tipsheets/20240307-30414.pdf" type="application/pdf" width="100%" height="400px">
            <embed src="https://resources.ire.org/tipsheets/20240307-30414.pdf" type="application/pdf" />
        </object>
    {:else}
        <p>Resource not found :c</p>
    {/if}
</div>


<style lang="scss">
.embed {
    p {
            font-size: 1.75em;
            margin: 0;
            text-align: center;
            color: $primary;
        }
    span { // simple separator for lists
        &.emoji {
            font-size: 2em;
            font-family: $emoji;
            color: $primary;
            font-optical-sizing: auto;
            font-weight: 700;
            font-style: normal;
        }
    }
}
.audio {
    margin: 8px 0 0 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    audio {
        max-width: 380px;
        width: 100%;
    }
}
.video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        /* 16:9 */
        padding-top: 25px;
        height: 0;
    }

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

</style>