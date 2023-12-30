
function displayvalue(value){
    let input=document.getElementById("display");
    input.value +=value;
}
function cleardata(){
    let input=document.getElementById("display");
    input.value ='';
}
function clearchar(){
    let input=document.getElementById("display");
    inputval=input.value;
    len=inputval.length;
    console.log(len);
    a=inputval.slice(0,-1)
    input.value=a;
}
function calculate(){
    let input=document.getElementById("display");
    inputval=input.value;
    
  try{
    result=parseFloat(eval(inputval))
    
  }
  catch(error){
    result='Error';
  }
  input.value=result;
  
}