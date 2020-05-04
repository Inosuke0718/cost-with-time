$(function() {

  let arrayVertMoney = [];
  let arrayVertTime = [];
  let arrayHrzn = [];

  charts()

  function charts(){

    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      var token;
      if (!options.crossDomain) {
      token = $('meta[name="csrf-token"]').attr('content');
        if (token) {
            return jqXHR.setRequestHeader('X-CSRF-Token', token);
          }
      }
    });

    $.ajax({
      url: "/timer/:id/edit",
      type: "GET",
      data: "",
      dataType: 'json',
    })

    .done(function(timers){
      $.each(timers, function(i, timer) {

        // var result = Number(timer.money)
        arrayVertMoney.push (timer.money)

        timeMin = timer.time / 60
        arrayVertTime.push(timeMin)

        var result = String(timer.created_at)
        result = result.substr( 0, 16 );
        arrayHrzn.push (result)

      });
      makeGraph()
    })
    .fail(function(){
      alert('error');
    })
}

  function makeGraph(){

      ctx = document.getElementById("graph-cost").getContext("2d");
      ctx.canvas.height = 100;
      window.myBar = new Chart(ctx, {
          type: 'bar',
          data: barChartData,
          options: complexChartOption
      });
  };

  var barChartData = {
    labels: arrayHrzn,
    datasets: [
    {
        type: 'line',
        label: 'Cost',
        data: arrayVertMoney ,
        borderColor : "rgba(254,97,132,0.8)",
                pointBackgroundColor    : "rgba(254,97,132,0.8)",
                fill: false,
        yAxisID: "y-axis-1",// 追加
    },
    {
        type: 'bar',
        label: 'Time',
        data: arrayVertTime ,
        borderColor : "rgba(54,164,235,0.8)",
        backgroundColor : "rgba(54,164,235,0.5)",
        yAxisID: "y-axis-2",
    },
    ],
  };

  var complexChartOption = {
    responsive: true,
    scales: {
        yAxes: [{
            id: "y-axis-1",
            type: "linear", 
            position: "left",

            scaleLabel: { 
              display: true, 
              labelString: 'cost(¥)',
              fontSize: 15,
            },

            ticks: {
                // max: 0.2,
                min: 0,
                // stepSize: 0.1
            },
        }, {
            id: "y-axis-2",
            type: "linear", 
            position: "right",


            scaleLabel: {
              display: true,
              labelString: 'Time(min)',
              fontSize: 15,
            },

            ticks: {
                // max: 1.5,
                min: 0,
                // stepSize: .5
            },
            gridLines: {
                drawOnChartArea: false, 
            },
        }],
    }
  };
});


  

