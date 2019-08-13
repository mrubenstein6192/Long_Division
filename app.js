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
    var divisor = Math.floor(Math.random() * 9) + 1;
    var dividend = Math.floor(Math.random() * 899) + 100;
  
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
 
  
  
  
})