$(function() {

  let x05;
  let x10;
  let x15;
  let x20;
  let x25;
  let x30;
  let x35;
  let x40;

  let cnt = 1;

  function wageMultiPeople() {
    calcWageRate = 0;
    for (let i = 1; i <= cnt  ; i++) {
      if($(`#people-${i}`).length){
        var valWage = $(`#wage-${i}`).val() *100 ;
        var valPeople = $(`#people-${i}`).val();
        calcWageRate = valWage * valPeople + calcWageRate 
      }else{
      }
    }
  }

  function makeGraph(){

    wageMultiPeople()
    x05 = calcWageRate * 0.5
    x10 = calcWageRate * 1
    x15 = calcWageRate * 1.5
    x20 = calcWageRate * 2
    x25 = calcWageRate * 2.5
    x30 = calcWageRate * 3
    x35 = calcWageRate * 3.5
    x40 = calcWageRate * 4
    var ctx = document.getElementById('mycanvas').getContext('2d');

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['0', '0.5' , '1.0' ,'1.5' , '2.0' , '2.5', '3.0','3.5','4.0'],
        datasets: [{
          label: 'the increase of cost',
          data: [0, x05 , x10 , x15 , x20 , x25, x30, x35, x40],
          backgroundColor: "rgba(17, 105, 187, 0.637)"
        }, ]
      },

      options: {
        responsive: true,
        scales: {
          yAxes: [{
              display: true,
              scaleLabel: { 
                display: true,
                labelString: 'cost(¥)',
                fontSize: 15
              },
              ticks: { 
                  min: 0,
              },
          }],
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true, 
              labelString: 'time(hour)', 
              fontSize: 15 
            },
          }],
        },
      },
    });
  }

  $(document).on("click", "#add",function(){
    cnt = cnt +1
  });

  $("#reg-info").change(function() {
    makeGraph()
  });

  $(document).on("click", "#minus",function(){
    makeGraph()
  });

});


  

