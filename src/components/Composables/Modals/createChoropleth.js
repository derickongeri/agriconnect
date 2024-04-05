import { axios } from "src/boot/axios";
import { useSumStore } from "stores/sumdata/index.js";
import useSupabase from "src/boot/supabase";

export default function setSelectedVect() {
  const store = useSumStore();
  const { supabase } = useSupabase();

  const createChoroplethSums = async function () {
    const { userSelection, districts, tableType } = useSumStore();
    let tableName = null;
    let sumsData = null;
    if (tableType == "ct") {
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
    } else if (tableType == "at") {
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
    } else {
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
    }

    console.log(sumsData)

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

    store.setCTtable(sumsData)

    let choroplethValues = [];

    newJsonData.forEach((d) => {
      choroplethValues.push(d.properties[userSelection.aggregate]);
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
