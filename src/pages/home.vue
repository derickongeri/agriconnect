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
        class="bg-white q-py-lg"
        style="position: absolute; bottom: 7%; width: 100vw"
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
              src="~src/assets/TRIAS.jpg"
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
              src="~src/assets/RIKOLTO.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="~src/assets/IDHLogo.png"
              style="position: relative; width: 100%; height: 50px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="~src/assets/SOLIDARIDAD.jpg"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="src/assets/Vi_Agroforestry.png"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div
        class="row bg-white items-center q-mx-auto q-px-xl justify-between"
        style="max-width: 80vw; min-height: 60vh"
      >
        <div class="col-4 text-center" style="min-height: 50%">
          <div class="q-my-xl tag-line text-h3 text-green-9 text-weight-medium">
            About the
          </div>
          <div class="q-my-xl tag-line text-h2 text-green-9 text-weight-medium">
            Project
          </div>
        </div>
        <div
          class="col-6 text-weight-normal text-grey-9"
          style="font-size: 24px; line-height: 1.75"
        >
          AGRI-CONNECT is a food security product which aims at increasing food
          and nutrition security in Tanzania by supporting development of tea,
          coffee, and horticulture value chains. The programme is implemented
          mainly by the Ministry of Agriculture (MoA) in the mainland and the
          Ministry of Agriculture, Irrigation, Natural Resources, and Livestock
          (MAINL) of the Revolutionary Government of Zanzibar.
        </div>
      </div>
    </div>

    <div
      class="bg-lime q-mx-auto"
      style="width: 65vw; border-top: solid greenyellow"
    ></div>

    <div
      class="bg-white"
      style="min-width: 100vw; min-height: 70vh; padding-top: 5%"
    >
      <div
        class="fit q-mx-auto row wrap q-gutter-y-xl justify-between items-center content-start q-pa-md"
        style="max-width: 80vw; min-height: 50vh"
      >
        <div
          class="bg-grey-6 text-center"
          style="overflow: auto; min-width: 25em; width: 35%"
        >
          <q-card class="no-border-radius">
            <q-card-section>
              <div
                class="tag-line text-h5 text-weight-medium"
                style="color: #8bcc00; font-size: 42px; line-height: 1.5"
              >
                AGRI-CONNECT is founded on 6 guiding principles
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="bg-grey-6 my-font" style="overflow: auto ;min-width: 25em; max-width: 15%">
          <q-card class="no-border-radius">
            <q-card-section>
              <div class="column items-center q-gutter-y-md">
                <div class="row">
                  <img src="~src/assets/icon_1.png" style=""/>
                </div>
                <div class="row text-center text-weight-bold" style="font-size: 21px;">
                1. Behaviour change for good nutrition practices
              </div>
              </div>

            </q-card-section>
          </q-card>
        </div>

        <div class="bg-grey-6 my-font" style="overflow: auto ;min-width: 25em; max-width: 15%">
          <q-card class="no-border-radius">
            <q-card-section>
              <div class="column items-center q-gutter-y-md">
                <div class="row">
                  <img src="~src/assets/icon_2.png" style=""/>
                </div>
                <div class="row text-center text-weight-bold" style="font-size: 21px;">
                2. Improving production, processing and marketing
              </div>
              </div>

            </q-card-section>
          </q-card>
        </div>

        <div class="bg-grey-6 my-font" style="overflow: auto ;min-width: 25em; max-width: 15%">
          <q-card class="no-border-radius">
            <q-card-section>
              <div class="column items-center q-gutter-y-md">
                <div class="row">
                  <img src="~src/assets/icon_3.png" style=""/>
                </div>
                <div class="row text-center text-weight-bold" style="font-size: 21px;">
                3. Promoting women and youth employment and climate smart agriculture
              </div>
              </div>

            </q-card-section>
          </q-card>
        </div>

        <div class="bg-grey-6 my-font" style="overflow: auto ;min-width: 25em; max-width: 15%">
          <q-card class="no-border-radius">
            <q-card-section>
              <div class="column items-center q-gutter-y-md">
                <div class="row">
                  <img src="~src/assets/icon_4.png" style=""/>
                </div>
                <div class="row text-center text-weight-bold" style="font-size: 21px;">
                4. Supporting better policies for an enabling environment
              </div>
              </div>

            </q-card-section>
          </q-card>
        </div>

        <div class="bg-grey-6 my-font" style="overflow: auto ;min-width: 25em; max-width: 15%">
          <q-card class="no-border-radius">
            <q-card-section>
              <div class="column items-center q-gutter-y-md">
                <div class="row">
                  <img src="~src/assets/icon_5.png" style=""/>
                </div>
                <div class="row text-center text-weight-bold" style="font-size: 21px;">
               5. Connecting farmers to markets
              </div>
              </div>

            </q-card-section>
          </q-card>
        </div>

        <div class="bg-grey-6 my-font" style="overflow: auto ;min-width: 25em; max-width: 15%">
          <q-card class="no-border-radius">
            <q-card-section>
              <div class="column items-center q-gutter-y-md">
                <div class="row">
                  <img src="~src/assets/icon_6.png" style=""/>
                </div>
                <div class="row text-center text-weight-bold" style="font-size: 21px;">
               6. More investment by SMEs
              </div>
              </div>

            </q-card-section>
          </q-card>
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
                        P.O.Box 2182<br />Dodoma, Tanzania<br/> agriconnect@locateit.co.ke <br/>
                        <a class="text-primary" href="https://agri-connect-tz.com/">https://agri-connect-tz.com/</a>
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
                <div
                  class="q-pa-md"
                  style="font-weight: 700; font-size: 21px"
                ></div>
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
