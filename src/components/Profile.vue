<script>

export default {

    name: "Profile",

}

</script>

<template>

    <div class="profile">

        <div class="container">

            <!-- title -->
            <div class="title d-flex justify-content-center pt-5" data-aos="zoom-in-up" data-aos-duration="2500">
                <h1>About me</h1>
            </div>

            <!-- content -->
            <div class="row mt-5 d-flex">

                <!-- img -->
                <div class="col">
                    <img src="../assets/webDev.avif" alt="">
                </div>

                <!-- text -->
                <div class="col">

                    <div class="row d-flex align-items-center">

                        <div class="col text-align-center">
                            <div class="button d-flex flex-column align-items-center">
                                <i class="fa-solid fa-laptop-code fa-2x" style="color: #ff9933;"></i>
                                <h5>Espereinze</h5>
                                <h6>6+ mesi</h6>
                                <h6>Jr. Web developer trainee</h6>
                            </div>
                        </div>

                        <div class="col text-align-center">
                            <div class="button d-flex flex-column align-items-center">
                                <i class="fa-solid fa-laptop-code fa-2x" style="color: #ff9933;"></i>
                                <h5>Espereinze</h5>
                                <h6>6+ mesi</h6>
                                <h6>Jr. Web developer trainee</h6>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, minus distinctio dolorum
                                quam
                                ab explicabo expedita sit dignissimos! Nemo ratione saepe ducimus dolorem voluptates
                                velit
                                eveniet blanditiis molestias eos dolore.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, minus distinctio dolorum
                                quam
                                ab explicabo expedita sit dignissimos! Nemo ratione saepe ducimus dolorem voluptates
                                velit
                                eveniet blanditiis molestias eos dolore.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </div>

</template>

<style lang="scss" scoped>
.profile {
    width: 100vw;
    height: 90vh;
    background-color: #00ABBD;
}

h1 {
    font-family: "Montserrat";
    color: #FF9933;
}

img {
    border-radius: 20px;
}

.button {
    border-radius: 20px;
    background-color: #026E81;
    text-align: center;
    padding: 20px;
}

.text {
    text-align: center;
}
</style>