<script>

export default {

    name: "Profile",

}

</script>

<template>

    <div class="profile d-flex justify-content-center">


        <div class="container d-flex alig-items-center justify-content-center flex-column p-5">

            <!-- title -->
            <div class="d-flex justify-content-center mb-5" data-aos="zoom-in-up" data-aos-duration="1000">
                <h1>About me</h1>
            </div>

            <!-- content -->
            <div class="row mb-3">

                <!-- laptop img -->
                <div class="col-12 col-md-6 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000"
                    data-aos-delay="1000">
                    <img src="../assets/webDev.avif" alt="">
                </div>

                <!-- other content -->
                <div class="col-12 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">

                    <div class="row">

                        <div class="col-12 col-md-6 d-flex justify-content-center my-3">
                            <div class="box d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-solid fa-laptop fa-2xl" style="color: #ff9933;"></i>
                                <h3>Esperienza</h3>
                                <h6>6+ mesi</h6>
                                <h6>Jr. web developer trainee</h6>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 d-flex justify-content-center my-3">
                            <div class="box d-flex justify-content-center align-items-center flex-column">
                                <i class="fa-solid fa-user-graduate fa-2xl" style="color: #ff9933;"></i>
                                <h3>Formazione</h3>
                                <h6>Booelan</h6>
                                <h6>Full stack web development</h6>
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-12 text mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam accusantium expedita
                                distinctio, optio ea. Cum nihil nesciunt incidunt quas molestiae ipsam pariatur. Quod at
                                pariatur deserunt cupiditate ipsam iste!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam accusantium
                                expedita
                                distinctio, optio ea. Cum nihil nesciunt incidunt quas molestiae ipsam pariatur. Quod at
                                pariatur deserunt cupiditate ipsam iste!</p>
                        </div>
                    </div>

                </div>

            </div>

            <!-- download cv -->
            <a href="/portfolio/cv/CV - Francesco Fabbri Rebecchi.pdf" target="_blank" rel="noopener noreferrer">
                <div class="title d-flex justify-content-center mb-3" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div class="box download d-flex justify-content-center align-items-center flex-column mt-5">
                        <h3>Clicca qui per visualizzare il mio CV</h3>
                    </div>
                </div>
            </a>


        </div>



    </div>

</template>

<style lang="scss" scoped>
.profile {
    background-color: #00ABBD;
}

h1,
h3 {
    color: #FF9933;
}

.text {
    text-align: center;
}

img {
    border-radius: 20px;
}

.box {
    background-color: #026E81;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    color: #00ABBD;
}

a {
    text-decoration: none;
    color: #FF9933;
}

i {
    margin-bottom: 30px;
}

p {
    color: #026E81;
}
</style>