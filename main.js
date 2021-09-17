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
};

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
    
};

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
};

const resetClicked=e=>{
    text.textContent=null;
    a="";
    b="";
    op="";
    symb="";
    
};

const equalsClicked=e=>{
    text.textContent=operation(a,b,op);
    a=text.textContent;
    b="";
    op="";
    symb="";
};

const backspClicked=e=>{
  if(b!="") b=b.substr(0,b.length-1);
  else if(b=="" && symb!=""){
    symb="";
    op=""
  }
  else if(a!="") a=a.substr(0,a.length-1);

  text.textContent=a+symb+b;
};

const keyPressed=e=>{
  switch(e.keyCode){
    case 8 : backspClicked(this); keyflag=true; break;
    case 46: resetClicked(this); keyflag=true; break;
    case 187:
    case 13: equalsClicked(this); keyflag=true; break;
    case 107: op="add"; symb="+"; text.textContent=a+symb; keyflag=true; break;
    case 109: op="sub"; symb="-"; text.textContent=a+symb; keyflag=true; break;
    case 106: op="mul"; symb="*"; text.textContent=a+symb; keyflag=true; break;
    case 111: op="div"; symb="-"; text.textContent=a+symb; keyflag=true; break;
    default: keyflag=false;
  }
  if(op=="" && !keyflag){
    switch(e.keyCode){
        case 49:
        case 97: 
          a=a+"1"; break;
        case 50:
        case 98: 
          a=a+"2"; break;
        case 51: 
        case 99:
          a=a+"3"; break;
        case 52: 
        case 100:
          a=a+"4"; break;
        case 53: 
        case 101:
          a=a+"5"; break;
        case 56: 
        case 102:
          a=a+"6"; break;
        case 57: 
        case 103:
          a=a+"7"; break;
        case 58: 
        case 104:
          a=a+"8"; break;
        case 59: 
        case 105:
          a=a+"9"; break;
        case 48: 
        case 96: a=a+"0"; break;
    }
    text.textContent=a;
}
else if(op!=null && !keyflag){
    switch(e.keyCode){
      case 49:
        case 97: 
          b=b+"1"; break;
        case 50:
        case 98: 
          b=b+"2"; break;
        case 51: 
        case 99:
          b=b+"3"; break;
        case 52: 
        case 100:
          b=b+"4"; break;
        case 53: 
        case 101:
          b=b+"5"; break;
        case 56: 
        case 102:
          b=b+"6"; break;
        case 57: 
        case 103:
          b=b+"7"; break;
        case 58: 
        case 104:
          b=b+"8"; break;
        case 59: 
        case 105:
          b=b+"9"; break;
        case 48: 
        case 96: b=b+"0"; break;
    }
    text.textContent=a+symb+b;
  }
}

let a="", b="", op="",symb="", keyflag=false;
const text=document.querySelector(".text-field");
const numbers=document.querySelectorAll(".numbers");
numbers.forEach(number=>{
    number.addEventListener('click',numberClicked);
});

const operations=document.querySelectorAll(".mathOp");
operations.forEach(operation=>{
    operation.addEventListener('click',operationClicked);
});

const reset=document.querySelector(".reset");
reset.addEventListener('click',resetClicked);

const equals=document.querySelector(".equals");
equals.addEventListener('click',equalsClicked);

const backsp=document.querySelector('.backsp');
backsp.addEventListener('click',backspClicked);

window.addEventListener('keydown',keyPressed);