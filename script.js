const display = document.querySelector("#display");
const numberBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll(".op");
let num = 0;
let operation = "=";
let firstEntry = true;

for(let i=0; i<numberBtn.length; i++){
    numberBtn[i].addEventListener("click",()=>{
        if((display.textContent==="0" || operation!=="=") && firstEntry) {
            display.textContent = numberBtn[i].textContent;
            firstEntry = false;
        }
        else display.textContent = display.textContent + numberBtn[i].textContent;
        
    });
}

for(let i=0; i<operatorBtn.length; i++){
    operatorBtn[i].addEventListener("click",function() {
        operate(operatorBtn[i].textContent);
    });
}

function operate(op){
    console.log(op);
    if(op==="ac"){
        display.textContent = 0;
        num = 0;
        operation = "=";
        return;
        
    }
    else if(op==="ce"){
        display.textContent = display.textContent.slice(0,display.textContent.length-1);
        if(display.textContent.length===0) display.textContent = 0;
    }
    else if(op==="%"){
        display.textContent = parseFloat(display.textContent)/100;
    }
    else if(op==="+/-"){
        display.textContent = (-1)*parseFloat(display.textContent);
    }
    //+-x÷
    else if(op==="="){
        display.textContent = basicOperation(num,parseFloat(display.textContent),operation);
        num = 0;
        operation = "=";
        firstEntry = true;
    }
    else if(op==="+" ||op==="-" ||op==="x"||op==="÷"){ 
        if(num!=0){
            display.textContent = basicOperation(num,parseFloat(display.textContent),operation);
            
        }
        num = parseFloat(display.textContent);
        operation = op;
        firstEntry = true;
    }
}
function basicOperation(n1, n2, operation){
    if(operation==="+") return n1+n2;
    else if(operation==="-") return n1-n2;
    else if(operation==="x") return n1*n2;
    else if(operation==="÷"){
        if(n2===0) {
            num = 0;
            operation = "=";
            return "Here we go again :)";
        }
        else return n1/n2;
    }
}