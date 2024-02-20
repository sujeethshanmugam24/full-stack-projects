
const res = document.getElementById("result");


function calculate() {
  try {
    let result = eval(res.value);
    if (isNaN(result) || result === undefined) {
      res.value = "0";
    } else {
      res.value = result;
      res.classList.add("shake");
      setTimeout(() => {
        res.classList.remove("shake");
      }, 500);
    }
  } catch (err) {
    alert("Invalid expression!");
  }
}




function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);


function keyboardInputHandler(e) {
  
  e.preventDefault();
  
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }


  if (e.key === ".") {
    res.value += ".";
  }


  if (e.key === "Enter") {
    calculate(result.value);
  }

  
  if (e.key === "Backspace") {
    const resultInput = res.value;
    
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
