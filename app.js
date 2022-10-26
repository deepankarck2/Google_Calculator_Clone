const buttons = Array.from(document.getElementsByClassName('btn'));
const display = document.querySelector('#display'); 
let current_display = ""; 
let current_eval = "";
let ac_flag = false; 

buttons.map(button => {
    button.addEventListener('click', (e)=>{
        const clicked_btn = e.target.dataset.show;
        const clicked_eval = e.target.dataset.val;
        console.log(clicked_btn)
        
        if(clicked_btn == 'AC'){
            clear();
        }
        else if(clicked_btn == '!'){
            current_display += clicked_btn;
            display.value = current_display;
            const fact_index = current_display.indexOf('!');
            const fact_num = parseInt(current_display[fact_index-1]); 
            current_eval = current_eval.substring(0, current_eval.length - 1);

            current_eval += fact(fact_num);
            console.log(`Curr eval = ${current_eval}`); 
        }
        else if(clicked_btn == 'power'){
            current_display += '^(';
            const n = current_display[current_display.length-3]
            console.log(current_display);
            display.value = current_display;
            current_eval = current_eval.substring(0, current_eval.length - 1);
            current_eval += `Math.pow(${n},`
            console.log(n);
        }
        else if(clicked_btn == 'euqal'){
            let result = "";
            try{
                console.log(current_eval);
                result = eval(current_eval);
                display.value = result;
                display2.value = `${current_display}=`;
            }catch{
               display.value = "Error!";
            }
            document.querySelector('#eq').innerHTML = 'AC';
            ac_flag = true; 
            current_display = "";
            current_eval= "";
        }
        else{
            current_display += clicked_btn; 
            current_eval += clicked_eval
            console.log(current_eval);
            display.value = current_display;
        }
    })
});

function fact(num) {
    const facto = document.querySelector('.fact0'); 
    var result = num;

    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
}
  
function clear(){
    if(ac_flag == false){
        CE();
    }else{
        AC();
        ac_flag = false;
    }
}
function AC(){
    display.value = "0"; 
    current_display = "";
    current_eval= "";
    display2.value = "";
    document.querySelector('#eq').innerHTML = 'CE';
}
function CE(){
    current_display= current_display.substring(0, current_display.length - 1);
    current_eval = current_eval.substring(0, current_eval.length - 1);
    display.value = current_display;
}