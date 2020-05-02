$(function() {

  var startTime = Date.now();

  var lifeTimeContent = document.getElementById("left-time")

  lifeTime = $("#left-time").text()
  // console.log(inoue)
  // console.log(lifeTime.content)
  countdown()
  function countdown(){

  
    timerId = setTimeout(function(){

        //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
        var elapsedTime = (Date.now() - startTime) / 1000;
        var remain = lifeTime - elapsedTime;
        
        lifeTimeContent.textContent = Math.round(remain)
        // debugger
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