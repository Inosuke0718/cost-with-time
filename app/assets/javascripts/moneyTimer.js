$(function() {

// Common variants-----------
  let cnt = 2 
  let calcWageRate = 0;
  // let calcRsltPast = 0;

// Function1 variants----------
  let timer = document.getElementById('timer');
  let startTime;
  var startTimeChanged = 0;
  let calcRsltPast = 0;
  var elapsedTime = 0;
  let timerId;
  let timeToadd = 0;
  let calcRslt = 0;
  let h;
  let m;
  let s;

// Function2 variants----------
  let timer2 = document.getElementById('cntdwn-timer');
  var startTimeChanged2 = 0;
  let calcRsltPast2 = 0;
  var elapsedTime2 = 0;
  let timerId2;
  let timeToadd2 = 0;
  let calcRslt2 = 0;
  let startTime2;
  let h2;
  let m2;
  let s2;

    let priceAct2 = document.getElementById('cntdwn-cost2');
    let remain = 0
    let resetSignal = 1;


// 共通機能-------------------------------------------
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
    // maxPrice計算よう
    // maxPricePast = elapsedTime * calcWageRate 

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

// ここからFunction1の機能--------------
  function calcPrice(){
    calcRslt = calcWageRate * ((elapsedTime - startTimeChanged) / 1000)+ calcRsltPast
    price__act.textContent = Math.round(calcRslt)
  }

  function updateTimetText1(){
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
      updateTimetText1()
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
    timeToadd = 0
    calcWageRate = 0;
    calcRslt = 0;
    calcRsltPast = 0;
    startTimeChanged =0;
    price__act.textContent = "0"

    updateTimetText1()

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

// ここからFunction２の機能--------------

$('#cntdwn-play').click(function(){
  h2 = $(`#cntdwn-h`).val();
  m2 = $(`#cntdwn-m`).val();
  s2 = $(`#cntdwn-s`).val();

  if(String(h2).length == 0 && String(m2).length == 0 && String(s2).length == 0){
    alert('秒数を入力してください');
  } else{

    if(String(h2).length == 1){
      h2 = '0' + h2 
    } else if(String(h2).length == 0){
      h2 = '00' 
    }
    if(String(m2).length == 1){
      m2 = '0' + m2 
    }else if(String(m2).length == 0){
      m2 = '00' 
    }
    if(String(s2).length == 1){
      s2 = '0' + s2
    }else if(String(s2).length == 0){
      s2 = '00' 
    }
    setTime2 = Number(h2) * 3600 + Number(m2) * 60 + Number(s2)
    startTime2 = Date.now();
    cntdwntime()
  }
});

  function cntdwntime(){
    timerId2 = setTimeout(function(){
      elapsedTime2 = (Date.now() - startTime2 + timeToadd2) / 1000 - 1
      // debugger
      remain = setTime2 - elapsedTime2;
      cntdwntime();
      updateTimetText2()
    },100);
  }

  function updateTimetText2(){
    h2 = Math.floor(remain / 3600);
    h2 = ('0' + h2).slice(-2); 
    m2 = Math.floor(remain / 60) - h2 * 60
    m2 = ('0' + m2).slice(-2); 
    s2 = Math.floor(remain % 60);
    s2 = ('0' + s2).slice(-2);

    if(h2 == 00 && m2 == 00 && s2 == 00){
      popup()
      reset()
    }
    timer2.textContent = h2 + ':' +  m2 + ':' + s2
  }

  $('#cntdwn-play').click(function(){
    document.getElementById("cntdwn-play").style.display ="none";
    document.getElementById("cntdwn-stop").style.display ="block";
    wageMultiPeople() 
  });
  $('#cntdwn-stop').click(function(){
    clearTimeout(timerId2);
    timeToadd2 += Date.now() - startTime2;
    document.getElementById("cntdwn-stop").style.display ="none";
    document.getElementById("cntdwn-play").style.display ="block";
  });
  $('#cntdwn-reset').click(function(){
    reset()
  });
  function reset(){
    clearTimeout(timerId2);
    timer2.textContent = '00:00:00'
    timeToadd2 = 0
    resetSignal = 0
    startTimeChanged2 =0;
    if($('#cntdwn-stop').css('display') == 'block'){
      document.getElementById("cntdwn-stop").style.display ="none";
      document.getElementById("cntdwn-play").style.display ="block";  
    }
  }

  var observer = new MutationObserver(function(){
    $("#reg-info").change(function() {
      startTimeChanged2 = elapsedTime2;
      calcRsltPast2 = 0;
      calcRsltPast2 =  calcRslt2;
      wageMultiPeople()
    });
    calcPrice2()
  });
   
  const elem2 = document.getElementById('cntdwn-timer');
  const config2 = { 
    childList: true, 
  };
  observer.observe(elem2, config2);

  function calcPrice2(){
    calcRslt2 = (calcWageRate * ((elapsedTime2 + 1 - startTimeChanged2) )+ calcRsltPast2) * resetSignal
    priceAct2.textContent = Math.round(calcRslt2)
    resetSignal = 1
  }

  
  $(document).on("click", "#cntdwn-save",function(){
    var recTime = elapsedTime2 / 1000
    var dataTimer2 = {'timer' :{ "money" :Math.round(calcRslt), "time" :recTime, "wage" :calcWageRate * 3600 / cntPeople , "people" :cntPeople}};

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
      data: dataTimer2,
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

//タイマーストップ告知PopUp ----------------------------------------
  function popup(){
    var popup = document.getElementById('js-popup');
    if(!popup) return;
    popup.classList.add('is-show');
  
    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
  
    closePopUp(blackBg);
    closePopUp(closeBtn);
  
    function closePopUp(elem) {
      if(!elem) return;
      elem.addEventListener('click', function() {
        popup.classList.remove('is-show');
      })
    }
  }

  $(document).on("click", "#cntdwn-save2",function(){
    var popup = document.getElementById('js-popup');
    var recTime = elapsedTime2 / 1000
    var dataTimer3 = {'timer' :{ "money" :Math.round(calcRslt), "time" :recTime, "wage" :calcWageRate * 3600 / cntPeople , "people" :cntPeople}};

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
      data: dataTimer3,
      dataType: 'json',
    })
    .done(function(){
      alert('saved');
      popup.classList.remove('is-show');
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
// 追加実装---------------------------
// var priceAct1 = document.getElementById('cntdwn-cost1');

// var maxPrice = 0;
// let maxPricePast;

  // ここでMax値を計算している
  // function calcMaxPrice(){
  //   maxPrice = maxPricePast + (calcWageRate * (setTime - elapsedTime))
  //   priceAct1.textContent = Math.round(maxPrice)
  // }

  // function cntDwnPrice(){
  //   timerId = setTimeout(function(){
      
  //     elapsedTime = Date.now() - startTime + timeToadd;
  //     calcRslt2 = 
  //     priceAct2.textContent = Math.round(calcRslt2)
  //     cntDwnPrice();
  //   },100);
  // }  