import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Bar2d = ({ dataset }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        pieRadius: "35%",
        doughnutRadius: "55%",
        theme: "fusion",
        caption: "Stars Per Language",
        decimals: 0,
        showToolTip: 0,
        paletteColors: ["#49AEBA", "#5D62B5", "#F9C546", "#EF716F", "#8D6E63"],
      },
      data: dataset,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar2d;
