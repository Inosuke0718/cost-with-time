$(function() {
  let langFlg = "eng";

  $('#jp-btn').click(function(){
    document.getElementById("jp-btn").style.backgroundColor ="rgba(255, 230, 0, 0.4)";
    document.getElementById("eng-btn").style.backgroundColor ="rgba(0,0,0,0)";
    langFlg = "jp"
    display()
  });

  $('#eng-btn').click(function(){
    document.getElementById("eng-btn").style.backgroundColor ="rgba(255, 230, 0, 0.4)";
    document.getElementById("jp-btn").style.backgroundColor ="rgba(0,0,0,0)";
    langFlg = "eng"
    display()
  });  

  function display(){
    var elm = [];
    elm[0] = document.getElementsByClassName("btns__language");
    elm[1] = document.getElementsByClassName("life-time__title--btn");
    elm[2] = document.getElementsByClassName("subtitle");

    elm[3] = document.getElementsByClassName("second-page__title");
    elm[4] = document.getElementsByClassName("second-page__content");
    elm[5] = document.getElementsByClassName("how-to-use");

    for (var i = 0; i < elm.length ; i++) {
      for (var ii = 0; ii < 2 ; ii++) {
        if(elm[i][ii].getAttribute("lang") == langFlg){
          elm[i][ii].style.display = 'block';
        }
        else{
          elm[i][ii].style.display = 'none';
        }
      }
    }
  }
})



