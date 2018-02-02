console.log("script loaded")

// variables used to setup program
var firstNumber
var secondNumber
var operator
var result

// empty output div, but does not clear any of the variables
function emptyInput() {
    $(".output").empty();
}

// varied and then empties the output div
function clearAll(){
    // probably smelly but i'm tired and also preparing for a job interview, sorry.
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    result = undefined;
    emptyInput()
}

$(".button").on("click", function(){
   var selector = $(this.children[0]);
     $(".output").append(parseInt(selector.text()))
})

//when the button with the id "clear" is clicked, the function emptyInput runs
$("#clear").on("click", function(){
    emptyInput()
})

//when the button with the id "clear" is clicked, the function emptyInput runs
$("#clear-all").on("click", function() {
    clearAll()
});

$(".operator").on("click", function(){
    var selector = $(this.children[0]);
    operator = $(selector).text();

    if(firstNumber === undefined && result === undefined){
        firstNumber = parseInt($(".output").text());
        
    }

    if(result != undefined){
        firstNumber = result;
    }
    
    emptyInput()
    
})

$("#equal").on("click", function() {
    secondNumber = parseInt($(".output").text());
    console.log(operator)
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        result = firstNumber / secondNumber;
    }
    
    $(".output").text(result)
});