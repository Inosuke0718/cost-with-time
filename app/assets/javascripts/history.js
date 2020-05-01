$(function() {

  var amount = document.getElementById("totalCost__number")
  var i = 0;


  totalAmount = $(".totalCost__number").text()
  totalAmount = Number(totalAmount)

  console.log(totalAmount)

  
  amntCntUp()
 
  function amntCntUp(){
   

      setTimeout(function(){
        if (i < totalAmount){
          i = i + 1;
          amount.textContent = i
          amntCntUp()
        }
      }, 3);
      // debugger
        
  }
  
})
