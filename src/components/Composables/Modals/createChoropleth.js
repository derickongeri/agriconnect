import { axios } from "src/boot/axios";
import { useSumStore } from "stores/sumdata/index.js";

export default function setSelectedVect() {
  const store = useSumStore();

  const selectedVect = async function () {
    let grantee_selected = store.getUserSelection.selected_grantee;
    let region = ""

    let wfsUrl = `http://45.76.136.154/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3A${grantee_selected}_Infrastructures&outputFormat=application%2Fjson`;

    region = region.replace(/'/g, "%27").replace(/ /g, "%20");

    let wfsURL = wfsUrl + "CQL_FILTER=NAME" + "='" + region + "'";

    let response = await axios.get(wfsURL);

    //let vectLayer = response.data;

    let vectLayer = L.geoJSON(response.data, {
      onEachFeature: function (feature, layer) {
        // Add any custom behavior or popups here
        layer.bindPopup("<b>Feature Type:</b> " + feature.properties.TYPE);
      },
    });

    return vectLayer;
  };

  const customVector = function () {};

  return {
    selectedVect,
  };
}
