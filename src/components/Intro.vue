<script>

export default {

    name: "Intro",

}

</script>

<template>

    <div class="intro d-flex align-items-center">

        <div class="container">

            <div class="row">

                <!-- picture -->
                <div class="col-md-6">
                    <div class="profile_picture d-flex align-items-center justify-content-center"
                        data-aos="fade-up-right" data-aos-duration="2500">
                        <img src="../assets/avatar.png" alt="avatar">
                    </div>
                </div>

                <!-- text -->
                <div class="col-md-6 d-flex flex-column align-items-center justify-content-center"
                    data-aos="fade-up-left" data-aos-duration="2500">
                    <!-- <h1>F. Fabbri Rebecchi</h1> -->
                    <h2>Web developer</h2>

                    <!-- div link -->
                    <div class="link">
                        <i class="fa-brands fa-linkedin fa-5x" style="color: #00abbd;"></i>
                        <i class="fa-brands fa-github fa-5x" style="color: #00abbd;"></i>
                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.intro {
    height: 90vh;
    width: 100vw;
    background-color: #026E81;
    margin-top: 10vh;
}

.profile_picture {
    width: 100%;
    height: 100%;
    // background-image: url(../assets/avatar.png);
    // background-position: center;
    // background-size: cover;
    // background-repeat: no-repeat;
    // border: 10px solid black;
}

h1,
h2 {
    color: #FF9933;
    font-family: "Montserrat";
}

.link i {
    margin: 10px
}

// debug
.container {
    // border: 10px solid red;
    height: 50vh;
}

.row {
    // border: 10px solid pink;
    width: 100%;
}
</style>