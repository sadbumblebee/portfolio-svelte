<script>
// @ts-nocheck

// Card component
import Card from '$lib/components/Card.svelte'
// Card data
import { projectData } from '$lib/data/projects.js'
import { monthNames } from '$lib/data/months.js'
import { flip } from "svelte/animate";

const RSS_URL = `https://www.washingtonpost.com/arcio/rss/author/Daniel-Wolfe/`;

$: orderedProjects = [...projectData]
$: selectedCategories = []

// Organize categories by:
// Mapping
// -- QGIS
// -- EarthEngine
// -- Mapbox
// Visuals
// -- ai2html
// -- JS
// -- photography
// -- d3
// Reporting
// Data
// -- Pandas
// -- Python
// -- d3

const strDateToDateObj = (str) => {
    let [month, year] = str.split(' ')
    let date = new Date(year, monthNames.indexOf(month))
    return date
}

const handleCategoryClick = (e) => {
    let clickedCategory = e.target.innerText;
    // If the clicked category is already in the list
    if (selectedCategories.includes(clickedCategory)) {
        selectedCategories = selectedCategories.filter(s => s !== clickedCategory);
    // If it doesn't exist in category, add it to categories
    } else {
        selectedCategories = [...selectedCategories, clickedCategory];
    }
    orderedProjects = [...projectData]
        .filter( obj => obj.categories
            .some(categories => selectedCategories.indexOf(categories) >= 0)
        )
    // If clicking has emptied this, then just reset
    if (selectedCategories.length == 0) orderedProjects = [...projectData]
}

let allCategories = [...new Set([].concat(...projectData.map(o => o.categories)))]

</script>

<!-- Content intro -->
<div class="content">
<h1>Selected work</h1>
<p>Below are highlights from my decade's long work in data visualization. </p>
<p class="tl filter-text">View by </p>
<ul class="filter-categories">
{#each allCategories as category}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li value={category} on:click={handleCategoryClick} 
        class="category {selectedCategories.includes(category) ? 'active' : 'inactive'}"
    >
        {category}
    </li>
{/each}
</ul>
</div>

<!-- Work layout -->
<div class="grid">
    {#each orderedProjects as project (project)}
    <div animate:flip="{{ duration: 250 }}">
        <Card {...project} {selectedCategories}/>
    </div>
    {/each}
</div>

<style lang="scss">
p {
    font-size: 2em;
}

.filter-text {
    text-transform: uppercase;
    color: $secondary;
    font-size: .9em;
    font-family: $sans-dos;
}

.filter-categories {
    font-size: 1.5em;
    margin: 0;
    font-family: $sans-dos;
    color: $primary;
    padding: unset;
    position: relative;
    z-index: 0;
    li {
        cursor: pointer;
        position: relative;
        z-index: 1;
        display: inline-block;
        background-color: $background;
        border: 2px solid $secondary;
        padding: 10px 16px;
        margin: 0 10px 10px 0;
        border-radius: 50px;
        transition: background-color 250ms ease-in, color 250ms ease-in;
        &:hover {
            color: $background;
            background-color: $tertiary;
            border: 2px solid $background;
        }
        &.active {
            background-color: $tertiary;
            border: 2px solid $background;
            color: white;
        }

        .inactive {
            background-color: unset;
        }
    }
}


.grid {
    margin: 5em auto 0;
    padding: 0 20px;
    display: grid;
    column-gap: 20px;
    row-gap: 20px;
    max-width: $super-column;
    grid-template-columns: 1fr 1fr 1fr;
    a {
        color: $tertiary;
    }
}

@media all and (max-width: $wide-column) {
    .grid {
        padding: 0 10px;
        margin: 2.5em auto 0;
        grid-template-columns: 1fr 1fr;
    }
}

@media all and (max-width: $column) {
    .grid {
        margin: 2.5em auto 0;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
    }
    p {
        font-size: 1.2em;
    }
}

</style>