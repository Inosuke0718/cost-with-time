$(function() {

  let cnt = 2 

  //htmlのidからデータを取得
  //取得したデータを変数に代入
  var timer = document.getElementById('timer');
  //クリック時の時間を保持するための変数定義
  var startTime;
  var startTimeChanged = 0;
  //経過時刻を更新するための変数。 初めはだから0で初期化
  var elapsedTime = 0;
  //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
  var timerId;
  //タイマーをストップ -> 再開させたら0になってしまうのを避けるための変数。
  var timeToadd = 0;
  var calcRslt = 0;
  var calcWageRate = 0;
  var calcRsltPast = 0;

  $('#add').click(function(){
    var html =  `<div class="reg-info__input">
                  <input class="reg-info__input--wage" id="wage-${cnt}" name="wage" type="number" value="123">
                  00 ¥/h
                  <input class="reg-info__input--people" id="people-${cnt}" name="people" type="number" value="">
                  people

                  <button id="minus">
                  <i class="fas fa-user-minus"></i>
                  </button>

                </div>`
    $(".reg-info").append(html);
    cnt = cnt +1
  });

  $(document).on("click", "#minus",function(){
  // $('#xminusxxx').on('click',function(){
    console.log("AAA");
    console.log("AAAAA");
    $(this).parent().remove(); 
  });

  var observer = new MutationObserver(function(){

    $("#reg-info").change(function() {

      startTimeChanged = elapsedTime;
      calcRsltPast = 0;
      calcRsltPast =  calcRslt;
      wageMultiPeople()
    });
    
    calcPrice()
  });
   
  /** 監視対象の要素オブジェクト */
  const elem = document.getElementById('timer');
  /** 監視時のオプション */
  const config = { 
    childList: true, 
  };
  /** 要素の変化監視をスタート */
  observer.observe(elem, config);

  function wageMultiPeople() {
    calcWageRate = 0;
    for (let i = 1; i < cnt  ; i++) {

      if($(`#wage-${i}`).length){
        var valWage = $(`#wage-${i}`).val() *100 / 3600;
        console.log(valWage)
        var valPeople = $(`#people-${i}`).val();
        calcWageRate = valWage * valPeople + calcWageRate 
      }else{
        console.log("naiyo")
      }
    }
  }

  function calcPrice(){
    calcRslt = calcWageRate * ((elapsedTime - startTimeChanged) / 1000)+ calcRsltPast
    price__act.textContent = Math.round(calcRslt)
  }

  function updateTimetText(){
    var h = Math.floor(elapsedTime / 3600000000);
    var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);

    h = ('0' + h).slice(-2); 
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);

    timer.textContent = h + ':' +  m + ':' + s
  }

  function countUp(){
  
    timerId = setTimeout(function(){

        //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
        elapsedTime = Date.now() - startTime + timeToadd;
        updateTimetText()

        countUp();
    },100);
  }


  $('#play').click(function(){
    startTime = Date.now();
    countUp();
    // クリックされた時点でのRateをだす
    wageMultiPeople()
    document.getElementById("play").style.display ="none";
    document.getElementById("stop").style.display ="block";
  });


  $('#stop').click(function(){
    clearTimeout(timerId);
    //それを回避するためには過去のスタート時間からストップ時間までの経過時間を足してあげなければならない。elapsedTime = Date.now - startTime + timeToadd (timeToadd = ストップを押した時刻(Date.now)から直近のスタート時刻(startTime)を引く)
    timeToadd += Date.now() - startTime;
    document.getElementById("stop").style.display ="none";
    document.getElementById("play").style.display ="block";

  });

  $('#reset').click(function(){

    clearTimeout(timerId);
    // //それを回避するためには過去のスタート時間からストップ時間までの経過時間を足してあげなければならない。elapsedTime = Date.now - startTime + timeToadd (timeToadd = ストップを押した時刻(Date.now)から直近のスタート時刻(startTime)を引く)
    // timeToadd += Date.now() - startTime;

    elapsedTime = 0;
    timeToadd = 0;
    calcWageRate = 0;
    calcRslt = 0;
    calcRsltPast = 0;
    startTimeChange =0;
    price__act.textContent = "0"

    updateTimetText()

    if($('#stop').css('display') == 'block'){

      document.getElementById("stop").style.display ="none";
      document.getElementById("play").style.display ="block";  
    
    }

  });


}); 