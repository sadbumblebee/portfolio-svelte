<script>
    export let hed;
    export let copy;
    export let date;
    export let image;
    export let source;
    export let url;
    export let selectedCategories;
    export let skillsets;

    // console.log('Inside card:', skillsets)

    // 
    $: arr = []
    $: selectedCategories, arr = []
    $: {
    // Create an empty array
    // If there are selected categories
    // Then show specific skills to those categories
    if (selectedCategories.length > 0) {
        console.log(skillsets)
        for (const skill in skillsets) {
            console.log(skill, console.log(selectedCategories))
            arr = selectedCategories.includes(skill) ? [...arr, ...skillsets[skill]] : [...arr];
        }
    }
    }

</script>

<div class="card">
    <a href={url} target="_blank" rel="noreferrer">
    <!-- Needs card image -->
    <div class="image">
        <h3>{hed}</h3>
        <figure>
            <img
                srcset={`/images/${image} 1x, /images/2x_${image} 2x`}
                src={`/images/${image}`}
            />
        </figure>
    </div>
    <!-- Awards annotation -->
    <!-- HED -->

    <!-- Skillsets -->
    {#if arr.length > 0}
        <span class="skillset-list">{arr.join(', ')}</span>
    {/if}
    
    <!-- COPY -->
    <p>{@html copy}</p>
    </a>
</div>

<style lang="scss">
    .card {
        font-family: $sans-dos;
        position: relative;
        width: 100%;
        height: 100%;
        a {
            color: $primary;
            text-decoration: none;
        }
    }

    h3 {
        font-size: 1.1em;
        background-color: rgba(215,254,255,0.75);
        padding: 4px;
        position: relative;
        transition: opacity 450ms ease-in;
        z-index: 2;
    }

    .image {
        content: "";
        position: relative;
        height: 0;
        width: 100%;
        background-color: $primary;
        padding-bottom: calc(100% / (16/9));
        transition: transform 250ms ease-in;
        cursor: pointer;
        &:hover {
            transform: scale(1.03);
            box-shadow: 0px 3px 15px rgba(0,0,0,0.4);
            h3 {
                opacity: 0;
            }
        }
        figure {
            margin: 0;
            top: 0;
            left:0;
            position: absolute;
            width: 100%;
            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    p {
        font-family: $sans-dos;
        font-weight: $medium;
        font-size: 14px;
    }
    .skillset-list {
        position: relative;
        display: block;
        width: fit-content;
        margin: 2px 0 0 auto;
        color: $background;
        font-size: 11px;
        background-color: $tertiary;
        border-radius: 8px;
        padding: 2px 8px;
    }
</style>