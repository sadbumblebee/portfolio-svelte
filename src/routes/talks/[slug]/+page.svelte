<script>
	export let data;
	const { title, desc, event, links, date } = data;

    import Embed from '$lib/components/Embed.svelte'
</script>

<div class="title-container">
    <div class="event-date">
        <p class="event">{event}</p>
        <p class="date">{date}</p>
    </div>
    <p class="title">{title}</p>
    <p class="description">“{desc}”</p>
    <div class="talk-links">
        {#each links as link}
        <Embed type={link.type} url={link.url}/>
        {/each}
    </div>
</div>


<style lang="scss">
    p {
        font-size: 2em;
    }
    .title {
        margin: 0;
    }
    .description {
        font-size: 1.2em;
    }
    .event-date {
        margin-top: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .date {
            display: block;
            font-size: .9em;
            text-align: right;
            font-style: italic;
        }
        .event {
            background-color: $primary;
            color: white;
            font-size: .9em;
            padding: 4px 8px;
            margin: 0;
        }
    }
    .talk-links {
        display: flex;
        flex-direction: column;
    }
    
    .title-container {
        margin: 0 auto;
        max-width: $column;
        font-family: $sans;
    }
    .embeds-container {
        margin: 0 auto;
        max-width: $super-column;
    }
    @media all and (max-width: $column) {
    .title-container {
        margin: 2.5em 10px 0;
    }
}
</style>