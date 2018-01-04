// To keep track of first key entered for minutes and seconds
var firstKey = undefined;
// 1 second
const INTERVAL = 1000;
var interval_var = undefined;

// ready() ensures that html document is loaded first before running the jQuery code
$(document).ready(function (){
      $("#hours").forcePositiveIntegers();
      $("#minutes").forceRange();
      $("#seconds").forceRange();

      // To reset values of firstKey
      $("#minutes").focus(function(){
        firstKey = undefined;
      });

      $("#seconds").focus(function(){
        firstKey = undefined;
      });

      $("#start_stop_button").click(function(){
          // To swap text of button start <--> stop
        var el = $(this);

        if(el.text() == el.data("text-original")){
            el.text(el.data("text-swap"));
            startTime();
        }else{ // it must be stop
            stopTime();
            el.text(el.data("text-original"));
         }

        });

  });

  startTime = function(){
    // if text input has been changed since last called then intialize new Timer

    // otherwise continue with old time
    Timer(parseInt(document.getElementById("hours").value), parseInt(document.getElementById("minutes").value),parseInt(document.getElementById("seconds").value) );
    interval_var = setInterval(printTime, INTERVAL);
  };

  stopTime = function(){
    clearInterval(interval_var);
  }

jQuery.fn.forcePositiveIntegers = function () {
        $(this).keypress(function (event) {
          // charCode doesn't always work
            var key = event.which || event.keyCode;
            // Only allows certain keypress, numbers, left and right arrow, tabs, delete, backspace, and tabs
            // need to insert key >= 97 && key <= 105 for PC. Laptops don't have numpads!
              if (key >= 48 && key <= 57 || key == 37 || key == 39 ||	key == 46 || key == 8 || key == 9)
                  return true;

              return false;
      });
  }

  // Ensures range of minutes and seconds to be in [0,59]
  jQuery.fn.forceRange = function () {
          $(this).keypress(function (event) {
            var key = event.which || event.keyCode;
            // always allow backspace and tab
            if(key == 8 || key == 9){
              firstKey = key;
              return true;
            }else if(firstKey >= 54 && firstKey <= 57){ // key 6,7,8,9 can't have digit following it due to min & sec format
              return false;
            }else if(key >= 48 && key <= 57){
                firstKey = key;
                return true;
            }
            return false;
          });
  }

/*
      $("form input:text").change(function(){
            $("time_display").append("change");
            var flag = false;
            $("form input:text").each(function(){
              if(!$(this).val()){
                // text field has no value
                falg = true;
              }
            });
            flag ? $("#play").prop("disabled",true) : $("#play").prop("disabled",false);
      });
      */
