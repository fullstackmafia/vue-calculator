var app = new Vue({
  el: "#app",
  data: {
    "current" : '',
    changeMode : true
    
  },
  methods : {
    press: function (event) {
      let key = event.target.innerText;
      if ( key != "=" &&
      key != "C" &&
      key != "*" &&
      key != "/" &&
      key != "√" &&
      key != "x ²" &&
      key != "%" &&
      key != "<=" && 
      key != "±" && 
      key != "sin" && 
      key != "cos" && 
      key != "tan" && 
      key != "log" && 
      key != "ln" && 
      key != "x^" && 
      key != "x !" && 
      key != "π" && 
      key != "e" && 
      key != "rad" && 
      key != "∘") {
        app.current += key;
      } else if ( key === "=") {
        equals();
      } else if (key === "C") {
        clear();
      } else if (key === "*") {
      multiply();
      } else if (key === "/") {
        divide();
      } else if (key === "±") {
        plusMinus();
      } else if (key === "<=") {
        backspace();
      } else if (key === "%") {
        percent();
      } else if (key === "π") {
        pi();
      } else if (key === "x ²") {
        square();
      } else if (key === "√") {
        squareRoot();
      } else if (key === "sin") {
        sin();
      } else if (key === "cos") {
        cos();
      } else if (key === "tan") {
        tan();
      } else if (key === "log") {
        log();
      } else if (key === "ln") {
        ln();
      } else if (key === "x^") {
        exponent();
      } else if (key === "x !") {
        factorial();
      } else if (key === "e") {
        exp();
      } else if (key === "rad") {
        radians();
      } else if (key === "∘") {
        degrees();
    }
  },
}
});



function equals() {
  if ((app.current).indexOf("^") > -1) {
    var base = (app.current).slice(0, (app.current).indexOf("^"));
    var exponent = (app.current).slice((app.current).indexOf("^") + 1);
    app.current = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    app.current = eval(app.current)
  }
}

function clear() {
  app.current = "";
}

function backspace() {
  app.current = app.current.substring(0, app.current.length - 1);
}

function multiply() {
  app.current += "*";
}

function divide() {
  app.current +=  "/";
}

function plusMinus() {
  if (app.current.charAt(0) === "-") {
    app.current = app.current.slice(1);
  } else {
    app.current = "-" + app.current;
  }
}

function factorial() {
  var number = 1;
  if (app.current === 0) {
    app.current = "1";
  } else if (app.current < 0) {
    app.current = NaN;
  } else {
    var number = 1;
    for (var i = app.current; i > 0; i--) {
      number *=  i;
    }
    app.current = number;
  }
}

function pi() {
  app.current = (app.current * Math.PI);
}

function square() {
  app.current = eval(app.current * app.current);
}

function squareRoot() {
  app.current = Math.sqrt(app.current);
}

function percent() {
  app.current = app.current / 100;
}

function sin() {
  app.current = Math.sin(app.current);
}

function cos() {
  app.current = Math.cos(app.current);
}

function tan() {
  app.current = Math.tan(app.current);
}

function log() {
  app.current = Math.log10(app.current);
}

function ln() {
  app.current = Math.log(app.current);
}

function exponent() {
  app.current += "^";
}

function exp() {
  app.current = Math.exp(app.current);
}

function radians() {
  app.current = app.current * (Math.PI / 180);
}

function degrees() {
  app.current = app.current * (180 / Math.PI);
}