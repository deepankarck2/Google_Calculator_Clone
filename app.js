// document.addEventListener("click", () => {
//     let val = ""
//     val = document.querySelector('button').dataset.show 
//     console.log(val)
// })

const buttons = Array.from(document.getElementsByClassName('btn'));
const display = document.querySelector('#display'); 
let current_display = ""; 
let current_eval = "";

buttons.map(button => {
    
    button.addEventListener('click', (e)=>{
        const clicked_btn = e.target.dataset.show;
        const clicked_eval = e.target.dataset.val;
        console.log(clicked_btn)
        
        if(clicked_btn == 'AC'){
            display.value = "0"; 
            current_display = "";
            current_eval= "";
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
        else if(clicked_btn == 'euqal'){
            let result = "";
            try{
                console.log(current_eval);
                result = eval(current_eval);
                display.value = result;
            }catch{
               display.value = "Error!";
            }
            current_display = "";
            current_eval= "";
        }
        else{
            current_display += clicked_btn; 
            current_eval += clicked_eval
            //console.log(current_eval);
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
  

// const v = 88; 
// let hh = `Math.tan(3)`
// console.log(eval(current_display));

// document.querySelector('#display').value = 100;