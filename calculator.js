let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e) =>{
        buttonValue = e.target.innerText; 
        console.log("Button is ", buttonValue);

        if(buttonValue == 'C'){
            screen.value = "";
        }
        else if(buttonValue == 'X'){
            buttonValue = '*'
            screen.value += buttonValue;
        }
        else if(buttonValue == '=') {
            screen.value = eval(screen.value);
        }
        else{
            screen.value += buttonValue;
        }
    })
}

