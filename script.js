
real_window = document.getElementById('real-window');
main_wind = document.getElementById('ans-window');
activeNum = ''
var num='';
var sign='';
var exsign='';
var mainNum='';
var mem = {
    'firstNum' : 0,
    'secondNum' : 0,
};

//gets clicked number
function number(num) {
    // it need for not be two dot and not be big numbers
    if((num!=='.' || !activeNum.includes('.')) && activeNum.length < 12){
    activeNum+=num;
    real_window.textContent = activeNum;}
}
// when clicked signs it calculate numbers with ex-sign and takes new sign
function valid(sign){
    //it need
    console.log(activeNum)
    if(activeNum !==''){
        
    mainNum=calculate(activeNum,mainNum,exsign);
    if(mainNum > Math.pow(10,12)) {
        main_wind.textContent = "calculator can't solve it, please reload the page!"; 
        real_window.textContent = [];
    }
    else{
    main_wind.textContent = mainNum;
    real_window.textContent = [];
    activeNum='';}}
    exsign=sign;
}

// button -> clicked 
function back(){
    activeNum=activeNum.slice(0,-1);
    real_window.textContent = activeNum;
}

 function calculate(firstNum,secondNum,sign){
     if(sign==='+'){
         return parseFloat(firstNum)+parseFloat(secondNum);
     }
     if(sign==='-'){
        return Math.floor(secondNum)-Math.floor(firstNum);
    }
    if(sign==='/'){
        return Math.floor(secondNum)/Math.floor(firstNum);
    }
    if(sign==='*'){
        return Math.floor(firstNum)*Math.floor(secondNum);
    }
    else{
        return firstNum;
    }
 }

 // Memory + or - button clicked 
 // it takes main window number and calculate with ex-numbers
 function Mem(memSign){
    mainNum=calculate(activeNum,mainNum,exsign);
    mem['firstNum'] = mainNum;
    //it cleans input and main window 
    cleanMem();
    console.log(mem['firstNum']);
    mem['secondNum'] = calculate(mem['firstNum'],mem['secondNum'],memSign);
    console.log(mem['secondNum']);
    main_wind.textContent = [];
    mainNum='';
 }

 //button get Memory number  
 const getMem = () => {
     mainNum = mem['secondNum'];
     main_wind.textContent = mainNum;
 }

 // cleans windows and variables which used for windows 
function cleanMem(){
    activeNum='';
    num='';
    sign='';
    exsign='';
    mainNum='';
    real_window.textContent=[];
    main_wind.textContent = mainNum;
}

// cleans all variables and windows
 function clean(){ 
    activeNum='';
    num='';
    sign='';
    exsign='';
    mainNum='';
    real_window.textContent=[];
    main_wind.textContent = mainNum;
    mem = {
        'firstNum' : 0,
        'secondNum' : 0,
    };
 }