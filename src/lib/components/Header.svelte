<!-- Header -->
<header>
    <!-- <h1>Sadbumblebee</h1> -->
    <div class="head-container">
    <figure>
        <img
            alt="a handrawn avatar of the author"
            srcset={`/images/sbb_head.png 1x, /images/sbb_head@2x.png 2x`}
            src={`/images/sbb_head.png`}
        />
    </figure>
    </div>
</header>

<style lang="scss">

header {
    margin: 0;
    width: 100%;
    height: 10em;
    background-color: #fefefe;
    position: relative;
    border-bottom: 5px solid $secondary;
}

figure {
    width: fit-content;
    margin: 20px 0 0 0;
}

.head-container {
    pointer-events: none;
    margin: 0 auto;
    max-width: $super-column;
    display: flex;
    align-items: end;
    justify-content: end;
}

@media all and (max-width: $column) {
    header {
        border-bottom: 3px solid $secondary;
    }
    .head-container {
        justify-content: center;
    }
    figure {
        margin: 50px 0 0 0;
    }
    figure img {
        width: 300px;
        overflow-x: hidden;
    }
}

</style>