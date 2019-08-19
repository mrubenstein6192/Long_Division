$(document).ready(function () {
  window.scrollTo(0, 0);
  $("#dividend").hide();
  $("#divisor").hide();
  // $("#answer-box").hide();
  $("#calculator-row").hide();
  $("#box").hide();
  $("#answer-form").hide();
  $("#answer-formTwo").hide();
  $("#answer-formThree").hide();
  $("#answer-formFour").hide();
  $("#answer-formFive").hide();
  $("#answer-formSix").hide();
  $("#answer-formSeven").hide();
  $("#answer-formEight").hide();
  $("#answer-formNine").hide();

  $(document).on("click", ".start", function() {
    start();
    $("#answer-box").focus();
    window.scrollTo(0, 0);
  })

  function start() {
    $("#welcome").hide();
    $("#dividend").show();
    $("#divisor").show();
    // $("#answer-box").show();
    $("#calculator-row").show();
    $("#box").show();
    $("#answer-form").show();
    $("#answer-box").val("");
    $("#error-message").empty();
    $("#quotient").empty();
    var calcButton = $("<button>");
    calcButton.addClass('calc').css("margin", "10px");
    calcButton.text("Show Calculator")
    $("#calculator-row").html(calcButton);
    //restart button
    var restart = $("<button>");
    restart.addClass('restart')
    restart.text("Try Another!");
   
    var divisor = Math.floor(Math.random() * 9) + 1;
    var dividend = Math.floor(Math.random() * 899) + 100;
  
    $("#divisor").html(divisor);
    $("#dividend").html(dividend);
    $("#multiplied").hide()
    $("#difference").hide();
    $("#secondMult").hide();
    $("#secondDifference").hide()
    $("#thirdMult").hide();
    $("#thirdDifference").hide();
    // break dividend into an array to use each digit separately
    const arr = Array.from(String(dividend), Number)
    console.log(arr);
  
    $("#messages").html("<i><small>*To begin Long Division, only divide " + divisor + " into the first digit of " + dividend + "*</small></i>" + "<br/><br/>" + "So, how many times does " + divisor + " <mark>divide</mark> into " + arr[0] + "?" + "<br/>" + "<i><small>(Hint: 0 could be a possible answer!)</small></i>");
    const answer = Math.floor(arr[0] / divisor)
    console.log("The answer is " + answer);
      
    $("#enterAnswer").on("click", function(event) {
      event.preventDefault();
      var userAnswer = $("#answer-box").val();
      console.log("The user said: " + userAnswer + ".  Proceed to Multiply.");
    
        if (userAnswer == answer) {
          window.scrollTo(0, 0);
          $("#quotient").html(userAnswer);
          $("#answer-form").val("");
          $("#answer-form").hide();
          $("#answer-formTwo").show();
          $("#answer-boxTwo").focus();
          $("#answer-boxTwo").val("");
          if (userAnswer == 0) {
            $("#error-message").text("Since your first answer is 0, you can skip this step, but it's good practice for the routine of Long Division!")
          }
          else {
            $("#error-message").empty();
          }
           // continue to multiplication step
          $("#messages").html("That is correct! <mark>Multiply</mark>: " + answer + " x " + divisor + " = ?")
          
          var product = answer * divisor;
          console.log("The answer is: " + product);
          // $("#answer-box").html(secondInput)
          // $("#answer-box").append(secondButton)
          // $("#answer-box").append(calcButton);
          $("#enterAnswerTwo").on("click", function(event) {
            event.preventDefault();
            var userAnswerTwo = $("#answer-boxTwo").val();
            console.log("The user said " + userAnswerTwo + ". Proceed to subtract.");
            var productInt = parseInt(userAnswerTwo, 10)
      
            if (product == productInt) {
              window.scrollTo(0, 0);
              $("#answer-formTwo").hide();
              $("#answer-formThree").show();
              $("#answer-boxThree").focus();
              $("#multiplied").show()
              $("#multiplied").append(productInt);
              
              $("#error-message").empty();
              // var userAnswer = $("#answer-box").val();
              $("#messages").html("Correct! Now <mark>subtract</mark>: " + arr[0] + " - " + productInt)
              $("#multiplied").html("&nbsp;-" + productInt);

              var difference = arr[0] - userAnswerTwo;
              console.log("The answer is " + difference);
              // $("#answer-box").html(thirdInput)
              // $("#answer-box").append(thirdButton)
              // $("#answer-box").append(calcButton);

              $("#enterAnswerThree").on("click", function(event) {
                event.preventDefault();
                var userAnswerThree = $("#answer-boxThree").val();
                
                console.log("The user said " + userAnswerThree + ". Proceed to bring down.");
                var differenceInt = parseInt(userAnswerThree, 10)

                if (difference == differenceInt) {
                  window.scrollTo(0, 0);
                  $("#error-message").empty();
                  $("#answer-formThree").hide();
                  $("#answer-formFour").show();
                  $("#answer-boxFour").focus();
                  $("#messages").text("That is correct! Bring down " + arr[1] + " and repeat!")
                  $("#difference").show()
                  $("#difference").append(difference);
                  
                    // var userAnswer = $("#answer-box").val();
                    $("#multiplied").append("↓");
                    $("#difference").append(arr[1]);
                    var newDividendArr = [];
                    var numberString = arr[1].toString();
                    newDividendArr.push(differenceInt, numberString);
                   
                    var newDividendString = newDividendArr.toString().replace(",", "");
                    var newDividend = parseInt(newDividendString,10);
                  
                    $("#error-message").html("How many times does " + divisor + " <mark>divide</mark> into " + newDividend + "?");
                    
                    var newQuotientInt = parseInt(newDividend/divisor);
                    console.log("The answer is " + newQuotientInt);
                    $("#enterAnswerFour").on("click", function(event) {
                      event.preventDefault();
                      var userAnswerFour = $("#answer-boxFour").val();
                      var userNewQuotientInt = parseInt(userAnswerFour, 10)
                      console.log("The user said " + userAnswerFour + ". Proceed to multiply.");
            
                      if (userNewQuotientInt == newQuotientInt) {
                        window.scrollTo(0, 0);
                        $("#answer-formFour").hide();
                        $("#answer-formFive").show();
                        $("#answer-boxFive").focus();
                        $("#quotient").append(newQuotientInt);
                        $("#messages").html("Correct! Now <mark>multiply</mark> " + newQuotientInt + " x " + divisor)
                        $("#error-message").empty();
                        $("#second-error-message").empty();
                        // $("#answer-box").html(fifthInput);
                        // $("#answer-box").append(fifthButton);
                        // $("#answer-box").append(calcButton);
                        
                        var secondProduct = divisor * newQuotientInt;
                        console.log("The answer is " + secondProduct);
            
                        $("#enterAnswerFive").on("click", function(event) {
                          event.preventDefault();
                          var userSecondProduct = $("#answer-boxFive").val();
                          if (userSecondProduct == secondProduct) {
                            window.scrollTo(0, 0);
                            if (secondProduct > 9) {
                              $("#answer-formFive").hide();
                              $("#answer-formSix").show();
                              $("#answer-boxSix").focus();
                              $("#secondMult").show();
                              $("#secondMult").html("&nbsp;-" + secondProduct);
                            }
                            else {
                            $("#answer-formFive").hide();
                            $("#answer-formSix").show();
                            $("#answer-boxSix").focus();
                            $("#secondMult").show();
                            $("#secondMult").html("&nbsp; -" + secondProduct);
                            }
                            $("#messages").html("Awesome! Time to <mark>subtract</mark> again: " + newDividend + " - " + secondProduct);
                            $("#error-message").empty();
                            $("#second-error-message").empty();
                            // $("#answer-box").html(sixthInput);
                            // $("#answer-box").append(sixthButton);
                            // $("#answer-box").append(calcButton);
                           
                            var secondDifference = newDividend - secondProduct;
                            console.log(secondDifference);
            
                            $("#enterAnswerSix").on("click", function(event) {
                              event.preventDefault();
                              var userSecondDifference = $("#answer-boxSix").val();
                              if (userSecondDifference == secondDifference) {
                                window.scrollTo(0, 0);
                                $("#answer-formSix").hide();
                                $("#answer-formSeven").show();
                                $("#answer-boxSeven").focus();
                                $("#secondDifference").show();
                                $("#secondDifference").append("&nbsp;" + secondDifference);
                                $("#messages").text("You got this! Bring down " + arr[2] + " and repeat!")
                                $("#multiplied").append("↓");
                                $("#difference").append("↓");
                                $("#secondMult").append("↓")
                                $("#secondDifference").append(arr[2]);
                                var thirdDividendArr = [];
                                var thirdNumberString = arr[2].toString();
                                thirdDividendArr.push(secondDifference, thirdNumberString);
                                var thirdDividendString = thirdDividendArr.toString().replace(",", "");
                                var thirdDividend = parseInt(thirdDividendString, 10);
                                console.log(thirdDividend);
                                $("#error-message").html("How many times does " + divisor + " <mark>divide</mark> into " + thirdDividend + "?")
                                // $("#second-error-message").hide();
                                // $("#answer-box").html(seventhInput);
                                // $("#answer-box").append(seventhButton);
                                // $("#answer-box").append(calcButton);
            
                                var thirdQuotient = parseInt(thirdDividend/divisor);
                                console.log(thirdQuotient);
                                $("#enterAnswerSeven").on("click", function(event) {
                                  event.preventDefault();
                                  var userThirdQuotient = $("#answer-boxSeven").val();
                                  var userThirdQuotientInt = parseInt(userThirdQuotient, 10);
                                  console.log(userThirdQuotientInt)
            
                                  if (userThirdQuotientInt == thirdQuotient) {
                                    window.scrollTo(0, 0);
                                    $("#answer-formSeven").hide();
                                    $("#answer-formEight").show();
                                    $("#answer-boxEight").focus();
                                    $("#quotient").append(thirdQuotient);
                                    $("#messages").html("Correct! <mark>Multiply</mark> " + thirdQuotient + " x " + divisor);
                                    $("#error-message").empty();
                                    $("#second-error-message").empty();
                                    // $("#answer-box").html(eigthInput);
                                    // $("#answer-box").append(eigthButton);
                                    // $("#answer-box").append(calcButton);
                            
                                    var thirdProduct = divisor * thirdQuotient;
                                    console.log(thirdProduct);
            
                                    $("#enterAnswerEight").on("click", function(event) {
                                      event.preventDefault();
                                      console.log("Second Product: " + secondProduct);
                                      var userThirdProduct = $("#answer-boxEight").val();
                                      if (userThirdProduct == thirdProduct) {
                                        window.scrollTo(0, 0);
                                        if (thirdProduct > 9) {
                                          if (secondProduct > 9) {
                                            $("#answer-formEight").hide();
                                            $("#answer-formNine").show();
                                            $("#answer-boxNine").focus();
                                            $("#thirdMult").show();
                                            $("#thirdMult").html("&nbsp; -" + thirdProduct);
                                          }
                                          else {
                                          $("#answer-formEight").hide();
                                          $("#answer-formNine").show();
                                          $("#answer-boxNine").focus();
                                          $("#thirdMult").show();
                                          $("#thirdMult").html("&nbsp;&nbsp;-" + thirdProduct)
                                          }
                                        }
                                        else {
                                          $("#answer-formEight").hide();
                                          $("#answer-formNine").show();
                                          $("#answer-boxNine").focus();
                                          $("#thirdMult").show();
                                          $("#thirdMult").html("&nbsp;&nbsp; -" + thirdProduct)
                                        }
                                        $("#messages").html("Correct! Last <mark>subtraction</mark> to figure out the remainder: " + thirdDividend + " - " + thirdProduct);
                                        $("#error-message").empty();
                                        $("#second-error-message").empty();
                                        // $("#answer-box").html(ninthInput);
                                        // $("#answer-box").append(ninthButton);
                                        // $("#answer-box").append(calcButton);
                                     
                            var thirdDifference = thirdDividend - thirdProduct;
                            console.log(thirdDifference);
            
                            $("#enterAnswerNine").on("click", function(event) {
                              event.preventDefault();
                              var userThirdDiff = $("#answer-boxNine").val();
                              if (userThirdDiff == thirdDifference) {
                                window.scrollTo(0, 0);
                                $("#answer-formNine").hide();
                                $("#thirdDifference").show();
                                $("#thirdDifference").append("&nbsp;&nbsp;" + thirdDifference);
            
                                if (userThirdDiff == 0) {
                                  $("#messages").html("You did it! Since " + divisor + " divides evenly into " + dividend + ", " + "<br/>" + "your remainder is 0!");
                                  $("#quotient").append(" Remainder: " + thirdDifference);
                                  $("#error-message").html(restart);
                                  $("#answer-box").empty();
                                  $("#calculator-row").empty();
                                }
                                else {
                                $("#messages").html("You did it! Since " + divisor + " does not divide evenly into " + dividend + ", " + "<br/>" + thirdDifference + " is your remainder. Notice it is placed at the end of your quotient!");
                                $("#quotient").append(" Remainder: " + thirdDifference); 
                                $("#error-message").html(restart);
                                $("#answer-box").empty()
                                $("#calculator-row").empty();
                                }
                              }
                              else {
                                $("#error-message").text("Sorry, that is incorrect.  Try again!");
                                $("#answer-boxNine").val('')
                              }
                            })
                                      }
                                      else {
                                        $("#error-message").text("Sorry, that is incorrect.  Try again!");
                                        $("#answer-boxEight").val("");
                                      }
                                    })
                                  } 
                                  else {
                                    $("#second-error-message").text("Sorry, that is incorrect.  Try again!");
                                    $("#answer-boxSeven").val("");
                                  }
                                })
                              }
                              else {
                                $("#error-message").text("Sorry, that is incorrect.  Try again!");
                                $("#answer-boxSix").val("");
                              }
                            }) 
                          }
                          else {
                            $("#error-message").text("Sorry, that is incorrect.  Try again!");
                            $("#answer-boxFive").val("");
                          }
                        })
                      }
                      else {
                        $("#messages").html("Bring down " + arr[1] + " and repeat!")
                        $("#second-error-message").text("Sorry, that is incorrect.  Try again!")
                        $("#answer-boxFour").val("");
                    }
                  })
                      
                      }
                   
                   else {
                  $("#error-message").text("Sorry, that is incorrect.  Try again!");
                  $("#answer-boxThree").val("");
                }
            
              })
              
            }
             else {
              $("#error-message").text("Sorry, that is incorrect.  Try again!");
              $("#answer-boxTwo").val("");
            }
          })
        } else {
          $("#error-message").text("Sorry, that is incorrect.  Try again!");
          $("#answer-box").val("");
        }
      })
    }



    // calculator stuff not related to anything else
    $(document).on("click", ".calc", function () {
      $(".calculator").show();
      $(".calc").hide();
  
      var hideCalculator = $("<button>");
      hideCalculator.addClass('hideCalc').css("margin", "10px");
      hideCalculator.text("Hide Calculator");
      $("#calculator-row").html(hideCalculator)
    })

      $(document).on("click", ".hideCalc", function () {
        $(".calculator").hide();
        $(".hideCalc").hide();

        var calcButton = $("<button>");
        calcButton.addClass('calc').css("margin", "10px");
        calcButton.text("Show Calculator");
        $("#calculator-row").html(calcButton);
        
      })

      $(document).on("click", ".restart", function() {
        location.reload();
        start();
      })

      // function highlightDivide() {

      // }
    })
  
  
 
  
  
  
