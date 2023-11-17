<!-- Footer -->
<footer>
<div class="social">
    <hr />
    <ul class="links">
        <li>
            <a href="https://www.twitter.com/sadbumblebee" rel="noreferrer" target="_blank">Twitter</a>
        </li>
        <li>
            <a href="https://www.github.com/sadbumblebee" rel="noreferrer" target="_blank">Github</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/danieljwolfe" rel="noreferrer" target="_blank">LinkedIn</a>
        </li>
        <li>
            <a href="mailto:sadbumblebee@gmail.com" rel="noreferrer" >email</a>
        </li>
    </ul>
</div>
<div class="credit">
    <p>Daniel Wolfe built this site with <a href="https://kit.svelte.dev/" rel="noreferrer" target="_blank">SvelteKit</a> 🐝 {new Date().getFullYear()}.</p>
</div>
</footer>

<style lang="scss">
@import '../src/lib/_variables.scss';

footer {
    margin: 5em auto 0;
    max-width: $column;
}

.links {
    text-transform: lowercase;
    padding: 0;
    color: $secondary;
    font-family: $sans;
    font-size: 2.25em;
    li {
        display: inline-block;
        margin-left: -.15em;
    }
    li:first-child {
        margin: unset;
    }
    li::before {
        content: '\00a0';
    }
    li::after {
        content: '\00a0.'
    }
    li:last-child::after {
        content: ''
    }
}

.credit {
    font-family: $sans;
    font-size: 14px;
    text-align: right;
    color: $secondary;
}

hr {
    border: 0;
    width: 50%;
    border-top: 5px solid $secondary;
    margin: 0 0 auto;
}

@media all and (max-width: $column) {
    hr {
        border-top: 3px solid $secondary;
    }
    footer {
        padding: 0 10px;
    }
    .links {
        font-size: 1.5em;
    }
}

</style>