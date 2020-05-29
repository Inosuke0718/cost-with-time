$(function() {

  let cnt = 2 
  var timer = document.getElementById('timer');
  var startTime;
  var startTimeChanged = 0;
  var elapsedTime = 0;
  var timerId;
  var timeToadd = 0;
  var calcRslt = 0;
  var calcWageRate = 0;
  var calcRsltPast = 0;
  var h;
  var m;
  var s;
  var cntAveWage = 0;
  var aveWage = 0;


  $('#add').click(function(){
    var html = `<div class="reg-info__input">
                <input class="reg-info__input--wage" id="wage-${cnt}" name="wage" placeholder="00,000" type="number">
                ¥/h
                <input class="reg-info__input--people" id="people-${cnt}" name="people" placeholder="0" type="number" value="">
                people
                <button id="minus">
                <i class="fas fa-user-minus"></i>
                </button>
                </div>`
    $(".reg-info").append(html);
    cnt = cnt +1
  });

  $(document).on("click", "#minus",function(){
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
   
  const elem = document.getElementById('timer');
  const config = { 
    childList: true, 
  };
  observer.observe(elem, config);

  function wageMultiPeople() {
    calcWageRate = 0;
    cntPeople = 0;

    for (let i = 1; i < cnt  ; i++) {

      if($(`#wage-${i}`).length){
        var valWage = $(`#wage-${i}`).val()  / 3600;
        var valPeople = $(`#people-${i}`).val();
        calcWageRate = valWage * valPeople + calcWageRate 
        cntPeople = Number(valPeople) + Number(cntPeople)      
      }else{
      }
    }
  }

  function calcPrice(){
    calcRslt = calcWageRate * ((elapsedTime - startTimeChanged) / 1000)+ calcRsltPast
    price__act.textContent = Math.round(calcRslt)
  }

  function updateTimetText(){
    h = Math.floor(elapsedTime / 3600000000);
    m = Math.floor(elapsedTime / 60000);
    s = Math.floor(elapsedTime % 60000 / 1000);

    h = ('0' + h).slice(-2); 
    m = ('0' + m).slice(-2); 
    s = ('0' + s).slice(-2);

    timer.textContent = h + ':' +  m + ':' + s
  }

  function countUp(){
  
    timerId = setTimeout(function(){
      elapsedTime = Date.now() - startTime + timeToadd;
      updateTimetText()
      countUp();
    },100);
  }

  $('#play').click(function(){
    startTime = Date.now();
    countUp();
    wageMultiPeople()
    document.getElementById("play").style.display ="none";
    document.getElementById("stop").style.display ="block";
  });

  $('#stop').click(function(){
    clearTimeout(timerId);
    timeToadd += Date.now() - startTime;
    document.getElementById("stop").style.display ="none";
    document.getElementById("play").style.display ="block";

  });

  $('#reset').click(function(){
    clearTimeout(timerId);

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
 
  $(document).on("click", "#save",function(){

    var recTime = elapsedTime / 1000
    var dataTimer = {'timer' :{ "money" :Math.round(calcRslt), "time" :recTime, "wage" :calcWageRate * 3600 / cntPeople , "people" :cntPeople}};
   
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
      url: "/timer",
      type: "POST",
      data: dataTimer,
      dataType: 'json',
    })

    .done(function(){
      alert('saved');
    })

    .fail(function(){
      var result = window.confirm("please login or signin");
      if( result ) {
        console.log("ログイン画面に移動します")
        window.location.href = "/users/sign_in"
      }
      else {
        console.log("キャンセルされました。")
      }
    })

  });


}); 