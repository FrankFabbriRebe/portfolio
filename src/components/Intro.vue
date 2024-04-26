<script>

export default {

    name: "Intro",

}

</script>

<template>

    <div class="intro d-flex flex-column align-items-center justify-content-center">

        <!-- container with picture and text -->
        <div class="container d-flex align-items-center justify-content-around">

            <div class="row">

                <!-- picture -->
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-up-right"
                    data-aos-duration="2000">
                    <img src="../assets/avatar.png" alt="">
                </div>

                <!-- text -->
                <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center"
                    data-aos="fade-up-left" data-aos-duration="2000">
                    <h1>F. Fabbri Rebecchi</h1>
                    <h2>Web developer</h2>

                    <!-- link section -->
                    <div class="link">
                        <!-- link to linkedIn -->
                        <a href="https://www.linkedin.com/in/fabbri-rebecchi/">
                            <i class="fa-brands fa-linkedin fa-5x" style="color: #00abbd;"></i>
                        </a>
                        <!-- link to gitHub -->
                        <a href="https://github.com/FrankFabbriRebe">
                            <i class="fa-brands fa-github fa-5x" style="color: #00abbd;"></i>
                        </a>
                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.intro {
    height: 100vh;
    background-color: #026E81;
}

h1,
h2 {
    color: #FF9933;
}

i {
    margin: 10px;
    transition: transform 0.3s;
}

i:hover {
    transform: scale(1.2);
}

img {
    width: 100%;
}
</style>