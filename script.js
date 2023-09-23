 const display = document.querySelector(".screen");
 const buttons = document.querySelectorAll("button");
 const specialChar = ["%", "*", "/", "-", "+", "="];
 let output = "";

 
//calculation
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC"){
        output="";
    } else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    } else {
        if(output === "" && specialChar.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}


//Add event listener to the buttons to display valueon click
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
     
})