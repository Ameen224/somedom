var onn=document.getElementById("on")
var offf=document.getElementById("off")
var bulboff=true

function bulb(){
   if(bulboff){
      onn.style.display="block"
      offf.style.display="none"
      bulboff=false
   }else{
      onn.style.display="none"
      offf.style.display="block"
      bulboff=true
}
}



var cnt=document.getElementById("count")
var on=parseInt(cnt.innerHTML)
// var up=document.getElementById("increment")
// var down=document.getElementById("decrement")

function increase(){
  on=on+1
  cnt.innerHTML=on  
}
function decrease(){
   if(on<=0){
      on=1
   }
   on=on-1
   cnt.innerHTML=on
   
}





var isoff1= true
var off1=document.getElementById("off1")
var on1=document.getElementById("on1") 
var stopp

function start(){
   if(!stopp){
   topp=setInterval(function(){

   if(isoff1){
      off1.style.display="none"
      on1.style.display="block"
      isoff1=false
   }else{
      off1.style.display="block"
      on1.style.display="none"
      isoff1=true
   }

},500)
}
}
function stop(){
      clearInterval(topp)
     off1.style.display="block"
      on1.style.display="none"
   }


