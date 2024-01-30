<template>
  <q-page class="page-body">
    <div
      class="jumbotron"
      id="hero"
      style="position: relative; min-width: 100vw; min-height: 95vh"
    >
      <div class="column q-mx-xl" style="max-width: 55%">
        <div
          class="q-my-xl tag-line text-h1 text-green-9 text-weight-medium"
          style="
            position: relative;
            width: 90%;
            line-height: 1.2em;
            margin-top: 10%;
          "
        >
          Transforming the livelihoods of rural communities
        </div>

        <div>
          <q-btn
            unelevated
            size="lg"
            color="green-9"
            label="view dashboard"
            style="border-radius: 10px"
            to="/dashboard"
          />
        </div>
      </div>
      <div
        class="column mockup-section"
        style="
          min-width: 50%;
          min-height: 65%;
          position: absolute;
          right: 2%;
          bottom: 25%;
        "
      ></div>

      <div
        class="bg-white"
        style="position: absolute; bottom: 0%; width: 100vw; height: 15vh"
      >
        <div
          class="row items-center justify-between q-gutter-md q-mx-auto"
          style="max-width: 96vw"
        >
          <div class="column q-pl-md">
            <img
              src="~src/assets/PDF.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="src/assets/TRIAS.jpg"
              style="position: relative; width: 120%; height: 70px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="~/src/assets/FAO.jpg"
              style="position: relative; width: 100%; height: 100px; left: -1%"
            />
          </div>

          <div class="column q-pl-md">
            <img
              src="~src/assets/HELVETAS.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="src/assets/RIKOLTO.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="src/assets/IDHLogo.png"
              style="position: relative; width: 100%; height: 50px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="~src/assets/SOLIDARIDAD.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      class="my-font-2 text-center text-primary q-px-md q-py-xl"
      style="font-weight: 700; font-size: 30px"
    >
      About the Project
    </div> -->

    <!-- <div
      class="column justify-around q-py-xl justify-around"
      style="min-width: 100vw"
      id="products-section"
    >
      <div
        class="my-font-2 text-center q-px-md q-py-xl"
        style="font-weight: 700; font-size: 30px; color: #ffffff"
      ></div>
      <serviceContent />
    </div> -->

    <div
      style="min-width: 100%; min-height: 30vh"
      class="row bg-grey-9 justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-pa-none"
        style="max-width: 90vw; min-height: 100%"
      >
        <div class="row q-my-lg">
          <div class="col q-ma-md" style="min-width: 25vw">
            <div class="column items-center">
              <div class="column items-start q-gutter-none" style="">
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-white" style="font-size: 21px"
                        >Coordination Management Unit</q-item-label
                      >
                      <q-item-label class="text-white" style="font-size: 21px"
                        >Department of Policy and Planning, Ministry of
                        Agriculture</q-item-label
                      >
                      <div
                        class="col q-my-none q-py-none text-blue-2"
                        style="font-size: 12px"
                        caption
                        lines="2"
                      >
                        C/o P.O.Box LG 99, Legon<br />Accra, GHANA<br />(+233)
                        244671350<br />rmc@ug.edu.gh
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </div>
          <q-separator vertical color="grey-7" />
          <div class="col q-ma-md" style="min-width: 25vw">
            <div class="column items-center">
              <div
                class="q-my-none text-justify text-white"
                style="max-width: 25vw"
              >
                <div class="q-pa-md" style="font-weight: 700; font-size: 21px">
                  Community
                </div>
                <div class="q-px-md q-pb-md">
                  Stay informed about AGRI-CONNECT activities
                </div>
                <div class="row justify-left q-gutter-lg items-left">
                  <q-btn
                    round
                    flat
                    color="grey-3"
                    size="lg"
                    icon="mdi-facebook"
                  />
                  <q-btn
                    round
                    flat
                    color="grey-3"
                    size="lg"
                    icon="mdi-linkedin"
                  />
                  <q-btn
                    round
                    flat
                    color="grey-3"
                    size="lg"
                    icon="mdi-twitter"
                  />
                  <q-btn
                    round
                    flat
                    color="grey-3"
                    size="lg"
                    icon="mdi-content-copy"
                  />
                </div>
              </div>
            </div>
          </div>
          <q-separator vertical color="grey-7" />
          <div class="col items-center q-ma-md" style="min-width: 25vw">
            <div class="column items-center">
              <div
                class="q-my-none text-justify text-white"
                style="max-width: 15vw"
              >
                <div class="q-pa-md" style="font-weight: 700; font-size: 21px">

                </div>
                <div class="q-px-md q-pb-md">
                  <img
                    style="width: 150%"
                    src="https://agri-connect-tz.com/wp-content/uploads/2015/12/Agri-connect-LOGO.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";

const slide = ref(1);
const autoplay = ref(true);
</script>

<style scoped>
.page-body {
  /* display: flex;
  flex-direction: column;
  height: 100vh; Set the height of the page to the full viewport height */
  background: #f0f2f8; /* url("~/src/assets/3387682.jpg") no-repeat center; */
  background-size: cover;
  overflow: hidden;
}
.content {
  display: flex;
}

.jumbotron {
  background-image: url("src/assets/bgImg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.mockup-section {
  background-image: url("src/assets/mockup.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 85%;
}

.tag-line {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
</style>
