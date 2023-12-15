<template>
  <q-page class="page-body">
    <div class="row">
      <div class="bg-grey-9 text-white q-py-md" style="width: 100%">
        <q-toolbar>
          <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

          <q-toolbar-title style="font-weight: bolder" class>
            <!-- <img src="~/src/assets/LOGO.png" style="width:300px"/> -->
            AGRI-CONNECT
          </q-toolbar-title>
        </q-toolbar>
      </div>
    </div>

    <div class="row items-start jumbotron page-tint" id="hero" style="">
      <div class="col" style="max-width: 100%">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          height="800px"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://agri-connect-tz.com/wp-content/uploads/2023/08/MSKL2457-1-scaled.jpg"
          >
            <div class="absolute-center row custom-caption">
              <div class="col-6 bg-green">Infrastructure</div>
              <div
                class="col-6"
                style="
                  width: 35vw;
                  height: 35vh;
                  background-color: #00000090;
                  border-left-width: 10px;
                  border-left-color: aquamarine;
                "
              ></div>
            </div>
          </q-carousel-slide>

          <!-- <q-carousel-slide
            :name="2"
            img-src="https://agri-connect-tz.com/wp-content/uploads/2023/09/PARTOF1-scaled.jpg"
          >
            <div class="absolute-center custom-caption">
              <div class="text-h5">Sustainable Unifired Monitoring System</div>
              <div class="text-subtitle1"></div>
            </div>
          </q-carousel-slide> -->
        </q-carousel>
      </div>
    </div>

    <div
      class="my-font-2 text-center text-primary q-px-md q-py-xl"
      style="font-weight: 700; font-size: 30px"
    >
      About the Project
    </div>

    <div
      style="min-width: 10vw; min-height: 70vh"
      class="row items-center justify-center q-px-none q-py-lg q-ma-none"
      id="about-section"
    >
      <div
        class="col q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div class="row q-mb-lg">
          <div class="col q-mx-xl">
            <q-card
              flat
              class="my-card text-grey-9 my-font-2 text-justify"
              style="background-color: #0f1b24a00; border-radius: 15px"
            >
              <!-- <div
                class="my-font-2 text-center q-px-md q-py-md"
                style="font-weight: 700; font-size: 30px; color: #25408f"
              >
                About the Project
              </div> -->
              <q-card-section
                class=""
                style="font-weight: 400; font-size: 18px"
              >
                <P>
                  AGRI-CONNECT is an EU-funded programme, contributing towards
                  inclusive economic job creation in the agricultural sector,
                  and towards increasing food and nutrition security in
                  Tanzania.
                </P>
              </q-card-section>
            </q-card>
          </div>
          <!-- <div class="col q-mx-xl" style="border-radius: 15px">
            <q-video
              src="https://www.youtube.com/embed/g-gz1ZiPXkI?si=5grVleFNA5xb6gr9"
              :ratio="16 / 9"
            />
          </div> -->
        </div>
      </div>
    </div>

    <div
      class="column justify-around q-py-xl justify-around"
      style="min-width: 100vw"
      id="products-section"
    >
      <div
        class="my-font-2 text-center q-px-md q-py-xl"
        style="font-weight: 700; font-size: 30px; color: #ffffff"
      ></div>
      <serviceContent />
    </div>

    <div
      style="min-width: 100%; min-height: 45vh; background-color: #ffffff"
      class="row items-center justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div
          class="my-font-2 text-center q-px-md q-py-md"
          style="font-weight: 700; font-size: 30px; color: #25408f"
        >
          Implementing Partners
        </div>
        <!-- <div class="q-px-md q-pb-md">
          <img
            style="width: 70%"
            src="https://agri-connect-tz.com/wp-content/uploads/2015/12/Agri-connect-LOGO.png"
          />
        </div> -->
        <div class="row q-gutter-x-lg">
          <div class="column">
            <img
              src="~/src/assets/EN_FundedbytheEU_RGB_POS.png"
              style="position: relative; width: 100%; height: 70px"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="~/src/assets/FAO.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>

          <div class="column q-pl-md">
            <img
              src="~/src/assets/IDHLogo.png"
              style="position: relative; width: 100%; height: 50px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="~src/assets/PDF.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
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
              src="~src/assets/SOLIDARIDAD.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
        </div>
      </div>
    </div>

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
                  Stay informed about coastal wonders. Subscribe now for
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
                  Make your contribution
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
</style>
