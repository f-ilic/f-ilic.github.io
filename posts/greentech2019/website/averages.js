window.onload = function() {
        var chart4 = new CanvasJS.Chart("chartContainer4",{
            title :{
                // text: "Averages"
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
                horizontalAlign: "right", // left, center ,right 
                verticalAlign: "top",  // top, center, 
            },
    
            data: [
            
            {
            markerType: "none",
            name: "Average Weekday Consumption",
            type: "spline",
            yValueFormatString: "###.####### kwh",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2018,08,04,23,00), y: 0.2 },
                { x: new Date(2018,08,05,00,00), y: 0.2 },
                { x: new Date(2018,08,05,04,00), y: 0.1 },
                { x: new Date(2018,08,05,08,00), y: 0.45 },
                { x: new Date(2018,08,05,10,00), y: 0.2 },
                { x: new Date(2018,08,05,12,00), y: 0.2 },
                { x: new Date(2018,08,05,16,00), y: 0.2 },
                { x: new Date(2018,08,05,20,00), y: 0.6 },
                { x: new Date(2018,08,05,23,00), y: 0.4 }
                          ]
            },       
            {
            name: "Average Weekend Consumption",
            markerType: "none",
            type: "spline",
            yValueFormatString: "###.####### kwh",
            showInLegend: true,    
            dataPoints: [
                { x: new Date(2018,08,04,23,00), y: 0.2 },
                { x: new Date(2018,08,05,00,00), y: 0.2 },
                { x: new Date(2018,08,05,04,00), y: 0.1 },
                { x: new Date(2018,08,05,08,00), y: 0.2 },
                { x: new Date(2018,08,05,10,00), y: 0.5 },
                { x: new Date(2018,08,05,12,00), y: 0.5 },
                { x: new Date(2018,08,05,16,00), y: 0.2 },
                { x: new Date(2018,08,05,20,00), y: 0.6 },
                { x: new Date(2018,08,05,23,00), y: 0.5 }
            ]                    
            }]
            }
            );    

        var chart5 = new CanvasJS.Chart("chartContainer5",{
            title :{
                // text: "Current trend"
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
                horizontalAlign: "right", // left, center ,right 
                verticalAlign: "top",  // top, center, 
            },
    
            data: [
                    
            {
            name: "Production",
            markerType: "none",
            type: "spline",
            yValueFormatString: "###.####### kwh",
            showInLegend: true,
    
            dataPoints: [
                { x: new Date(2018,08,04,23,00), y: 0. },
                { x: new Date(2018,08,05,00,00), y: 0. },
                { x: new Date(2018,08,05,04,00), y: 0.1 },
                { x: new Date(2018,08,05,08,00), y: 0.5 },
                { x: new Date(2018,08,05,10,00), y: 1 },
                { x: new Date(2018,08,05,12,00), y: 2 },
                { x: new Date(2018,08,05,16,00), y: 1 },
            ] },
            {
                name: "production prediction",
                markerType: "none",
                type: "spline",
                yValueFormatString: "###.####### kwh",
                showInLegend: true,
                lineDashType: "dash",
    
                dataPoints: [
                    { x: new Date(2018,08,05,16,00), y: 1 },
                    { x: new Date(2018,08,05,20,00), y: 0.5 },
                    { x: new Date(2018,08,05,23,00), y: 0 }
                ]  
            }  ]                   
        }
        ); 

            chart4.render();
            chart5.render();
    }

