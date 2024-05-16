let wfsUrl =
  "http://139.84.235.200/geoserver/agriconnect/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agriconnect%3AMerged_Agriconnect_Infrastructure&outputFormat=application%2Fjson";

let response = await axios.get(wfsUrl);

export function getInfrastructure(grantee, filters) {



}
