<script>

export default {

    name: "Progetti",

}

</script>

<template>

    <div class="progetti">

        <div class="container d-flex alig-items-center justify-content-center flex-column p-5">

            <!-- title -->
            <div class="title d-flex justify-content-center mb-5" data-aos="zoom-in-up" data-aos-duration="1000">
                <h1>Progetti</h1>
            </div>

            <!-- progetti -->
            <div class="row d-flex flex-wrap">

                <!-- Delliveboo -->
                <div class="col-md-6 d-flex flex-column align-items-center mb-3 deliveboo" data-aos="zoom-in-up"
                    data-aos-duration="1000" data-aos-delay="1000">
                    <h3>Deliveboo</h3>
                    <a href="https://github.com/FrankFabbriRebe/final_project_front-end">
                        <img src="../assets/progetti/Deliveboo.png" alt="">
                    </a>
                </div>

                <!-- Boolzapp -->
                <div class="col-md-6 d-flex flex-column align-items-center mb-3" data-aos="zoom-in-up"
                    data-aos-duration="1000" data-aos-delay="1300">
                    <h3>Boolzapp</h3>
                    <a href="https://frankfabbrirebe.github.io/vue-boolzapp/">
                        <img src="../assets/progetti/Boolzapp.jpg" alt="">
                    </a>
                </div>

                <!-- Spotify web app -->
                <div class="col-md-6 d-flex flex-column align-items-center mb-3" data-aos="zoom-in-up"
                    data-aos-duration="1000" data-aos-delay="1600">
                    <h3>Spotify web app</h3>
                    <a href="https://frankfabbrirebe.github.io/html-css-spotifyweb/">
                        <img src="../assets/progetti/Spotify.jpg" alt="">
                    </a>
                </div>

                <!-- Boolflix -->
                <div class="col-md-6 d-flex flex-column align-items-center mb-3" data-aos="zoom-in-up"
                    data-aos-duration="1000" data-aos-delay="1900">
                    <h3>Boolflix</h3>
                    <a href="https://frankfabbrirebe.github.io/vite-boolflix/">
                        <img src="../assets/progetti/Boolflix.png" alt="">
                    </a>
                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.progetti {
    background-color: #00ABBD;
}

h1 {
    color: #FF9933;
}

h3 {
    color: #026E81;
}

img {
    height: 100%;
    width: 100%;
}

.box {
    background-color: #026E81;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    color: #00ABBD;
}

img:hover {
    border: 3px solid #026E81;
}
</style>