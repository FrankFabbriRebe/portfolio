<script>

export default {

    name: "Profile",

}

</script>

<template>

    <div class="profile d-flex justify-content-center">


        <div class="container d-flex alig-items-center justify-content-center flex-column">

            <!-- title -->
            <div class="title d-flex justify-content-center" data-aos="zoom-in-up" data-aos-duration="2000">
                <h1>About me</h1>
            </div>

            <!-- content -->
            <div class="row">

                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <img src="../assets/webDev.avif" alt="">
                </div>

                <div class="col-12 col-md-6">
                    <div class="row">

                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <div class="box d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-solid fa-laptop fa-2xl" style="color: #ff9933;"></i>
                                <h3>Esperienza</h3>
                                <h6>6+ mesi</h6>
                                <h6>Jr. web developer trainee</h6>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 d-flex justify-content-center">
                            <div class="box d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-solid fa-laptop fa-2xl" style="color: #ff9933;"></i>
                                <h3>Esperienza</h3>
                                <h6>6+ mesi</h6>
                                <h6>Jr. web developer trainee</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>



    </div>

</template>

<style lang="scss" scoped>
.profile {
    // width: 100vw;
    // height: 100vh;
    background-color: #00ABBD;
}

h1 {
    color: #FF9933;
}

.box {
    background-color: #026E81;
    border-radius: 20px;
    padding: 40px;
}

i {
    margin-bottom: 20px;
}

// debug
.container {
    border: 3px solid red;
}

[class^="col"] {
    border: 3px solid yellow;
}

.row {
    border: 3px solid green;
}
</style>