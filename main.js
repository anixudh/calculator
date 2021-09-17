const operation=(a,b,op)=>{
    let n1=Number(a);
    let n2=Number(b);
    let res="", resn=0;
    switch(op){
        case "add": 
            resn=n1+n2;
            res=res+resn;
            break;
        case "sub": 
            resn=n1-n2;
            res=res+resn;
            break;
        case "mul": 
            resn=n1*n2;
            res=res+resn;
            break;
        case "div": 
            resn=n1/n2;
            res=res+resn;
            break;
    }
    return res;
}

const numberClicked=e=>{
    if(op==""){
        switch(e.target.className){
            case "one": a=a+"1"; break;
            case "two": a=a+"2"; break;
            case "three": a=a+"3"; break;
            case "four": a=a+"4"; break;
            case "five": a=a+"5"; break;
            case "six": a=a+"6"; break;
            case "seven": a=a+"7"; break;
            case "eight": a=a+"8"; break;
            case "nine": a=a+"9"; break;
            case "zero": a=a+"0"; break;
        }
        text.textContent=a;
    }
    else{
        switch(e.target.className){
            case "one": b=b+"1"; break;
            case "two": b=b+"2"; break;
            case "three": b=b+"3"; break;
            case "four": b=b+"4"; break;
            case "five": b=b+"5"; break;
            case "six": b=b+"6"; break;
            case "seven": b=b+"7"; break;
            case "eight": b=b+"8"; break;
            case "nine": b=b+"9"; break;
            case "zero": b=b+"0"; break;
        }
        text.textContent=a+symb+b;
    }
    console.log("a="+a+" op="+op+" b="+b);
    
}

const operationClicked=e=>{
    if(a!="" && b!=""){
        text.textContent=operation(a,b,op);
        a=text.textContent;
        b="";
        op="";
        symb="";
    }
    op=e.target.className;
    switch(op){
        case "add": symb="+";break;
        case "sub": symb="-";break;
        case "mul": symb="*";break;
        case "div": symb="/";break;
    }
    text.textContent=a+symb;
}

const resetClicked=e=>{
    text.textContent=null;
    a="";
    b="";
    op="";
    symb="";
    
}

const equalsClicked=e=>{
    text.textContent=operation(a,b,op);
    a=text.textContent;
    b="";
    op="";
    symb="";
}

const backspClicked=e=>{
  if(b!="") b=b.substr(0,b.length-1);
  else if(b=="" && symb!=""){
    symb="";
    op=""
  }
  else if(a!="") a=a.substr(0,a.length-1);

  text.textContent=a+symb+b;
}

let a="", b="", op="",symb="";
const text=document.querySelector(".text-field");
const numbers=document.querySelectorAll(".numbers");
numbers.forEach(number=>{
    number.addEventListener('click',numberClicked);
})

const operations=document.querySelectorAll(".mathOp");
operations.forEach(operation=>{
    operation.addEventListener('click',operationClicked);
})

const reset=document.querySelector(".reset");
reset.addEventListener('click',resetClicked);

const equals=document.querySelector(".equals");
equals.addEventListener('click',equalsClicked);

const backsp=document.querySelector('.backsp');
backsp.addEventListener('click',backspClicked);