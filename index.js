var rollNumber1;
var rollNumber2;
rollNumber2=Math.floor(Math.random()*6)+1;
rollNumber1=Math.floor(Math.random()*6)+1;

if(rollNumber1==1){
document.querySelector(".dice1").setAttribute("src","/images/one.png");
}

else if(rollNumber1==2){
    document.querySelector(".dice1").setAttribute("src","/images/two.png");
} 

else if(rollNumber1==3){
  document.querySelector(".dice1").setAttribute("src","/images/three.png");
}   

else if(rollNumber1==4){
    document.querySelector(".dice1").setAttribute("src","/images/four.png");
} 

else if(rollNumber1==5){
   document.querySelector(".dice1").setAttribute("src","/images/five.png");
}  

else if(rollNumber1==6){
     document.querySelector(".dice1").setAttribute("src","/images/six.png");

}
if(rollNumber2==1){
document.querySelector(".dice2").setAttribute("src","/images/one.png");
}

else if(rollNumber2==2){
    document.querySelector(".dice2").setAttribute("src","/images/two.png");
} 

else if(rollNumber2==3){
  document.querySelector(".dice2").setAttribute("src","/images/three.png");
}   

else if(rollNumber2==4){
    document.querySelector(".dice2").setAttribute("src","/images/four.png");
} 

else if(rollNumber2==5){
   document.querySelector(".dice2").setAttribute("src","/images/five.png");
}  

else if(rollNumber2==6){
     document.querySelector(".dice2").setAttribute("src","/images/six.png");

}
if(rollNumber1>rollNumber2){
    document.querySelector("h2").style.visibility="visible";  
    document.querySelector("h2").innerHTML("Player one wins");
}
else if(rollNumber2>rollNumber1){
    document.querySelector("h2").style.visibility="visible";  
    document.querySelector("h2").innerHTML="Player two wins";
}
else{
    document.querySelector("h2").style.visibility="visible";  
    document.querySelector("h2").innerHTML="Its a Tie roll Again";
}
