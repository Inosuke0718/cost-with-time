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

      // title: {                           //タイトル設定
      //   display: false,                 //表示設定
      //   fontSize: 5,                  //フォントサイズ
      //   text: 'タイトル'                //ラベル
      // },
      options: {
        responsive: true,
        // maintainAspectRatio: false,
        // legend: {
        //     display: false
        // },
        scales: {                          //軸設定
          yAxes: [{                      //y軸設定
              display: true,             //表示設定
              scaleLabel: {              //軸ラベル設定
                display: true,          //表示設定
                labelString: 'cost(¥)',  //ラベル
                fontSize: 15               //フォントサイズ
              },
              ticks: {                      //最大値最小値設定
                  min: 0,                   //最小値
              //     max: 30,                  //最大値
              //     fontSize: 18,             //フォントサイズ
              //     stepSize: 5               //軸間隔
              },
          }],
          xAxes: [{                         //x軸設定
            display: true,                //表示設定
            // barPercentage: 0.4,           //棒グラフ幅
            // categoryPercentage: 0.4,      //棒グラフ幅
            scaleLabel: {                 //軸ラベル設定
              display: true,             //表示設定
              labelString: 'time(hour)',  //ラベル
              fontSize: 15               //フォントサイズ
            },
            // ticks: {
            //     fontSize: 18             //フォントサイズ
            // },
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


  

