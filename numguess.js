const minnum=1;
const maxnum=100;
const  answer=Math.floor(Math.random()*(maxnum-minnum+1))


//
let attempts=0;
let guess;
let running=true;

while(running){

    guess=window.prompt(`enter a valid number between ${minnum}-${maxnum}`);
    guess=Number(guess);
    console.log(guess);
    if(isNaN(guess)){
       window.alert("enter a valid number");

    }
    else if(guess<minnum||guess>maxnum){
        window.alert("enter a valid number");

    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("too low");
        
        }
        else if(guess>answer){
            window.alert("too high")

        }
        else{
            window.alert(`answer is correct and it took you ${attempts} attempts`)
            running=false
        }
    }
    
        
}

