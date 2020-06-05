$(function() {

  let timer2 = document.getElementById('cntdwn-timer');
  var priceAct1 = document.getElementById('cntdwn-cost1');
  var priceAct2 = document.getElementById('cntdwn-cost2');
  let setTime = 0
  let startTime
  var startTimeChanged = 0
  var elapsedTime = 0;
  let remain = 0
  let timeToadd = 0
  var calcRsltPast = 0;
  var calcRslt = 0;
  var maxPrice = 0;

  // $('#cntdwn-play').click(function(){
  //   let h = $(`#cntdwn-h`).val();
  //   let m = $(`#cntdwn-m`).val();
  //   let s = $(`#cntdwn-s`).val();

  //   if(String(h).length == 0 && String(m).length == 0 && String(s).length == 0){
  //     alert('秒数を入力してください');
  //   } else{

  //     if(String(h).length == 1){
  //       h = '0' + h 
  //     } else if(String(h).length == 0){
  //       h = '00' 
  //     }
  //     if(String(m).length == 1){
  //       m = '0' + m 
  //     }else if(String(m).length == 0){
  //       m = '00' 
  //     }
  //     if(String(s).length == 1){
  //       s = '0' + s
  //     }else if(String(s).length == 0){
  //       s = '00' 
  //     }
  //     setTime = Number(h) * 3600 + Number(m) * 60 + Number(s)
  //     startTime = Date.now();
  //     cntdwntime()
  //   }
  // });

  // function cntdwntime(){
  //   timerId = setTimeout(function(){
  //     var elapsedTime = (Date.now() - startTime + timeToadd) / 1000 - 1;
  //     remain = setTime - elapsedTime;
  //     cntdwntime();
  //     updateTimetText()
  //   },100);
  // }

  // function updateTimetText(){
  //   h = Math.floor(remain / 3600);
  //   h = ('0' + h).slice(-2); 
  //   m = Math.floor(remain / 60) - h * 60
  //   m = ('0' + m).slice(-2); 
  //   s = Math.floor(remain % 60);
  //   s = ('0' + s).slice(-2);

  //   if(h == 00 && m == 00 && s == 00){
  //     popup()
  //     reset()
  //   }
  //   timer2.textContent = h + ':' +  m + ':' + s
  // }

  function wageMultiPeople() {
    calcWageRate = 0;
    cntPeople = 0;
    cnt = 1
    for (let i = 1; i <= cnt  ; i++) {
      if($(`#wage-${i}`).length){
        var valWage = $(`#wage-${i}`).val()  / 3600;
        var valPeople = $(`#people-${i}`).val();
        calcWageRate = valWage * valPeople + calcWageRate 
        cntPeople = Number(valPeople) + Number(cntPeople)    
      }
    }
  }

  function calcPrice(){
    calcRslt = calcWageRate * ((elapsedTime - startTimeChanged) / 1000)+ calcRsltPast
    priceAct2.textContent = Math.round(calcRslt)
  }

  // $('#cntdwn-play').click(function(){
  //   document.getElementById("cntdwn-play").style.display ="none";
  //   document.getElementById("cntdwn-stop").style.display ="block";
  //   wageMultiPeople() 
  //   calcmaxprice()
  // });
  // $('#cntdwn-stop').click(function(){
  //   clearTimeout(timerId);
  //   timeToadd += Date.now() - startTime;
  //   document.getElementById("cntdwn-stop").style.display ="none";
  //   document.getElementById("cntdwn-play").style.display ="block";
  // });
  // $('#cntdwn-reset').click(function(){
  //   reset()
  // });
  // function reset(){
  //   clearTimeout(timerId);
  //   timer.textContent = '00:00:00'
  //   timeToadd = 0
  //   if($('#cntdwn-stop').css('display') == 'block'){
  //     document.getElementById("cntdwn-stop").style.display ="none";
  //     document.getElementById("cntdwn-play").style.display ="block";  
  //   }
  // }

 

  // var observer = new MutationObserver(function(){

  //   $("#reg-info").change(function() {
  //     startTimeChanged = elapsedTime;
  //     calcRsltPast = 0;
  //     calcRsltPast =  calcRslt;
  //     calcmaxprice()
  //     wageMultiPeople()
  //   });
  //   calcPrice()
  // });
   
  // const elem = document.getElementById('cntdwn-timer');
  // const config = { 
  //   childList: true, 
  // };
  // observer.observe(elem, config);

  // function calcmaxprice(){
  //   maxPrice = maxPrice + calcWageRate * (setTime - elapsedTime)
  //   priceAct1.textContent = Math.round(maxPrice)
  //   debugger
  // }

})