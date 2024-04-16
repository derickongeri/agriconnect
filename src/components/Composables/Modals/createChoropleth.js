import { axios } from "src/boot/axios";
import { useSumStore } from "stores/sumdata/index.js";
import useSupabase from "src/boot/supabase";

export default function setSelectedVect() {
  const store = useSumStore();
  const { supabase } = useSupabase();
  const url = "http://127.0.0.1:3000/";

  const createChoroplethSums = async function () {
    const { userSelection, districts, tableType, sumsTab } = useSumStore();
    let tableName = null;
    let sumsData = null;
    if (tableType == "ct" && sumsTab == "responses") {
      tableName = `ct_${userSelection.grantee}_${userSelection.year}`;

      const { data: tableData, error: sumsError } = await supabase.from(
        tableName
      ).select(`
            district,
            at_y1: ${userSelection.code}->AnnualTotalY1,
            at_y2: ${userSelection.code}->AnnualTotalY2,
            at_y3: ${userSelection.code}->AnnualTotalY3,
            ct: ${userSelection.code}->CummulativeTotal
          `);

      sumsData = tableData;
      // const response = await axios.post(url + `cumulative_totals`, {
      //   grantee: userSelection.grantee,
      //   year: userSelection.year,
      //   code: userSelection.code,
      //   aggregate: userSelection.aggregate,
      // });

      // sumsData = response.data;
    } else if (tableType == "at" && sumsTab == "responses") {
      tableName = `at_${userSelection.grantee}_${userSelection.year}`;

      const { data: tableData, error: sumsError } = await supabase.from(
        tableName
      ).select(`
            district,
            total_q1: ${userSelection.code}->TotalQ1,
            total_q2: ${userSelection.code}->TotalQ2,
            total_q3: ${userSelection.code}->TotalQ3,
            total_q4: ${userSelection.code}->TotalQ4,
            at: ${userSelection.code}->AnnualTotal
          `);

      sumsData = tableData;
    } else if (tableType == "sums" && sumsTab == "responses") {
      tableName = `sums_${userSelection.grantee}_${userSelection.quota}_${userSelection.year}`;
      const { data: tableData, error: sumsError } = await supabase.from(
        tableName
      ).select(`
            district,
            adult_male: ${userSelection.code}->Adult_Male,
            adult_female: ${userSelection.code}->Adult_Female,
            youth_male: ${userSelection.code}->Youth_Male,
            youth_female: ${userSelection.code}->Youth_Female,
            reference: ${userSelection.code}->Reference,
            total: ${userSelection.code}->Total
          `);

      sumsData = tableData;
      // const data = await axios.post(url+`sums`, {
      //   grantee: userSelection.grantee,
      //   quota: userSelection.quota,
      //   year: userSelection.year,
      //   code: userSelection.code,
      // });

      // console.log(data.data);

      // sumsData = data.data;
    } else {
      tableName = `fa_indicators_2023`;
      const { data: tableData, error: sumsError } = await supabase.from(
        tableName
      ).select(`
            district,
            idh: ${userSelection.faCode}->IDH,
            pdf: ${userSelection.faCode}->PDF,
            total: ${userSelection.faCode}->Total,
            trias: ${userSelection.faCode}->Trias,
            value: ${userSelection.faCode}->Value,
            viagro: ${userSelection.faCode}->Viagro,
            rikolto: ${userSelection.faCode}->Rikolto,
            helvetas: ${userSelection.faCode}->Helvetas,
            solidaridadcert: ${userSelection.faCode}->SoliCERT,
            solidaridadpace: ${userSelection.faCode}->SoliPACE
          `);

      sumsData = tableData;
    }

    console.log(sumsData);

    const joinedData = districts.features.map((geoFeature) => {
      const matchingFeature = sumsData.find(
        (sumsFeature) => sumsFeature.district === geoFeature.properties.District
      );

      if (matchingFeature) {
        // Merge properties from  and GeoJSON features
        return {
          ...geoFeature,
          properties: {
            ...geoFeature.properties,
            ...matchingFeature,
          },
        };
      }
    });

    const newJsonData = joinedData.filter((obj) => obj !== undefined);

    store.setCTtable(sumsData);

    let choroplethValues = [];

    newJsonData.forEach((d) => {
      if (sumsTab == "responses") {
        choroplethValues.push(d.properties[userSelection.aggregate]);
      } else {
        choroplethValues.push(d.properties[userSelection.faGrantee]);
      }
    });

    return {
      geoJsonLayer: newJsonData,
      layervalues: choroplethValues,
    };
  };

  return {
    createChoroplethSums,
  };
}
