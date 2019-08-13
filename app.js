$(document).ready(function () {

  $("#dividend").hide();
  $("#divisor").hide();
  $("#answer-box").hide();
  $("#box").hide();

  $(document).on("click", "#start", function() {
    $("#welcome").hide();
    $("#dividend").show();
    $("#divisor").show();
    $("#answer-box").show();
    $("#box").show();
    var calcButton = $("<button>");
    calcButton.addClass('calc').css("margin", "10px");
    calcButton.text("Show Calculator")
    var b = $("<button>");
    b.addClass('submit')
    b.text("Submit");
    var firstInput = $('<input>').attr('type', 'number').addClass('firstAnswer').css("margin", "10px");
    // $("#answer-box").append(r)
    $("#answer-box").append(firstInput);
    $("#answer-box").append(b)
    $("#answer-box").append(calcButton);
    var divisor = Math.floor(Math.random() * 9) + 1;
    var dividend = Math.floor(Math.random() * 899) + 100;
  
    $("#divisor").text(divisor);
    $("#dividend").text(dividend);
    $("#multiplied").hide()
    $("#difference").hide();
    $("#secondMult").hide();
    $("#secondDifference").hide()
    $("#thirdMult").hide();
    $("#thirdDifference").hide();
    // break dividend into an array to use each digit separately
    const arr = Array.from(String(dividend), Number)
    console.log(arr);
  
    $("#messages").text("How many times does " + divisor + " divide into " + arr[0] + "? (Hint: 0 is a possible answer!)\n");
  
    var answer;
    console.log(arr[0] / divisor);
  
      $(document).on("click", ".submit", function () {
      console.log("this is clicked")
  
      answer = Math.floor(arr[0] / divisor)
      console.log(answer);
  
      var userAnswer = $(".firstAnswer").val();
        if (userAnswer == answer) {
          $("#quotient").append(userAnswer);
          
          if (userAnswer == 0) {
            $("#error-message").text("Since your first answer is 0, you can skip this step, but it's good practice for the routine of Long Division!")
          }
          else {
            $("#error-message").empty();
          }
          $("#messages").text("That is correct! Multiply: " + userAnswer + " x " + divisor + " = ?")
          
          var product = userAnswer * divisor;
          console.log(product);

          $(document).on("click", ".submit", function () {
            var userProduct = $(".firstAnswer").val();
        
            console.log(userProduct);
            var productInt = parseInt(userProduct, 10)
            console.log(productInt)
            if (product === productInt) {
              $("#error-message").empty();
              $("#messages").text("That is correct!")
              $("#multiplied").show()
              $("#multiplied").append(product);
              
            } else {
              $("#error-message").text("Sorry, that is incorrect.  Try again!")
            }
          })
        } else {
          $("#error-message").text("Sorry, that is incorrect.  Try again!")
        }
      })
    })



    // calculator stuff not related to anything else
    $(document).on("click", ".calc", function () {
      $(".calculator").show();
      $(".calc").hide();
  
      var hideCalculator = $("<button>");
      hideCalculator.addClass('hideCalc').css("margin", "10px");;
      hideCalculator.text("Hide Calculator");
      $("#answer-box").append(hideCalculator)
      $(document).on("click", ".hideCalc", function () {
        $(".calculator").hide();
        $(".hideCalc").hide();
        $(".calc").show();
      })
    })
  })
 
  
  
  
