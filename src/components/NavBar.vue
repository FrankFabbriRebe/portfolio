<script>

export default {

    name: "NavBar",

}

</script>

<template>

    <div class="navbar fixed-top">
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="2500"
                    data-aos-duration="2500">
                    <a href="#">Skills</a>
                </div>
                <div class="col d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="2500"
                    data-aos-duration="2500">
                    <a href="#">Progetti</a>
                </div>
                <div class="col d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="2500"
                    data-aos-duration="2500">
                    <a href="#">Contatti</a>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.navbar {
    top: 0;
    left: 0;
    height: 10vh;
    background-color: #0099DD;
}

.row {
    width: 100%;
    // debug
    // border: 5px solid pink;
}

a {
    font-size: 30px;
    text-decoration: none;
    color: #FF9933;
    font-family: "Montserrat";
}

a:hover {
    text-decoration: underline;
}
</style>