// window.onload = function () {
                
//   var lineplot = new CanvasJS.Chart("lineplot", {
//       animationEnabled: true,
//       title:{
//           text: "Today"
//       },
//       axisX: {
//           valueFormatString: "HH:MM"
//       },
//       axisY: {
//           // title: "Temperature (in °C)",
//           includeZero: false,
//           suffix: " kwh"
//       },
//       legend:{
//           cursor: "pointer",
//           fontSize: 12,
//           itemclick: toggleDataSeries,
//           horizontalAlign: "right", // left, center ,right 
//           verticalAlign: "top",  // top, center, 
//       },
//       toolTip:{
//           shared: true
//       },
//       data: [{
//           name: "kwh consumed",
//           type: "spline",
//           yValueFormatString: "kwh",
//           showInLegend: true,
//           dataPoints: [
//           { x: new Date(2018,08,31,00,00), y: 0.01 },
// { x: new Date(2018,08,31,00,15), y: 0.018 },
// { x: new Date(2018,08,31,00,30), y: 0.004 },
// { x: new Date(2018,08,31,00,45), y: 0.001 },
// { x: new Date(2018,08,31,01,00), y: 0.026 },
// { x: new Date(2018,08,31,01,15), y: 0.001 },
// { x: new Date(2018,08,31,01,30), y: 0.004 },
// { x: new Date(2018,08,31,01,45), y: 0.024 },
// { x: new Date(2018,08,31,02,00), y: 0.003 },
// { x: new Date(2018,08,31,02,15), y: 0.002 },
// { x: new Date(2018,08,31,02,30), y: 0.021 },
// { x: new Date(2018,08,31,02,45), y: 0.005 },
// { x: new Date(2018,08,31,03,00), y: 0.004 },
// { x: new Date(2018,08,31,03,15), y: 0.017 },
// { x: new Date(2018,08,31,03,30), y: 0.009 },
// { x: new Date(2018,08,31,03,45), y: 0.002 },
// { x: new Date(2018,08,31,04,00), y: 0.015 },
// { x: new Date(2018,08,31,04,15), y: 0.012 },
// { x: new Date(2018,08,31,04,30), y: 0.002 },
// { x: new Date(2018,08,31,04,45), y: 0.011 },
// { x: new Date(2018,08,31,05,00), y: 0.017 },
// { x: new Date(2018,08,31,05,15), y: 0.001 },
// { x: new Date(2018,08,31,05,30), y: 0.007 },
// { x: new Date(2018,08,31,05,45), y: 0.02 },
// { x: new Date(2018,08,31,06,00), y: 0.002 },
// { x: new Date(2018,08,31,06,15), y: 0.004 },
// { x: new Date(2018,08,31,06,30), y: 0.024 },
// { x: new Date(2018,08,31,06,45), y: 0.004 },
// { x: new Date(2018,08,31,07,00), y: 0.004 },
// { x: new Date(2018,08,31,07,15), y: 0.015 },
// { x: new Date(2018,08,31,07,30), y: 0.026 },
// { x: new Date(2018,08,31,07,45), y: 0.087 },
// { x: new Date(2018,08,31,08,00), y: 0.12 },
// { x: new Date(2018,08,31,08,15), y: 0.127 },
// { x: new Date(2018,08,31,08,30), y: 0.125 },
// { x: new Date(2018,08,31,08,45), y: 0.13 },
// { x: new Date(2018,08,31,09,00), y: 0.037 },
// { x: new Date(2018,08,31,09,15), y: 0.104 },
// { x: new Date(2018,08,31,09,30), y: 0.151 },
// { x: new Date(2018,08,31,09,45), y: 0.023 },
// { x: new Date(2018,08,31,10,00), y: 0.016 },
// { x: new Date(2018,08,31,10,15), y: 0.092 },
// { x: new Date(2018,08,31,10,30), y: 0.041 },
// { x: new Date(2018,08,31,10,45), y: 0.003 },
// { x: new Date(2018,08,31,11,00), y: 0.003 },
// { x: new Date(2018,08,31,11,15), y: 0.022 },
// { x: new Date(2018,08,31,11,30), y: 0.006 },
// { x: new Date(2018,08,31,11,45), y: 0.004 },
// { x: new Date(2018,08,31,12,00), y: 0.014 },
// { x: new Date(2018,08,31,12,15), y: 0.014 },
// { x: new Date(2018,08,31,12,30), y: 0.002 },
// { x: new Date(2018,08,31,12,45), y: 0.013 },
// { x: new Date(2018,08,31,13,00), y: 0.012 },
// { x: new Date(2018,08,31,13,15), y: 0.007 },
// { x: new Date(2018,08,31,13,30), y: 0.005 },
// { x: new Date(2018,08,31,13,45), y: 0.025 },
// { x: new Date(2018,08,31,14,00), y: 0.002 },
// { x: new Date(2018,08,31,14,15), y: 0.003 },
// { x: new Date(2018,08,31,14,30), y: 0.023 },
// { x: new Date(2018,08,31,14,45), y: 0.007 },
// { x: new Date(2018,08,31,15,00), y: 0.003 },
// { x: new Date(2018,08,31,15,15), y: 0.014 },
// { x: new Date(2018,08,31,15,30), y: 0.055 },
// { x: new Date(2018,08,31,15,45), y: 0.075 },
// { x: new Date(2018,08,31,16,00), y: 0.155 },
// { x: new Date(2018,08,31,16,15), y: 0.026 },
// { x: new Date(2018,08,31,16,30), y: 0.014 },
// { x: new Date(2018,08,31,16,45), y: 0.01 },
// { x: new Date(2018,08,31,17,00), y: 0.073 },
// { x: new Date(2018,08,31,17,15), y: 0.04 },
// { x: new Date(2018,08,31,17,30), y: 0.077 },
// { x: new Date(2018,08,31,17,45), y: 0.023 },
// { x: new Date(2018,08,31,18,00), y: 0.004 },
// { x: new Date(2018,08,31,18,15), y: 0.002 },
// { x: new Date(2018,08,31,18,30), y: 0.037 },
// { x: new Date(2018,08,31,18,45), y: 0.017 },
// { x: new Date(2018,08,31,19,00), y: 0.01 },
// { x: new Date(2018,08,31,19,15), y: 0.019 },
// { x: new Date(2018,08,31,19,30), y: 0.016 },
// { x: new Date(2018,08,31,19,45), y: 0.056 },
// { x: new Date(2018,08,31,20,00), y: 0.081 },
// { x: new Date(2018,08,31,20,15), y: 0.059 },
// { x: new Date(2018,08,31,20,30), y: 0.023 },
// { x: new Date(2018,08,31,20,45), y: 0.027 },
// { x: new Date(2018,08,31,21,00), y: 0.031 },
// { x: new Date(2018,08,31,21,15), y: 0.017 },
// { x: new Date(2018,08,31,21,30), y: 0.025 },
// { x: new Date(2018,08,31,21,45), y: 0.031 },
// { x: new Date(2018,08,31,22,00), y: 0.017 },
// { x: new Date(2018,08,31,22,15), y: 0.017 },
// { x: new Date(2018,08,31,22,30), y: 0.039 },
// { x: new Date(2018,08,31,22,45), y: 0.011 },
// { x: new Date(2018,08,31,23,00), y: 0.018 },
// { x: new Date(2018,08,31,23,15), y: 0.03 },
// { x: new Date(2018,08,31,23,30), y: 0.017 },
// { x: new Date(2018,08,31,23,45), y: 0.02 }

//           ]
//       },
//       {
//           name: "kwh produced",
//           type: "spline",
//           yValueFormatString: "kwh",
//           showInLegend: true,
//           dataPoints: [
//               // { x: new Date(2017,6,20,7,0), y: 20 },
//               // { x: new Date(2017,6,20,10,0), y: 22 },
//               // { x: new Date(2017,6,20,13,0), y: 24 },
//               // { x: new Date(2017,6,20,15,0), y: 26 },
//               // { x: new Date(2017,6,20,17,0), y: 24 },
//               // { x: new Date(2017,6,20,20,0), y: 22 },
//               // { x: new Date(2017,6,20,23,0), y: 20 }
//           ]
//       }]
//   });
//   lineplot.render();
  
//   // function toggleDataSeries(e){
//   //     if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//   //         e.dataSeries.visible = false;
//   //     }
//   //     else{
//   //         e.dataSeries.visible = true;
//   //     }
//   //     lineplot.render();
//   // }
  
//   }