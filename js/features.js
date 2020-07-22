'use strict';
var gInterval;
var gTotalSeconds;
var gTime;
function startTime(){
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    gTotalSeconds = 0;
    gInterval = setInterval(setTime, 1000);
    gTime = [secondsLabel , minutesLabel]
    
    }
    function setTime() {
       
      ++gTotalSeconds;
      gTime[0].innerHTML = pad(gTotalSeconds % 60);
      gTime[1].innerHTML = pad(parseInt(gTotalSeconds / 60));
      
    }
    function pad(val) {
        var valString = val + "";
        
      
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      
      }
      

      function markCell(event, elcell) {
         var rightClick = event.button;
         
         if (rightClick === 2 )
         {
            console.log(elcell);
         }
      }
