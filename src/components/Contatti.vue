<script>

export default {

    name: "Contatti",

}

</script>

<template>

    <div class="contatti">

        <div class="container d-flex align-items-center justify-content-center flex-column p-5">

            <!-- title -->
            <div class="title d-flex justify-content-center mb-5" data-aos="zoom-in-up" data-aos-duration="1000">
                <h1>Contatti</h1>
            </div>

            <div class="box d-flex justify-content-center align-items-center flex-column" data-aos="zoom-in-up"
                data-aos-duration="1000" data-aos-delay="1000">
                <div>
                    <i class="fa-solid fa-envelope fa-2xl" style="color: #026e81;"></i>
                    <a href="mailto:rebecchi.ff@gmail.com">rebecchi.ff@gmail.com</a>
                </div>
                <div>
                    <i class="fa-brands fa-linkedin fa-2xl" style="color: #026e81;"></i>
                    <a href="https://www.linkedin.com/in/fabbri-rebecchi/">linkedin</a>
                </div>

            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.contatti {
    background-color: #026E81;
}

h1 {
    color: #FF9933;
}

.box {
    background-color: #00ABBD;
    padding: 30px;
    border-radius: 20px;
    gap: 10px;
    width: fit-content;
}

i {
    margin-right: 10px;
}

a {
    text-decoration: none;
    color: #026E81;
}

[class^="col"] {
    border: 3px solid yellow;
}
</style>