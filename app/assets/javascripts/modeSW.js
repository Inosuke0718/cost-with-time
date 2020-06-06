$(function() {
  $('#switch1').click(function(){
    document.getElementById("switch1").style.display ="none";
    document.getElementById("switch2").style.display ="block";
    document.getElementById("mode1").style.display ="none";
    document.getElementById("mode2").style.display ="block";
    document.getElementById("title1").style.display ="none";
    document.getElementById("title2").style.display ="block";
  });
  $('#switch2').click(function(){
    document.getElementById("switch2").style.display ="none";
    document.getElementById("switch1").style.display ="block";
    document.getElementById("mode1").style.display ="block";
    document.getElementById("mode2").style.display ="none";
    document.getElementById("title1").style.display ="block";
    document.getElementById("title2").style.display ="none";
  })
})