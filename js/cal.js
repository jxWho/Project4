var MyGlobal = {
  firstNumber: 0,
  secondNumber: 0,
  firstClick: true,
  operator: "",
  calculationDone: false,
};
$(document).ready(function(){
  console.log("test mine");
  initialize();
});

  function initialize() {
    bindEvents();
  }

  function bindEvents() {
    $(".number").click( function() {
      var number = $(this).val();
      number = parseFloat( number );
      console.log( number );
      numberClickFunction( number );
    });

    $(".operator").click( function() {
      var operator = $(this).val();
      console.log( operator );
      operatorFunction( operator );
    });
  }
  function reset() {
    MyGlobal.firstNumber = MyGlobal.secondNumber = 0;
    MyGlobal.firstClick = true;
    MyGlobal.operator = "";
    MyGlobal.calculationDone = false;
  }
  function numberClickFunction( num ) {

    if ( MyGlobal.firstClick === true ) {
      MyGlobal.firstNumber = MyGlobal.firstNumber * 10 + num;
      updateScreen( MyGlobal.firstNumber );
    } else {
      if ( MyGlobal.calculationDone === true ) {
        //just finish the last calculation
        //need to clear the second number
        MyGlobal.secondNumber = 0;
      }
      MyGlobal.secondNumber = MyGlobal.secondNumber * 10 + num;
      updateScreen( MyGlobal.secondNumber );
    }
  }

  function operatorFunction( operator ) {
    if( operator == "c") {
      reset();
      updateScreen( 0 );
    } else if ( operator == "=" ) {
      if( MyGlobal.operator !== "" ){
        var result = calculation();
        if ( result === true )
          updateScreen( MyGlobal.firstNumber );
          //MyGlobal.secondNumber = 0;
          MyGlobal.calculationDone = true;
      }
    } else {
      MyGlobal.operator = operator;
      MyGlobal.firstClick = false;
    }
  }

  function calculation() {
    if( MyGlobal.operator == "+" ) {
      MyGlobal.firstNumber += MyGlobal.secondNumber;
    } else if ( MyGlobal.operator == "-" ) {
      MyGlobal.firstNumber -= MyGlobal.secondNumber;
    } else if ( MyGlobal.operator == '*' ) {
      MyGlobal.firstNumber *= MyGlobal.secondNumber;
    } else if ( MyGlobal.operator == '\\' ) {
      console.log("divide");
      if ( MyGlobal.secondNumber === 0 ) {
        alert("Mathematical error!");
        return false;
      }
      MyGlobal.firstNumber /= MyGlobal.secondNumber;
    }

    MyGlobal.calulation = true;
    return true;
  }

  function updateScreen( num ) {
    $("#result").text( num );
  }

