$(document).ready(function () {

  $("#dividend").hide();
  $("#divisor").hide();
  $("#answer-box").hide();
  $("#box").hide();

  $(document).on("click", ".start", function() {

    start();

  })

  function start() {
    $("#welcome").hide();
    $("#dividend").show();
    $("#divisor").show();
    $("#answer-box").show();
    $("#box").show();
    $("#error-message").empty();
    $("#quotient").empty();
    var calcButton = $("<button>");
    calcButton.addClass('calc').css("margin", "10px");
    calcButton.text("Show Calculator")
    
    //restart button
    var restart = $("<button>");
    restart.addClass('start')
    restart.text("Restart");
    // different buttons for each answer
    var b = $("<button>");
    b.addClass('submit');
    b.text("Submit");
    var secondButton = $("<button>");
    secondButton.addClass('submitTwo');
    secondButton.text("Submit");
    var thirdButton = $("<button>");
    thirdButton.addClass('submitThree');
    thirdButton.text("Submit")
    var fourthButton = $("<button>");
    fourthButton.addClass('submitFour');
    fourthButton.text("Submit");
    var fifthButton = $("<button>");
    fifthButton.addClass('submitFive');
    fifthButton.text("Submit");
    var sixthButton = $("<button>");
    sixthButton.addClass('submitSix');
    sixthButton.text("Submit");
    var seventhButton = $("<button>");
    seventhButton.addClass('submitSeven');
    seventhButton.text("Submit");
    var eigthButton = $("<button>");
    eigthButton.addClass('submitEight');
    eigthButton.text("Submit");
    var ninthButton = $("<button>");
    ninthButton.addClass('submitNine');
    ninthButton.text("Submit");

    // different input field for each answer
    var firstInput = $('<input>').attr('type', 'number').addClass('firstAnswer').css("margin", "10px");
    var secondInput = $('<input>').attr('type', 'number').addClass('secondAnswer').css("margin", "10px");
    var thirdInput = $('<input>').attr('type', 'number').addClass('thirdAnswer').css("margin", "10px");
    var fourthInput = $('<input>').attr('type', 'number').addClass('fourthAnswer').css("margin", "10px");
    var fifthInput = $('<input>').attr('type', 'number').addClass('fifthAnswer').css("margin", "10px");
    var sixthInput = $('<input>').attr('type', 'number').addClass('sixthAnswer').css("margin", "10px");
    var seventhInput = $('<input>').attr('type', 'number').addClass('seventhAnswer').css("margin", "10px");
    var eigthInput = $('<input>').attr('type', 'number').addClass('eigthAnswer').css("margin", "10px");
    var ninthInput = $('<input>').attr('type', 'number').addClass('ninthAnswer').css("margin", "10px");
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
    var answer = Math.floor(arr[0] / divisor)
    console.log("The answer is " + answer);
      $(document).on("click", ".submit", function () {
      
      var userAnswer = $(".firstAnswer").val();
      console.log("The user said: " + userAnswer + ".  Proceed to Multiply.");
    
        if (userAnswer == answer) {
          $("#quotient").html(userAnswer);
          
          if (userAnswer == 0) {
            $("#error-message").text("Since your first answer is 0, you can skip this step, but it's good practice for the routine of Long Division!")
          }
          else {
            $("#error-message").empty();
          }
           // continue to multiplication step
          $("#messages").text("That is correct! Multiply: " + userAnswer + " x " + divisor + " = ?")
          
          var product = userAnswer * divisor;
          console.log("The answer is: " + product);
          $("#answer-box").html(secondInput)
          $("#answer-box").append(secondButton)
          $("#answer-box").append(calcButton);

          $(document).on("click", ".submitTwo", function () {
            var userProduct = $(".secondAnswer").val();
            console.log("The user said " + userProduct + ". Proceed to subtract.");
            var productInt = parseInt(userProduct, 10)
      
            if (product == productInt) {
              
              $("#multiplied").show()
              $("#multiplied").append(product);
              
              $("#error-message").empty();
              var lastUserInput = $(".secondAnswer").val();
              $("#messages").text("Correct! Now subtract: " + arr[0] + " - " + lastUserInput)
              $("#multiplied").html("&nbsp;-" + lastUserInput);

              var difference = arr[0] - lastUserInput;
              console.log("The answer is " + difference);
              $("#answer-box").html(thirdInput)
              $("#answer-box").append(thirdButton)
              $("#answer-box").append(calcButton);

              $(document).on("click", ".submitThree", function () {
                var userProduct = $(".thirdAnswer").val();
                
                console.log("The user said " + userProduct + ". Proceed to bring down.");
                var differenceInt = parseInt(userProduct, 10)

                if (difference == differenceInt) {
                  $("#error-message").empty();
                  $("#messages").text("That is correct! Bring down " + arr[1] + " and repeat!")
                  $("#difference").show()
                  $("#difference").append(difference);
                  
                    var newDiff = $(".thirdAnswer").val();
                    $("#multiplied").append("↓");
                    $("#difference").append(arr[1]);
                    var newDividendArr = [];
                    var numberString = arr[1].toString();
                    newDividendArr.push(newDiff, numberString);
                   
                    var newDividendString = newDividendArr.toString().replace(",", "");;
                    var newDividend = parseInt(newDividendString,10);
                  
                    $("#error-message").html("How many times does " + divisor + " divide into " + newDividend + "?")
                    $("#answer-box").html(fourthInput);
                    $("#answer-box").append(fourthButton);
                    $("#answer-box").append(calcButton);
                   
                    var newQuotientInt = parseInt(newDividend/divisor);
                    console.log("The answer is " + newQuotientInt);
                    $(document).on("click", ".submitFour", function() {
                      var userNewQuotient = $(".fourthAnswer").val();
                      var userNewQuotientInt = parseInt(userNewQuotient, 10)
                      console.log("The user said " + userNewQuotientInt + ". Proceed to multiply.");
            
                      if (userNewQuotientInt == newQuotientInt) {
                        $("#quotient").append(newQuotientInt);
                        $("#messages").text("Correct! Now multiply " + newQuotientInt + " x " + divisor)
                        $("#error-message").empty();
                        $("#second-error-message").empty();
                        $("#answer-box").html(fifthInput);
                        $("#answer-box").append(fifthButton);
                        $("#answer-box").append(calcButton);
                        
                        var secondProduct = divisor * newQuotientInt;
                        console.log("The answer is " + secondProduct);
            
                        $(document).on("click", ".submitFive", function() {
                          var userSecondProduct = $(".fifthAnswer").val();
                          if (userSecondProduct == secondProduct) {
                            if (secondProduct > 9) {
                              $("#secondMult").show();
                              $("#secondMult").html("&nbsp;-" + secondProduct);
                            }
                            else {
                            $("#secondMult").show();
                            $("#secondMult").html("&nbsp; -" + secondProduct);
                            }
                            $("#messages").text("Awesome! Time to subtract again: " + newDividend + " - " + secondProduct);
                            $("#error-message").empty();
                            $("#second-error-message").empty();
                            $("#answer-box").html(sixthInput);
                            $("#answer-box").append(sixthButton);
                            $("#answer-box").append(calcButton);
                           
                            var secondDifference = newDividend - secondProduct;
                            console.log(secondDifference);
            
                            $(document).on("click", ".submitSix", function() {
                              var userSecondDifference = $(".sixthAnswer").val();
                              if (userSecondDifference == secondDifference) {
                                $("#secondDifference").show();
                                $("#secondDifference").append("&nbsp;" + secondDifference);
                                $("#messages").text("You got this! Bring down " + arr[2] + " and repeat!")
                                $("#multiplied").append("↓");
                                $("#difference").append("↓");
                                $("#secondMult").append("↓")
                                $("#secondDifference").append(arr[2]);
                                var thirdDividendArr = [];
                                var thirdNumberString = arr[2].toString();
                                thirdDividendArr.push(userSecondDifference, thirdNumberString);
                                var thirdDividendString = thirdDividendArr.toString().replace(",", "");
                                var thirdDividend = parseInt(thirdDividendString, 10);
                                console.log(thirdDividend);
                                $("#error-message").text("How many times does " + divisor + " divide into " + thirdDividend + "?")
                                // $("#second-error-message").hide();
                                $("#answer-box").html(seventhInput);
                                $("#answer-box").append(seventhButton);
                                $("#answer-box").append(calcButton);
            
                                var thirdQuotient = parseInt(thirdDividend/divisor);
                                console.log(thirdQuotient);
                                $(document).on("click", ".submitSeven", function() {
                                  var userThirdQuotient = $(".seventhAnswer").val();
                                  var userThirdQuotientInt = parseInt(userThirdQuotient, 10);
                                  console.log(userThirdQuotientInt)
            
                                  if (userThirdQuotientInt == thirdQuotient) {
                                    $("#quotient").append(thirdQuotient);
                                    $("#messages").text("Correct! Multiply " + thirdQuotient + " x " + divisor);
                                    $("#error-message").empty();
                                    $("#second-error-message").empty();
                                    $("#answer-box").html(eigthInput);
                                    $("#answer-box").append(eigthButton);
                                    $("#answer-box").append(calcButton);
                            
                                    var thirdProduct = divisor * thirdQuotient;
                                    console.log(thirdProduct);
            
                                    $(document).on("click", ".submitEight", function() {
                                      console.log("Second Product: " + secondProduct);
                                      var userThirdProduct = $(".eigthAnswer").val();
                                      if (userThirdProduct == thirdProduct) {
                                        if (thirdProduct > 9) {
                                          if (secondProduct > 9) {
                                            $("#thirdMult").show();
                                            $("#thirdMult").html("&nbsp;-" + thirdProduct);
                                          }
                                          else {
                                          $("#thirdMult").show();
                                          $("#thirdMult").html("&nbsp;&nbsp;-" + thirdProduct)
                                          }
                                        }
                                        else {
                                          $("#thirdMult").show();
                                          $("#thirdMult").html("&nbsp;&nbsp; -" + thirdProduct)
                                        }
                                        $("#messages").text("Correct! Last subtraction to figure out the remainder: " + thirdDividend + " -" + thirdProduct);
                                        $("#error-message").empty();
                                        $("#second-error-message").empty();
                                        $("#answer-box").html(ninthInput);
                                        $("#answer-box").append(ninthButton);
                                        $("#answer-box").append(calcButton);
                                     
                            var thirdDifference = thirdDividend - thirdProduct;
                            console.log(thirdDifference);
            
                            $(document).on("click", ".submitNine", function() {
                              var userThirdDiff = $(".ninthAnswer").val();
                              if (userThirdDiff == thirdDifference) {
                                $("#thirdDifference").show();
                                $("#thirdDifference").append("&nbsp;&nbsp;" + thirdDifference);
            
                                if (userThirdDiff == 0) {
                                  $("#messages").text("You did it! Since " + divisor + " divides evenly into " + dividend + ", your remainder is 0!");
                                  $("#quotient").append(" Remainder: " + thirdDifference);
                                  $("#error-message").html(restart);
                                  $("#answer-box").empty()
                                }
                                else {
                                $("#messages").text("You did it! Since " + divisor + " does not divide evely into " + dividend + ", this last number is your remainder. Notice it is placed at the end of your quotient!");
                                $("#quotient").append(" Remainder: " + thirdDifference); 
                                $("#error-message").html(restart);
                                $("#answer-box").empty()
                                }
                              }
                              else {
                                $("#error-message").text("Sorry, that is incorrect.  Try again!")
                              }
                            })
                                      }
                                      else {
                                        $("#error-message").text("Sorry, that is incorrect.  Try again!")
                                      }
                                    })
                                  } 
                                  else {
                                    $("#second-error-message").text("Sorry, that is incorrect.  Try again!")
                                  }
                                })
                              }
                              else {
                                $("#error-message").text("Sorry, that is incorrect.  Try again!")
                              }
                            }) 
                          }
                          else {
                            $("#error-message").text("Sorry, that is incorrect.  Try again!")
                          }
                        })
                      }
                      else {
                        $("#messages").html("Bring down " + arr[1] + " and repeat!")
                        $("#second-error-message").text("Sorry, that is incorrect.  Try again!")
                    }
                  })
                      
                      }
                   
                   else {
                  $("#error-message").text("Sorry, that is incorrect.  Try again!")
                }
            
              })
              
            }
             else {
              $("#error-message").text("Sorry, that is incorrect.  Try again!")
            }
          })
        } else {
          $("#error-message").text("Sorry, that is incorrect.  Try again!")
        }
      })
    }



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
  
 
  
  
  
