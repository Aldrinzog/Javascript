let display = document.getElementById('display');

let button =Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('Paina', [e] => {
        switch(e.target.inner.Text){
            case 'C';
                display.innerText = '';
                break;
                case '<-';
                if(display.innerText){
                    display.innerText = display.innerText(0, -1);
                }
               break;
               case '=';
               try {
                display.innerText = eval(display.innerText);
               }catch{
                   display.innerText = 'Error!';
               }
               
            default:
                display.innerText += e.target.innerText; 
        }
    });
});
