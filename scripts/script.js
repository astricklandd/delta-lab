$(function() {
    console.log("document is ready!");

    var userName, nameLength, nameMsg, nameReverse = ""; 

    $('#btnName').click(function() {
        userName = $('#userName').val(); 
        // console.log(userName); 
        // console.log($('#userName').val().length); 
        // console.log(getStringLength(userName)); 

        nameLength = getStringLength(userName);
        nameMsg = "The Length of your name is: ";
        $('#nameOutput').append(nameMsg + nameLength + "<br/>"); 

        // console.log(reverseString(userName)); 

        nameReverse = reverseString(userName);
        nameMsg = "Your Name reversed letters is: ";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 

        console.log(thirdLetter(userName)); 

        stringArrayPosition(userName); 

        // window.alert('YOU HAVE SOOO MUCH WOW!!');
        // return('you have soooo much WOW!!!')

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
    //    return("you have soooo much WOW!!!");

    }

    function thirdLetter(stringVal){
        
       return thirdString; var thirdString = stringVal[2]; 
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

    function getSpiritAnimal(x){
        //flow control: case switch, loop, if/then
        // if name starts with A,B,C, etc then _ animal 
        if(x.nameLength > 4){
            //execute some code (print animal name w link)
            return "You are a cat";
        }
        else if(x.nameLength < 7) {
            return "your spirir animal is an alligator";
        } else {
            return "you are a panda";
        }
    }

});
