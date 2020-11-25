import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Pie3d = ({ dataset }) => {
  const chartConfigs = {
    type: "column2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        showTooltip: false,
        theme: "fusion",
        caption: "Most Popular",
        yAxisName: "Stars",
        xAxisNameFontBold: true,
        xAxisName: "Repos",
        xAxisNameFontColor: "#6A859E",
        paletteColors: ["#49AEBA", "#5D62B5", "#F9C546", "#EF716F", "#8D6E63"],
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
      },
      data: dataset,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Pie3d;
