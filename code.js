$(document).ready(function(){
  var counter = 0; // counts elapsed seconds
  var timeLeft = 25*60; // in seconds
  var running = false;
  
  function pad(d){
    // add a leading zero if d<0
    return (d<10)? "0"+d.toString() : d.toString()
  }
  
  function convertSeconds(s){
    var hrs = Math.floor(s/3600.0)
    hrs = pad(hrs)
    var min = Math.floor((s-hrs*3600)/60.0)
    min = pad(min)
    var sec = Math.floor((s-hrs*3600-min*60))
    sec = pad(sec)
    return hrs + " : " + min + " : " + sec
  }
  
  $("#hrsPlus").click(function(){
    // increase starting hours by 1
    if (!running){
      if (timeLeft+3600 <= 24*3600){
        timeLeft += 3600
        $("#timer").html(convertSeconds(timeLeft - counter))
      }
    }
  })
  $("#minPlus").click(function(){
    // increase starting minutes by 1
    if (!running){
      if (timeLeft+60 <= 24*3600){
        timeLeft += 60
        $("#timer").html(convertSeconds(timeLeft - counter))
      }
    }
  })
  $("#secPlus").click(function(){
    // increase starting seconds by 1
    if (!running){
      if (timeLeft+1 <= 24*3600){
        timeLeft += 1
        $("#timer").html(convertSeconds(timeLeft - counter))
      }
    }
  })
  $("#hrsMinus").click(function(){
    // decrease starting hours by 1
    if (!running){
      if (timeLeft-3600 > 0){
        timeLeft -= 3600
        $("#timer").html(convertSeconds(timeLeft - counter))
      }
    }
  })
  $("#minMinus").click(function(){
    // decrease starting minutes by 1
    if (!running){
      if (timeLeft-60 > 0){
        timeLeft -= 60
        $("#timer").html(convertSeconds(timeLeft - counter))
      }
    }
  })
  $("#secMinus").click(function(){
    // decrease starting minutes by 1
    if (!running){
      if (timeLeft-1 > 0){
        timeLeft -= 1
        $("#timer").html(convertSeconds(timeLeft - counter))
      }
    }
  })
  
  
  
  $("#timer").html(convertSeconds(timeLeft - counter))

  $("#startClock").click(function(){
    running = true;
    var stopWatch = setInterval(timeIt, 1000) // 1s interval
    
    function timeIt(){
      // start countdown
      counter++;
      $("#timer").html(convertSeconds(timeLeft - counter))
      if(timeLeft - counter == 0){
        clearInterval(stopWatch)
        $("#timer").css("background", "red")
      } else {
        $("#timer").css("background", "#92a05f")
      }
    }
    
    $("#stopClock").click(function(){
      running = false;
      clearInterval(stopWatch);
    })
    
    $("#resetClock").click(function(){
      // reset everything to standard values
      clearInterval(stopWatch)
      timeLeft = 25*60;
      counter = 0;
      running = false;
      $("#timer").html(convertSeconds(timeLeft - counter))
      $("#timer").css("background", "#92a05f")
    })
  })
    
  
})