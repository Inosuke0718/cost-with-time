$(function() {

  var startTime = Date.now();

  var lifeTimeContent = document.getElementById("left-time")

  lifeTime = $("#left-time").text()
  countdown()
  function countdown(){
  
    timerId = setTimeout(function(){
      var elapsedTime = (Date.now() - startTime) / 1000;
      var remain = lifeTime - elapsedTime;
      lifeTimeContent.textContent = Math.round(remain)
      countdown();
    },100);
  }

  const element = document.getElementById("details")

  $('#details').click(function(){
    window.scroll({
      top: 9000,
      behavior: 'smooth'
    });

  })
})