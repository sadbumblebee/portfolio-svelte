<script>
// @ts-nocheck
import { talksData } from '$lib/data/talks.js'
</script>

<!-- Content intro -->
<div class="content">
<h1>Previous talks</h1>
<p>When possible I've linked to slides, audio and video from my past events.</p>
<ul>
{#each talksData as talk}
    <li class="talk-container">
        <div class="talk-title">
            <h4>{talk.title}</h4>
            <p class="event">{talk.event}</p>
        </div>
        <div class="talk-info">
            <p class="talk-desc">“{talk.desc}”</p>
            <div class="talk-details">
                <p class="talk-links">
                    {#each talk.links as link}
                    <span>
                        <a href={link.url} target="_blank">{link.type}</a>
                    </span>
                    {/each}
                </p>
                <p class="talk-date">{talk.date}</p>
            </div>
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
    }
    p {
        font-size: 1.2em;
    }
}

.talk-container {
    margin: 8px 0;
    &::after {
        content: "* * *";
        display: block;
        color: $secondary;
        font-size: .75em;
        letter-spacing: .5em;
        text-align: center;
    }
    &:last-child:after {
        display: none;
    }
}

.talk-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
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

.talk-info {
    margin: 12px 0 0 0;
    p {
        margin: 0;
    }
    .talk-details {
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .talk-date {
        display: block;
        font-size: .9em;
        text-align: right;
        font-style: italic;
    }
    .talk-links {
        font-size: .9em;
        margin: 6px 0 0 0;
        a {
            color: $tertiary;
            &:hover {
                color: $primary;
            }
        }
        span { // simple separator for lists
            &::after {
                content: "| "
            }
            &:last-child:after {
                display: none;
            }
        }
    }
}

.disclaimer {
    background-color: $secondary;
    padding: 6px;
}

</style>