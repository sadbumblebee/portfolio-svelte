<script>
    export let path;

    let crumbs;

    console.log("crumb", path)

    $: {
        // Remove zero-length tokens.
        const tokens = path.split('/').filter((t) => t !== '');

        // Create { label, href } pairs for each token.
        let tokenPath = '';
        crumbs = tokens.map((t) => {
            tokenPath += '/' + t;
            return {
                label: t,
                href: tokenPath,
            };
        });

        // Add a way to get home too.
        crumbs.unshift({ label: 'home', href: '/' });
    }
</script>

<div class="crumbs">
{#each crumbs as c, i}
    <p>
    {#if i == crumbs.length-1}
        {c.label}
    {:else}
        <a href={c.href}>{c.label}</a> &ndash;&nbsp;
    {/if}
    </p>
{/each}
</div>

<style lang="scss">
    .crumbs {
        margin: 10px 0 0 10px;
    }
    p {
        margin: 0;
        display: inline;
        color: $secondary;
        font-family: $sans;
        font-size: 14px;
        font-weight: $light;
    }
</style>