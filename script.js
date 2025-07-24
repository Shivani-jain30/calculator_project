let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
button.addEventListener('click', (e) => {
    let value = e.target.innerText.trim();
    console.log("Button clicked:" +value);

    if(value === '='){
            try{
            string = eval(string);
            } catch {
                string = "Error";
            }
            inputBox.value = string;
        } 
         else if(value === "AC") {
            string = "";
            inputBox.value = string;
        }
        else if(value === "DEL") {
           string = string.slice(0,-1);
            inputBox.value = string;
        }
         else {
            string += value;
            inputBox.value = string;
        }
         });

});
        
    

   

