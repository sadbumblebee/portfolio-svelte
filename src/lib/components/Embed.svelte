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
    <div class="embed-label">
        <p>
            {type} 
        </p>
        <span class="emoji">{displayEmoji(type)}</span>
    </div>
    {#if type == "Video"}
    <div class="video-wrapper">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${makeYoutubeShareUrl(url)}?si=X0fj19T1cl89Pj8V`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    {:else if type == "Audio"}
        <figure class="audio">
        <audio controls src={url}></audio>
        </figure>
    {:else if type == "Slides"}
        <object title="Slides from the talk" data="{url}" type="application/pdf" width="100%" height="400px">
            <embed src="{url}" type="application/pdf" />
        </object>
    {:else}
        <p>Resource not found :c</p>
    {/if}
</div>


<style lang="scss">
.embed {
    margin: 12px 0 0 0;
    .embed-label {
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        font-size: 1.5em;
        p {
            margin: 0;
            text-align: center;
            color: $primary;
        }
        span { // simple separator for lists
            font-family: $sans;
            &.emoji {
                // font-size: 1.5em;
                font-family: $emoji;
                color: $primary;
                font-optical-sizing: auto;
                font-weight: 700;
                font-style: normal;
            }
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