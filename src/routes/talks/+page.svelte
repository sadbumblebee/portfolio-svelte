<script>
// @ts-nocheck
// import { talksData } from '$lib/data/talks.js'
export let data;

const slugify = (str) => { return `./talks/${str.toLowerCase().split(' ').join('-')}` }

</script>

<!-- Content intro -->
<div class="content">
<h1>Previous talks</h1>
<p>When possible I've linked to slides, audio and video from my past events.</p>
<ul>
{#each data.talks['talksData'] as talk}
    <li class="talk-container">
        <div class="talk-title">
            <a href={slugify(talk.title)}><h4>{talk.title}</h4></a>
            <p class="event">{talk.event}</p>
        </div>
    </li>
{/each}
</ul>

<!-- <div class="disclaimer">
<p>Want to connect about a talk?</p>
</div> -->
</div>

<style lang="scss">


p {
    font-size: 2em;
}

ul {
    position: relative;
    margin: 0; // Remove indent
    padding: 0;
}

li {
    position: relative;
    list-style-type: none; // Remove bullet points
    h4 {
        font-size: 1.5em;
        font-weight: 300;
        &::after {
            position: absolute;
            color: $tertiary;
            content: '👉';
            font-family: $emoji;
            left: -65px;
            opacity: 0;
            transition: 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        &:hover::after {
            opacity: 1;
            left: -35px;
        }
    }
    p {
        font-size: 1.2em;
    }
}

.talk-container {
    margin: 8px 0;
}

.talk-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    a {
        color: $primary;
        &:hover {
            color: $secondary;
        }
    }
    h4 {
        margin: 0;
    }
    .event {
        background-color: $primary;
        color: white;
        font-size: .9em;
        padding: 4px 8px;
        margin: 0;
    }
}

.talk-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
        p {
            margin: 12px 0 0 0;
        }
        .talk-date {
            display: block;
            font-size: .9em;
            text-align: right;
            font-style: italic;
        }
        .talk-links {
            font-size: 1.2em;
            a {
                color: $tertiary;
                &:hover {
                    color: $primary;
                }
            }
            span { // simple separator for lists
                &.emoji {
                    font-family: $emoji;
                    color: $primary;
                    font-optical-sizing: auto;
                    font-weight: 700;
                    font-style: normal;
                }
                &::after {
                    content: "| "
                }
                &:last-child:after {
                    display: none;
                }
            }
        }
}

.talk-info {
    margin: 8px 0 0 0;
}

.disclaimer {
    background-color: $secondary;
    padding: 6px;
}

@media all and (max-width: $column) {
    li {
            h4 {
            &::after {
                content: "";
            }
        }
    }
}

</style>