$(function() {
    console.log("document is ready!");
    var userName, nameLength, nameMsg, nameReverse, letterThree, letterOne, spiritAnimal, movieChar  = ""; 
    $('#btnName').click(function() {
        userName = $('#userName').val(); 

        nameLength = getStringLength(userName);
        nameMsg = "The Length of your name is: ";
        $('#nameOutput').append(nameMsg + nameLength + "<br/>"); 
    
        nameReverse = reverseString(userName);
        nameMsg = "Your Name reversed letters is: ";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 

        letterOne =firstLetter(userName);
        threeMsg = "The first letter of your name is: ";
        $('#nameOutput').append(threeMsg + letterOne + "<br/>");
        
        letterThree = thirdLetter(userName);
        threeMsg = "The third letter of your name is: ";
        $('#nameOutput').append(threeMsg + letterThree + "<br/>");

        spiritAnimal = getSpiritAnimal(userName);
        nameMsg = "Your spirit animal is: ";
        $('#nameOutput').append(nameMsg + spiritAnimal + "<br/>");
        stringArrayPosition(userName); 

        movieChar = getMovie(userName);
        nameMsg = "Your super-hero/villian is: ";
        $('#nameOutput').append(nameMsg + movieChar + "<br/>"+ "You have soooo much WOWWW!");
        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");
      })

    function getStringLength(stringVal){
        var stringLength = stringVal.length; 
       return stringLength; 
    }
    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString; 
    }
    function thirdLetter(stringVal){
       var thirdString = stringVal[2]; 
        var thirdString = stringVal[2];
       return thirdString; 
    }
    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html(""); 
        }
        else if(elementType=="input"){
            $(elementId).val(" "); 
        }     
    } 
    function stringArrayPosition(stringVal){
        for(i=0; i<stringVal.length; i++){
            console.log(i + " " + stringVal[i]);
        }
    }
    function getSpiritAnimal(stringLength){
        if(nameLength > 7){
            return "You are a cat";
        }
        else if(nameLength < 7) {
            return "Your spirit animal is an alligator";
        } else {
            return "You are a panda";
        }
    }
    function firstLetter(stringVal){
        var firstString = stringVal[0]; 
        return firstString; 
     }
    
    function getMovie(letterOne){
        if(letterOne = "A" || "a" ){
            return "Anakin Skywalker";
        }
        else if(firstLetter === "B" || 'b' ){
            return "Batman";
        }
        else if(firstString === 'C' || 'c' ){
            return "Captian America";
        }
        else if(letterOne = 'D' || 'd' ){
            return "Doofenshmirtz";
        }
        else if(letterOne == 'E' || 'e' ){
            return "Elsa";
        }
        else if(letterOne == 'F' || 'f' ){
            return "Frankienstien";
        }
        else if(letterOne == 'G' || 'g' ){
            return "Ghost Rider";
        }
        else if(letterOne == 'H' || 'h' ){
            return "Hulk";
        }
        else if(letterOne == 'I' || 'i' ){
            return "Iron Man";
        }
        else if(letterOne == 'J' || 'j' ){
            return "The Joker";
        }
        else if(letterOne == 'K' || 'k' ){
            return "Killer Frost";
        }else if(letterOne == 'L' || 'l' ){
            return "Lion King";
        }
        else if(letterOne == 'M' || 'm' ){
            return "Mario";
        }
        else if(letterOne == 'N' || 'n' ){
            return "Namora";
        }
        else if(letterOne == 'O' || 'o' ){
            return "Odin";
        }
        else if(letterOne == 'P' || 'p' ){
            return "Power Ranger";
        }
        else if(letterOne == 'Q' || 'q' ){
            return "Quagmire";
        }
        else if(letterOne == 'R' || 'r' ){
            return "Rocky Balboa";
        }
        else if(letterOne == 'S' || 's' ){
            return "Spider-Man";
        }
        else if(letterOne == 'T' || 't' ){
            return "Thanos";
        }
        else if(letterOne == 'U' || 'u' ){
            return "Ultron";
        }
        else if(letterOne == 'V' || 'v' ){
            return "Vecna";
        }
        else if(letterOne == 'W' || 'w' ){
            return "Wanda";
        }
        else if(letterOne == 'X' || 'x' ){
            return "X-ray";
        }
        else if(letterOne == 'Y' || 'y' ){
            return "Yoda";
        }
        else if(letterOne == 'Z' || 'z' ){
            return "Zebra-Man";
        }
        else {
            return "Darth Vader";
        }
    }
});

