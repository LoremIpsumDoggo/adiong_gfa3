var num1;
var num2;
var num3;
var biggestnum;
var numtolet; //num1 to letter
const alphabet = ['A', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'];
var time;
var hour;
var mins;


//Randomize numbers
    num1 = Math.ceil(Math.random() * 20);
    num2 = Math.ceil(Math.random() * 20);
    num3 = Math.ceil(Math.random() * 20);
//Biggest number
    biggestnum = Math.max(num1, num2, num3);
//# to alphabet oh yeah C++ knowledge
    numtolet = alphabet[num1];
//hr-min breakdown
    time = num2 * num3;
    mins = time % 60;
    hour = parseInt(time / 60);


//Change the statements
    //paragraph1
        switch (num1) {
            case 1:
                document.getElementById("p1").innerHTML = "I opened my laptop 1 time.";
                break;
        
            default:
                document.getElementById("p1").innerHTML = "I opened my laptop " + num1 + " times.";
                break;
        }
    //paragraph2
        switch (num2) {
            case 1:
                document.getElementById("p2").innerHTML = "I drank a total of 1 liter of water.";
                break;
        
            default:
                document.getElementById("p2").innerHTML = "I drank a total of " + num2 + " liters of water.";
                break;
        }
    //paragraph3
        switch (num3) {
            case 1:
                document.getElementById("p3").innerHTML = "I looked up 1 word in my Filipino-English dictionary, and found 0 definitions for it.";
                break;
        
            default:
                document.getElementById("p3").innerHTML = "I looked up " + num3 + " words in my Filipino-English dictionary, and found 0 definitions for them.";
                break;
        }
    //paragraph4
        var par4 = document.getElementById("p4");
        switch (biggestnum) { //So it doesn't get cramped, I made the document.getElement etc. into a variable
            case 1:
                par4.innerHTML = "I also played 1 video game, coincidentally matching with the highest number above, which is ";
                break;
        
            default:
                par4.innerHTML = "I also played " + biggestnum + " different video games, coincidentally matching with the highest number above, which is ";
                break;
        }
        
        if((num1 == num2) && (num1 == num3)) {
            par4.innerHTML += "all of the numbers above.";
        }
        else if(((biggestnum == num1) && (biggestnum == num2)) ||
                ((biggestnum == num2) && (biggestnum == num3)) ||
                ((biggestnum == num1) && (biggestnum == num3))) {
            if(num1 == num2)
            {
                par4.innerHTML += "how many times I opened my laptop, and how much liters of water I drank.";
            }
            if(num2 == num3)
            {
                par4.innerHTML += "how much liters of water I drank, and how many words I looked up in my Filipino-English dictionary.";
            }
            if(num1 == num3)
            {
                par4.innerHTML += "how many times I opened my laptop, and how many words I looked up in my Filipino-English dictionary.";
            }
        }
        else {
            switch (biggestnum) {
                case num1:
                    par4.innerHTML += "how many times I opened my laptop.";
                    break;
                case num2:
                    par4.innerHTML += "how much liters of water I drank.";
                    break;
                case num3:
                    par4.innerHTML += "how many words I looked up in my Filipino-English dictionary.";
                    break;
            
                default:
                    break;
            }
        }
    //paragraph5
        document.getElementById("p5").innerHTML = "The first letter I typed on each day is the letter \"" + numtolet + "\".";
    //paragraph6
        switch (hour) {
            case 1:
                document.getElementById("p6").innerHTML = "I spent " + time + " minutes, or 1 hr and " + mins + " min working on requirements.";
                break;
        
            default:
                document.getElementById("p6").innerHTML = "I spent " + time + " minutes, or " + hour + " hrs and " + mins + " min working on requirements.";
                break;
        }
