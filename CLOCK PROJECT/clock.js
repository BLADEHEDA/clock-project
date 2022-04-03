function date(){
    let today = new Date() .toISOString().slice(0,10);
 return today;
}
document.getElementById("date").innerHTML=date();
function time(){
 let now = new Date().toLocaleTimeString();
 return now;
}
document.getElementById("time").innerHTML=time();
function timer(){

}

// making the buttons to change the content of the various divs 
// for ever button pressed , it will have to choose between timer , stop watch and clock 
/*let button = document.querySelectorAll('.OPTIONS button');
let content_inside = document.querySelectorAll('.time');

Array.from(button).forEach(function(buttonArray, i) {
buttonArray.addEventListener('click', function() {

    Array.from(button).forEach(buttonAll => buttonAll.classList.remove('button_active'));
    
    Array.from(time).forEach(timeAll => timeAll.classList.remove('clocks'));
    
    button[i].classList.add('button_active'); 
    
    content_inside[i].classList.add('clocks');  
  });
});*/
// The below code will help you to display the stop watch on the html console
window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }

 /* var timer = setInterval(timerCount, 1000);
var t = 100;
function timerCount() {
                
                t--;
                if (t < 0) {
                                console.log("times up");
                                clearInterval(timer);
                } else {
                                console.log(t);
                }
                
                
}

var count = 0;
  function updateCount() {
   count = count + 1;
   document.getElementById("timer").innerHTML = count;
   setTimeout(updateCount, 1000);
  }*/
 
 /* function myFunction() {
    var x = document.getElementById("clock");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }*/
  $(".myButton").on("click", function() {
    let id = $(this).attr("id");
    id = id.substr(3);
    $("div[id^='create']").hide();
    $("div[id='create" + id + "']").show();
  });
   
  var countDownDate = new Date("Dec 31, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);