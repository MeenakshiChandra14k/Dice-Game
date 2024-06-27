// var randomNumber1 = Math.round(Math.random()*5)+1;
var randomNumber1;
var randomNumber2;

function changeImage(){
    randomNumber1 = Math.round(Math.random()*5)+1;
    var location="./images/dice"+randomNumber1+".png";
    document.getElementsByClassName("img1")[0].src=location;
    randomNumber2 = Math.round(Math.random()*5)+1;
    location="./images/dice"+randomNumber2+".png";
    document.getElementsByClassName("img2")[0].src=location;
    
    if(randomNumber1>randomNumber2){
        document.getElementsByTagName("h1")[0].innerHTML="🚩Player 1 Wins!";
    }
    else if(randomNumber1<randomNumber2){
        document.getElementsByTagName("h1")[0].textContent="Player 2 Wins!🚩";
    }
    else{
        document.getElementsByTagName("h1")[0].textContent="Draw!";
    }
    
}
