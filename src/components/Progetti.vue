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
            <div class="row">

                <!-- Delliveboo -->
                <div class="col-md-6 d-flex flex-column align-items-center mb-3">
                    <h3>Deliveboo</h3>
                    <a href="https://github.com/FrankFabbriRebe/final_project_front-end">
                        <img src="../assets/progetti/Deliveboo.jpg" alt="">
                    </a>
                </div>

                <!-- Spotify web -->
                <div class="col-md-6 d-flex flex-column align-items-center mb-3">
                    <h3>titolo</h3>
                    <img src="../assets/progetti/Deliveboo.jpg" alt="">
                </div>

            </div>

            <div class="row">

                <!-- Delliveboo -->
                <div class="col-md-6 d-flex flex-column align-items-center mb-3">
                    <h3>titolo</h3>
                    <img src="../assets/progetti/Deliveboo.jpg" alt="">
                </div>

                <!-- Spotify web -->
                <div class="col-md-6 d-flex flex-column align-items-center mb-3">
                    <h3>titolo</h3>
                    <img src="../assets/progetti/Deliveboo.jpg" alt="">
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

// debug
// .row {
//     border: 3px solid red;
// }

// [class^="col"] {
//     border: 3px solid yellow;

// }</style>