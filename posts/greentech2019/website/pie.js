window.onload = function() {

    function toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        chart1.render();
    }

    var chart1 = new CanvasJS.Chart("chartContainer1",{
        title :{
            // text: "Yesterday"
        },
        axisX: {
            valueFormatString: "HH:00"
        },
        axisY: {
          // title: "Temperature (in °C)",
          includeZero: false,
          suffix: " kwh"
        },
            legend:{
            cursor: "pointer",
            fontSize: 12,
            itemclick: toggleDataSeries,
            horizontalAlign: "right", // left, center ,right 
            verticalAlign: "top",  // top, center, 
        },

        data: [{
        markerType: "none",
        name: "Consumption",
        type: "spline",
        yValueFormatString: "###.####### kwh",
        showInLegend: true,
        dataPoints: [
                     { x: new Date(2018,08,31,00,00),y: 0.01 },
                    { x: new Date(2018,08,31,00,15), y: 0.018 },
                    { x: new Date(2018,08,31,00,30), y: 0.004 },
                    { x: new Date(2018,08,31,00,45), y: 0.001 },
                    { x: new Date(2018,08,31,01,00), y: 0.026 },
                    { x: new Date(2018,08,31,01,15), y: 0.001 },
                    { x: new Date(2018,08,31,01,30), y: 0.004 },
                    { x: new Date(2018,08,31,01,45), y: 0.024 },
                    { x: new Date(2018,08,31,02,00), y: 0.003 },
                    { x: new Date(2018,08,31,02,15), y: 0.002 },
                    { x: new Date(2018,08,31,02,30), y: 0.021 },
                    { x: new Date(2018,08,31,02,45), y: 0.005 },
                    { x: new Date(2018,08,31,03,00), y: 0.004 },
                    { x: new Date(2018,08,31,03,15), y: 0.017 },
                    { x: new Date(2018,08,31,03,30), y: 0.009 },
                    { x: new Date(2018,08,31,03,45), y: 0.002 },
                    { x: new Date(2018,08,31,04,00), y: 0.015 },
                    { x: new Date(2018,08,31,04,15), y: 0.012 },
                    { x: new Date(2018,08,31,04,30), y: 0.002 },
                    { x: new Date(2018,08,31,04,45), y: 0.011 },
                    { x: new Date(2018,08,31,05,00), y: 0.017 },
                    { x: new Date(2018,08,31,05,15), y: 0.001 },
                    { x: new Date(2018,08,31,05,30), y: 0.007 },
                    { x: new Date(2018,08,31,05,45), y: 0.02 },
                    { x: new Date(2018,08,31,06,00), y: 0.002 },
                    { x: new Date(2018,08,31,06,15), y: 0.004 },
                    { x: new Date(2018,08,31,06,30), y: 0.024 },
                    { x: new Date(2018,08,31,06,45), y: 0.004 },
                    { x: new Date(2018,08,31,07,00), y: 0.004 },
                    { x: new Date(2018,08,31,07,15), y: 0.015 },
                    { x: new Date(2018,08,31,07,30), y: 0.026 },
                    { x: new Date(2018,08,31,07,45), y: 0.087 },
                    { x: new Date(2018,08,31,08,00), y: 0.12 },
                    { x: new Date(2018,08,31,08,15), y: 0.127 },
                    { x: new Date(2018,08,31,08,30), y: 0.125 },
                    { x: new Date(2018,08,31,08,45), y: 0.13 },
                    { x: new Date(2018,08,31,09,00), y: 0.037 },
                    { x: new Date(2018,08,31,09,15), y: 0.104 },
                    { x: new Date(2018,08,31,09,30), y: 0.151 },
                    { x: new Date(2018,08,31,09,45), y: 0.023 },
                    { x: new Date(2018,08,31,10,00), y: 0.016 },
                    { x: new Date(2018,08,31,10,15), y: 0.092 },
                    { x: new Date(2018,08,31,10,30), y: 0.041 },
                    { x: new Date(2018,08,31,10,45), y: 0.003 },
                    { x: new Date(2018,08,31,11,00), y: 0.003 },
                    { x: new Date(2018,08,31,11,15), y: 0.022 },
                    { x: new Date(2018,08,31,11,30), y: 0.006 },
                    { x: new Date(2018,08,31,11,45), y: 0.004 },
                    { x: new Date(2018,08,31,12,00), y: 0.014 },
                    { x: new Date(2018,08,31,12,15), y: 0.014 },
                    { x: new Date(2018,08,31,12,30), y: 0.002 },
                    { x: new Date(2018,08,31,12,45), y: 0.013 },
                    { x: new Date(2018,08,31,13,00), y: 0.012 },
                    { x: new Date(2018,08,31,13,15), y: 0.007 },
                    { x: new Date(2018,08,31,13,30), y: 0.005 },
                    { x: new Date(2018,08,31,13,45), y: 0.025 },
                    { x: new Date(2018,08,31,14,00), y: 0.002 },
                    { x: new Date(2018,08,31,14,15), y: 0.003 },
                    { x: new Date(2018,08,31,14,30), y: 0.023 },
                    { x: new Date(2018,08,31,14,45), y: 0.007 },
                    { x: new Date(2018,08,31,15,00), y: 0.003 },
                    { x: new Date(2018,08,31,15,15), y: 0.014 },
                    { x: new Date(2018,08,31,15,30), y: 0.055 },
                    { x: new Date(2018,08,31,15,45), y: 0.075 },
                    { x: new Date(2018,08,31,16,00), y: 0.155 },
                    { x: new Date(2018,08,31,16,15), y: 0.026 },
                    { x: new Date(2018,08,31,16,30), y: 0.014 },
                    { x: new Date(2018,08,31,16,45), y: 0.01 },
                    { x: new Date(2018,08,31,17,00), y: 0.073 },
                    { x: new Date(2018,08,31,17,15), y: 0.04 },
                    { x: new Date(2018,08,31,17,30), y: 0.077 },
                    { x: new Date(2018,08,31,17,45), y: 0.023 },
                    { x: new Date(2018,08,31,18,00), y: 0.004 },
                    { x: new Date(2018,08,31,18,15), y: 0.002 },
                    { x: new Date(2018,08,31,18,30), y: 0.037 },
                    { x: new Date(2018,08,31,18,45), y: 0.017 },
                    { x: new Date(2018,08,31,19,00), y: 0.01 },
                    { x: new Date(2018,08,31,19,15), y: 0.019 },
                    { x: new Date(2018,08,31,19,30), y: 0.016 },
                    { x: new Date(2018,08,31,19,45), y: 0.056 },
                    { x: new Date(2018,08,31,20,00), y: 0.081 },
                    { x: new Date(2018,08,31,20,15), y: 0.059 },
                    { x: new Date(2018,08,31,20,30), y: 0.023 },
                    { x: new Date(2018,08,31,20,45), y: 0.027 },
                    { x: new Date(2018,08,31,21,00), y: 0.031 },
                    { x: new Date(2018,08,31,21,15), y: 0.017 },
                    { x: new Date(2018,08,31,21,30), y: 0.025 },
                    { x: new Date(2018,08,31,21,45), y: 0.031 },
                    { x: new Date(2018,08,31,22,00), y: 0.017 },
                    { x: new Date(2018,08,31,22,15), y: 0.017 },
                    { x: new Date(2018,08,31,22,30), y: 0.039 },
                    { x: new Date(2018,08,31,22,45), y: 0.011 },
                    { x: new Date(2018,08,31,23,00), y: 0.018 },
                    { x: new Date(2018,08,31,23,15), y: 0.03 },
                    { x: new Date(2018,08,31,23,30), y: 0.017 },
                    { x: new Date(2018,08,31,23,45), y: 0.02 }
                      ]
                  },
                {

        name: "Production",
        markerType: "none",
        type: "spline",
        yValueFormatString: "###.####### kwh",
        showInLegend: true,
        dataPoints: [
            { x: new Date(2018,08,31,00,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,00,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,00,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,00,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,01,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,01,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,01,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,01,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,02,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,02,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,02,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,02,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,03,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,03,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,03,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,03,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,04,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,04,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,04,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,04,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,05,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,05,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,05,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,05,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,06,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,06,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,06,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,06,45), y: (1/6)* 0.007 },
            { x: new Date(2018,08,31,07,00), y: (1/6)* 0.02 },
            { x: new Date(2018,08,31,07,15), y: (1/6)* 0.023 },
            { x: new Date(2018,08,31,07,30), y: (1/6)* 0.05 },
            { x: new Date(2018,08,31,07,45), y: (1/6)* 0.065 },
            { x: new Date(2018,08,31,08,00), y: (1/6)* 0.107 },
            { x: new Date(2018,08,31,08,15), y: (1/6)* 0.218 },
            { x: new Date(2018,08,31,08,30), y: (1/6)* 0.415 },
            { x: new Date(2018,08,31,08,45), y: (1/6)* 0.905 },
            { x: new Date(2018,08,31,09,00), y: (1/6)* 0.64 },
            { x: new Date(2018,08,31,09,15), y: (1/6)* 0.642 },
            { x: new Date(2018,08,31,09,30), y: (1/6)* 0.672 },
            { x: new Date(2018,08,31,09,45), y: (1/6)* 0.451 },
            { x: new Date(2018,08,31,10,00), y: (1/6)* 0.333 },
            { x: new Date(2018,08,31,10,15), y: (1/6)* 0.409 },
            { x: new Date(2018,08,31,10,30), y: (1/6)* 0.791 },
            { x: new Date(2018,08,31,10,45), y: (1/6)* 1.328 },
            { x: new Date(2018,08,31,11,00), y: (1/6)* 1.988 },
            { x: new Date(2018,08,31,11,15), y: (1/6)* 1.39 },
            { x: new Date(2018,08,31,11,30), y: (1/6)* 1.344 },
            { x: new Date(2018,08,31,11,45), y: (1/6)* 1.179 },
            { x: new Date(2018,08,31,12,00), y: (1/6)* 0.8 },
            { x: new Date(2018,08,31,12,15), y: (1/6)* 1.464 },
            { x: new Date(2018,08,31,12,30), y: (1/6)* 1 },
            { x: new Date(2018,08,31,12,45), y: (1/6)* 0.846 },
            { x: new Date(2018,08,31,13,00), y: (1/6)* 0.205 },
            { x: new Date(2018,08,31,13,15), y: (1/6)* 0.346 },
            { x: new Date(2018,08,31,13,30), y: (1/6)* 0.222 },
            { x: new Date(2018,08,31,13,45), y: (1/6)* 0.439 },
            { x: new Date(2018,08,31,14,00), y: (1/6)* 0.28 },
            { x: new Date(2018,08,31,14,15), y: (1/6)* 0.234 },
            { x: new Date(2018,08,31,14,30), y: (1/6)* 0.327 },
            { x: new Date(2018,08,31,14,45), y: (1/6)* 0.603 },
            { x: new Date(2018,08,31,15,00), y: (1/6)* 1.228 },
            { x: new Date(2018,08,31,15,15), y: (1/6)* 0.805 },
            { x: new Date(2018,08,31,15,30), y: (1/6)* 0.674 },
            { x: new Date(2018,08,31,15,45), y: (1/6)* 0.604 },
            { x: new Date(2018,08,31,16,00), y: (1/6)* 0.468 },
            { x: new Date(2018,08,31,16,15), y: (1/6)* 0.743 },
            { x: new Date(2018,08,31,16,30), y: (1/6)* 0.683 },
            { x: new Date(2018,08,31,16,45), y: (1/6)* 0.261 },
            { x: new Date(2018,08,31,17,00), y: (1/6)* 0.091 },
            { x: new Date(2018,08,31,17,15), y: (1/6)* 0.033 },
            { x: new Date(2018,08,31,17,30), y: (1/6)* 0.106 },
            { x: new Date(2018,08,31,17,45), y: (1/6)* 0.24 },
            { x: new Date(2018,08,31,18,00), y: (1/6)* 0.179 },
            { x: new Date(2018,08,31,18,15), y: (1/6)* 0.088 },
            { x: new Date(2018,08,31,18,30), y: (1/6)* 0.22 },
            { x: new Date(2018,08,31,18,45), y: (1/6)* 0.075 },
            { x: new Date(2018,08,31,19,00), y: (1/6)* 0.056 },
            { x: new Date(2018,08,31,19,15), y: (1/6)* 0.041 },
            { x: new Date(2018,08,31,19,30), y: (1/6)* 0.012 },
            { x: new Date(2018,08,31,19,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,20,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,20,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,20,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,20,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,21,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,21,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,21,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,21,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,22,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,22,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,22,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,22,45), y: (1/6)* 0 },
            { x: new Date(2018,08,31,23,00), y: (1/6)* 0 },
            { x: new Date(2018,08,31,23,15), y: (1/6)* 0 },
            { x: new Date(2018,08,31,23,30), y: (1/6)* 0 },
            { x: new Date(2018,08,31,23,45), y: (1/6)* 0 },
                        ]                    
                }]
    });
    var chart2 = new CanvasJS.Chart("chartContainer2",{
        title :{
    	// text: "Yesterday's energy consumption"
        },
        legend:{
        cursor: "pointer",
        fontSize: 12,
        itemclick: toggleDataSeries,
        horizontalAlign: "right", // left, center ,right 
        verticalAlign: "top",  // top, center, 
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 80, label: "Grid Energy" },
                { y: 20, label: "Green Energy" },
            ]
        }]
    });

    var chart3 = new CanvasJS.Chart("chartContainer3",{
        title :{
            // text: "Current trend"
        },
        axisX: {
            valueFormatString: "HH:00",
            stripLines:[
                {
                    
                    startValue:new Date(2018,08,04,23,00),
                    endValue:new Date(2018,08,05,10,00),
                                    
                    color:"#d8d8d8",
                    labelPlacement: "inside",//"outside"
                    labelAlign: "center",
                    labelFontColor: "#a8a8a8",
                }
                ]
        },
        axisY: {
          // title: "Temperature (in °C)",
          includeZero: false,
          suffix: " kwh"
        },
            legend:{
            cursor: "pointer",
            fontSize: 12,
            itemclick: toggleDataSeries,
            horizontalAlign: "right", // left, center ,right 
            verticalAlign: "top",  // top, center, 
        },

        data: [
        
        {
        markerType: "none",
        name: "Consumption",
        type: "spline",
        yValueFormatString: "###.####### kwh",
        showInLegend: true,
        lineThickness: 8,

        dataPoints: [
            { x: new Date(2018,08,04,23,00), y: 0.2 },
            { x: new Date(2018,08,05,00,00), y: 0.2 },
            { x: new Date(2018,08,05,04,00), y: 0.1 },
            { x: new Date(2018,08,05,08,00), y: 0.5 },
            { x: new Date(2018,08,05,10,00), y: 0.2 },
            // { x: new Date(2018,08,05,12,00), y: 0.2 },
            // { x: new Date(2018,08,05,16,00), y: 0.2 },
            // { x: new Date(2018,08,05,20,00), y: 0.6 },
            // { x: new Date(2018,08,05,23,00), y: 0.4 }
                      ]
        },       
        {
        name: "Production",
        markerType: "none",
        type: "spline",
        yValueFormatString: "###.####### kwh",
        showInLegend: true,
        lineThickness: 8,

        dataPoints: [
            { x: new Date(2018,08,04,23,00), y: 0. },
            { x: new Date(2018,08,05,00,00), y: 0. },
            { x: new Date(2018,08,05,04,00), y: 0.1 },
            { x: new Date(2018,08,05,08,00), y: 0.5 },
            { x: new Date(2018,08,05,10,00), y: 1 },

]                    
        },
        {
            name: "Predicted Production",
            markerType: "none",
            type: "spline",
            yValueFormatString: "###.####### kwh",
            showInLegend: true,
            lineDashType: "dash",
            lineThickness: 8,


            dataPoints: [
                { x: new Date(2018,08,05,10,00), y: 1 },
                { x: new Date(2018,08,05,12,00), y: 2 },
                { x: new Date(2018,08,05,16,00), y: 1 },
                { x: new Date(2018,08,05,20,00), y: 0.5 },
                { x: new Date(2018,08,05,23,00), y: 0 }
            ]  
        }  ]
        }
        );
      

    chart1.render();
    chart2.render();
    chart3.render();




    }

