<!-- Layout -->
<script>
    // @ts-nocheck
    import Crumb from '$lib/components/Crumb.svelte';
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import { fade } from 'svelte/transition'
    import { page } from '$app/stores';

    // Normalize 
    import '$lib/style.scss'
    
    export let data

</script>

<svelte:head>
  <title>Daniel Wolfe, data journalist</title>
  <meta property="og:image" content="/images/social-card.jpg">
  <meta property="og:url" content="https://www.sadbumblebee.com">
  <meta property="og:title" content="Daniel Wolfe, data journalist">
  <meta property="og:description" content="Hey there metadata, nice to be a little preview text here. Whether this little card is in Slack or Discord, I'm happy to be here 👋.">
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400,500" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Emoji:wght@300..700&display=swap" rel="stylesheet">
  
</svelte:head>

<!-- Component -->
<Header />
<Crumb path={$page.url.pathname} />
<!-- Rest of content -->
<section>
{#key data.currentRoute}
  <main 
    in:fade={{ duration: 150, delay: 150 }} 
    out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}
<Footer />
</section>

<style lang="scss">

section {
    background-color: $background;
    margin: 0 auto;
}


</style>