// var randomNumber1 = Math.round(Math.random()*5)+1;
var randomNumber1;
var randomNumber2;

function changeImage(x){
    if(x===1){
        randomNumber1 = Math.round(Math.random()*5)+1;
        var location="./images/dice"+randomNumber1+".png";
    }
    else{
        randomNumber2 = Math.round(Math.random()*5)+1;
        var location="./images/dice"+randomNumber2+".png";
    }
    image="img"+x;
    document.getElementsByClassName(image)[0].src=location;
    if(x===2){
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
}