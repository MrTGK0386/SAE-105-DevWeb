//Main variables
const INFO = document.getElementById("interface");
const SCREEN = document.getElementById("millieu");
const TICK = 1000;

//Misc variables
const textFrontBadDoor = "ENTER THE RIGHT WAY !!!" //text when you try enter the exit door
const textCofee = "Oh a cofee, GREAT !!" // text when you click on tje vending machine
const textPiano = "You are now playing : Moonlight Sonata 3rd movement by Beethoven"
const textDrum = "You are now playing : Song 2 by Blur"
const textPercu = "You are now playing : Sympathy for the Devil by Rolling Stones"
const textSynth = "You are now playing : Jump by Van Halen"
const textMaster = "You are now playing : La vériter by ZZXX MXT"
let rebel = 0; //accumulator
let piano = 0; //accumulator
let drum = 0; //accumulator
let percu = 0; //accumulator
let synth = 0; //accumulator
let master = 0; //accumulator
let genius = []; //accumulator
let explorator = []; //accumulator
let cofee = 0; //accumulator
const Apiano = new Audio("Sounds/Piano.mp3");
const Adrum = new Audio("Sounds/Drum.mp3");
const Apercu = new Audio("Sounds/Percu.mp3");
const Asynth = new Audio("Sounds/Synth.mp3");
const Amaster = new Audio("Sounds/Master.mp3");

//these are the function to warp to each place in the iut

function goAmphi(){
    explorator.push("a");
    INFO.innerHTML = "<p>That's where your patience will be put to the test</p>\n";
    SCREEN.innerHTML = "<img src=\"Photos/amphi.jpg\" id=\"image\" alt=\"Linus Torvald amphitheater\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "</style>";
} //done
function goAscenceurBot(){
    explorator.push("b");
    INFO.innerHTML = "<p>This is the elevator that brings you to the last floor</p>";
    SCREEN.innerHTML = "<img src=\"Photos/ascenceurBot.jpg\" id=\"image\" alt=\"Elevator door\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 0;\n" +
        "        left: 0;\n" +
        "        width: 50px;\n" +
        "        height: 100%;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 9%;\n" +
        "         left: 30%;\n" +
        "         width: 406px;\n" +
        "         height: 482px;\n" +
        "     }\n" +
        "    #julien {\n" +
        "        top: 0;\n" +
        "        right: 0;\n" +
        "        width: 50px;\n" +
        "        height: 100%;\n" +
        "    }\n" +
        "</style>";
} // done
function goAscenceurTop(){
    explorator.push("c");
    INFO.innerHTML = "<p>Welcome to the last floor, here you will find all the IT workers , the RT classes and the FabLab</p>";
    SCREEN.innerHTML = "<img src=\"Photos/ascenceurTop.jpg\" id=\"image\" alt=\"Elevator door\">\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #fabio {\n" +
        "         top: 9%;\n" +
        "         left: 30%;\n" +
        "         width: 406px;\n" +
        "         height: 482px;\n" +
        "     }\n" +
        "    #julien {\n" +
        "        top: 0;\n" +
        "        right: 0;\n" +
        "        width: 50px;\n" +
        "        height: 100%;\n" +
        "    }\n" +
        "</style>";
} // done
function goBabyfoot(){
    explorator.push("d");
    INFO.innerHTML = "<p>This is the foostable that will host all the best foosball tournament</p>";
    SCREEN.innerHTML = "<img src=\"Photos/babyfoot.jpg\" id=\"image\" alt=\"A foostable\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 0;\n" +
        "         right: 0;\n" +
        "         width: 50px;\n" +
        "         height: 92%;\n" +
        "     }\n" +
        "    #julien {\n" +
        "        top: 0;\n" +
        "        left: 0;\n" +
        "        width: 50px;\n" +
        "        height: 92%;\n" +
        "    }\n" +
        "</style>";
} // done
function goC0XX(){
    explorator.push("e");
    INFO.innerHTML = "<p>This class is a basic classroom, most of them are in groundfloor</p>";
    SCREEN.innerHTML = "<img src=\"Photos/C0XX.jpg\" id=\"image\" alt=\"A random groundfloor class \">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "</style>";
} // done
function goCouloirBot(){
    explorator.push("f");
    INFO.innerHTML = "<p>This corridor leads to the classrooms,</p>" +
        "<p>immediatly on your right</p>";
    SCREEN.innerHTML = "<img src=\"Photos/couloirBot.jpg\" id=\"image\" alt=\"A groundfloor coridor\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 19%;\n" +
        "         left: 76%;\n" +
        "         width: 178px;\n" +
        "         height: 449px;\n" +
        "</style>";
} // done
function goCouloirTop1(){
    explorator.push("g");
    INFO.innerHTML = "<p>To the left of this corridor, you'll find an elevator</p>" +
        "<p>At the bottom you'll see the technique classrooms</p>";
    SCREEN.innerHTML = "<img src=\"Photos/couloirTop1.jpg\" id=\"image\" alt=\"First floor's first corridor\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 39%;\n" +
        "         left: 48%;\n" +
        "         width: 57px;\n" +
        "         height: 64px;\n" +
        "     }\n" +
        "    #julien {\n" +
        "        top: 35%;\n" +
        "        left: 42%;\n" +
        "        width: 40px;\n" +
        "        height: 19%;\n" +
        "    }\n" +
        "</style>";
} // done
function goCouloirTop2(){
    explorator.push("h");
    INFO.innerHTML = "<p>On your right, you'll find the technique classes : occupied most of the time by MMIs </p>";
    SCREEN.innerHTML = "<img src=\"Photos/couloirTop2.jpg\" id=\"image\" alt=\"First floor's second corridor\">\n" +
    "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
    "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
    "\n" +
    "<style>\n" +
    "    #etienne {\n" +
    "        top: 92%;\n" +
    "        right: 0;\n" +
    "        width: 100%;\n" +
    "        height: 50px;\n" +
    "    }\n" +
    "    #fabio {\n" +
    "         top: 17%;\n" +
    "         left: 60%;\n" +
    "         width: 59px;\n" +
    "         height: 235px;\n" +
    "</style>";
} // done
function goD1XX(){
    explorator.push("i");
    INFO.innerHTML = "<p>This is a MMI's technique classroom</p> " +
        "<p>MMIs spends most of their course time in this type of classroom </p>";
    SCREEN.innerHTML = "<img src=\"Photos/D1XX.jpg\" id=\"image\" alt=\"A random tech class in the first floor\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "</style>";
} // done
function goScene(){
    explorator.push("j");
    INFO.innerHTML = "<p>Here, You can play instrument which are available at any time</p> " +
        "    <p>Or you can bring yours</p>"+
        "<p>Come-on, give it a try</p>";
    SCREEN.innerHTML = "<img src=\"Photos/front-scene.jpg\" id=\"image\" alt=\"Litlle IUT's stage\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"Music(1)\" class=\"play\" id=\"piano\"></button>\n" +
        "<button onclick=\"Music(2)\" class=\"play\" id=\"drum\"></button>\n" +
        "<button onclick=\"Music(3)\" class=\"play\" id=\"percu\"></button>\n" +
        "<button onclick=\"Music(4)\" class=\"play\" id=\"synth\"></button>\n" +
        "<button onclick=\"Music(5)\" class=\"play\" id=\"master\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #piano {\n" +
        "        top: 22%;\n" +
        "        left: 41%;\n" +
        "        width: 200px;\n" +
        "        height: 200px;\n" +
        "    }\n" +
        "    #drum {\n" +
        "        top: 22%;\n" +
        "        right: 28%;\n" +
        "        width: 75px;\n" +
        "        height: 300px;\n" +
        "    }\n" +
        "    #percu {\n" +
        "        top: 22%;\n" +
        "        right: 5%;\n" +
        "        width: 200px;\n" +
        "        height: 200px;\n" +
        "    }\n" +
        "    #synth {\n" +
        "        top: 30%;\n" +
        "        left: 15%;\n" +
        "        width: 200px;\n" +
        "        height: 200px;\n" +
        "    }\n" +
        "    #master {\n" +
        "        top: 50%;\n" +
        "        left: 47%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "</style>";
} //done
function goFront(){
    explorator.push("k");
    INFO.innerHTML = "<p>Welcome to the Beziers's IUT, we hope you a nice visit !</p>\n" +
        "<p>Come in, don't be shy</p>\n";
    SCREEN.innerHTML = "<img src=\"Photos/FrontIUT.jpg\" id=\"image\" alt=\"Front of the IUT\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 71%;\n" +
        "        left: 42%;\n" +
        "        width: 150px;\n" +
        "        height: 150px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "        top: 71%;\n" +
        "        left: 16%;\n" +
        "        width: 150px;\n" +
        "        height: 160px;\n" +
        "    }\n" +
        "</style>";
} //done
function goHall(){
    explorator.push("l");
    INFO.innerHTML = "<p>Welcome in the IUT's main hub</p>\n" +
        "<p>This is the living place of the batiment, where student take a break</p>\n";
    SCREEN.innerHTML = "<img src=\"Photos/hall-global.jpg\" id=\"image\" alt=\"IUT entrance hub\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "    top: 92%;\n" +
        "    right: 0;\n" +
        "    width: 100%;\n" +
        "    height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "        top: 0;\n" +
        "        right: 0;\n" +
        "        width: 350px;\n" +
        "        height: 92%;\n" +
        "    }\n" +
        "    #julien {\n" +
        "        top: 0;\n" +
        "        left: 0;\n" +
        "        width: 350px;\n" +
        "        height: 92%;\n" +
        "    }\n" +
        "</style>";
} //done
function goHallG(){
    explorator.push("m");
    INFO.innerHTML = "<p>On your left is all the administration part of the IUT</p>" +
    "<p>On top of this stairs is the technique classrooms and the elevator that brings you to FabLab</p>" +
    "<p>If you pass on the left side of the stairs, you will go directly into the normal classrooms corridor</p>";
    SCREEN.innerHTML = "<img src=\"Photos/hall-leftView.jpg\" id=\"image\" alt=\"This is the left view of the hub\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "<button onclick=\"goNext(4)\" class=\"hide\" id=\"nathan\"></button>\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        bottom: 1%;\n" +
        "        right: 0;\n" +
        "        width: 275px;\n" +
        "        height: 75%;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "        top: 18%;\n" +
        "        left: 45%;\n" +
        "        width: 100px;\n" +
        "        height: 125px;\n" +
        "    }\n" +
        "    #julien {\n" +
        "        top: 42%;\n" +
        "        left: 20%;\n" +
        "        width: 92px;\n" +
        "        height: 294px;\n" +
        "    }\n" +
        "    #nathan {\n" +
        "        top: 40%;\n" +
        "        left: 3%;\n" +
        "        width: 134px;\n" +
        "        height: 322px;\n" +
        "    }\n" +
        "</style>";
} //done
function goHallPause(){
    explorator.push("n");
    INFO.innerHTML = "<p>This place is where to take a break and talk with your friends</p>\n" +
        "<p>You can also play some crazy foosball games until your hands hurt</p>\n";
    SCREEN.innerHTML = "<img src=\"Photos/hall-pause.jpg\" id=\"image\" alt=\"Chilling zone's entrance\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 25%;\n" +
        "         left: 60%;\n" +
        "         width: 200px;\n" +
        "         height: 400px;\n" +
        "     }\n" +
        "    #julien {\n" +
        "        top: 0;\n" +
        "        left: 0;\n" +
        "        width: 342px;\n" +
        "        height: 92%;\n" +
        "    }\n" +
        "</style>";
} //done
function goHallD(){
    explorator.push("o");
    INFO.innerHTML = "<p>Right in front of you are the auditorium</p>\n" +
        "<p>On you right you will find a little stage with some instruments to permit musical practice</p>" +
        "<p>And to the left might see the break space with vending machine and foosball</p>";
    SCREEN.innerHTML = "<img src=\"Photos/hall-rightView.jpg\" id=\"image\" alt=\"Right part of the hub of the IUT\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "<button onclick=\"goNext(4)\" class=\"hide\" id=\"nathan\"></button>\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "        top: 0;\n" +
        "        right:0;\n" +
        "        width: 50px;\n" +
        "        height: 92%;\n" +
        "    }\n" +
        "    #julien {\n" +
        "        top: 29%;\n" +
        "        left: 56%;\n" +
        "        width: 160px;\n" +
        "        height: 210px;\n" +
        "    }\n" +
        "    #nathan {\n" +
        "        top: 20%;\n" +
        "        left: 16%;\n" +
        "        width: 267px;\n" +
        "        height: 369px;\n" +
        "    }\n" +
        "</style>";
} // done
function goLeftStair(){
    explorator.push("p");
    INFO.innerHTML = "<p>By going this way you can acces</p>" +
        "<p>On the right : to the break space</p>" +
        "<p>And accros from here  : to groundfloor classrooms</p>";
    SCREEN.innerHTML = "<img src=\"Photos/left-stair.jpg\" id=\"image\" alt=\"A view below the stairs\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "        top: 46%;\n" +
        "        left: 41%;\n" +
        "        width: 100px;\n" +
        "        height: 120px;\n" +
        "    }\n" +
        "    #julien {\n" +
        "        top: 0;\n" +
        "        right: 0;\n" +
        "        width: 50px;\n" +
        "        height: 92%;\n" +
        "    }\n" +
        "</style>";
} // done
function goMachine(){
    explorator.push("q");
    INFO.innerHTML = "<p>Those vending machines sells food and drink but beware</p>" +
        "<p>They don't accept bank cards</p>";
    SCREEN.innerHTML = "<img src=\"Photos/machine.jpg\" id=\"image\" alt=\"Some vendings machine\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 0;\n" +
        "         right: 0;\n" +
        "         width: 50px;\n" +
        "         height: 92%;\n" +
        "     }\n" +
        "    #julien {\n" +
        "        top: 15%;\n" +
        "        left: 6%;\n" +
        "        width: 756px;\n" +
        "        height: 73%;\n" +
        "    }\n" +
        "</style>";
} // done
function goSecretaria(){
    explorator.push("r");
    INFO.innerHTML = "<p>No one seems to be here ...</p>";
    SCREEN.innerHTML = "<img src=\"Photos/secretaria-doorFront.jpg\" id=\"image\" alt=\"Secretary's offices\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 0;\n" +
        "         right: 0;\n" +
        "         width: 200px;\n" +
        "         height: 92%;\n" +
        "     }\n" +
        "    #julien {\n" +
        "        top: 5%;\n" +
        "        left: 13%;\n" +
        "        width: 409px;\n" +
        "        height: 75%;\n" +
        "    }\n" +
        "</style>";
} // done
function goTopStair(){
    explorator.push("s");
    INFO.innerHTML = "<p>By going straight, you will find the elevator and the MMI's classrooms</p>";
    SCREEN.innerHTML = "<img src=\"Photos/top-stairs.jpg\" id=\"image\" alt=\"The top of the stairs\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 60%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 27%;\n" +
        "         left: 51%;\n" +
        "         width: 239px;\n" +
        "         height: 247px;\n" +
        "     }\n" +
        "</style>";
} // done
function goFablab(){
    explorator.push("t");
    INFO.innerHTML = "<p>This place is a paradise for creative ones</p>" +
        "<p>You can come here at anytime build the world</p>";
    SCREEN.innerHTML = "<img src=\"Photos/fablab.jpg\" id=\"image\" alt=\"The IUT's fablab\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 92%;\n" +
        "        right: 0;\n" +
        "        width: 100%;\n" +
        "        height: 50px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "         top: 25%;\n" +
        "         left: 60%;\n" +
        "         width: 200px;\n" +
        "         height: 400px;\n" +
        "     }\n" +
        "    #julien {\n" +
        "        top: 0;\n" +
        "        left: 0;\n" +
        "        width: 342px;\n" +
        "        height: 92%;\n" +
        "    }\n" +
        "</style>";
} // a faire

// goNext function is used when moving in the IUT

function goNext(p) { //this function is used to change the place you're in 
    const Image = document.getElementById("image").getAttribute("src");
    console.log(p);
    console.log(Image);
    if (Image === "Photos/FrontIUT.jpg") {
        if (p === 1) {
            return goHall();
        }
        else {
            INFO.innerHTML = "<p>"+textFrontBadDoor+"</p>";
            rebel++;
        }
    } //done
    else if (Image === "Photos/hall-global.jpg") {
        if (p === 1) {
            return goFront();
        }
        else if (p === 2) {
            return goHallD();
        }
        else {
            return goHallG();
        }
    } //done
    else if (Image === "Photos/hall-leftView.jpg") {
        if (p === 1) {
            return goHall();
        } 
        else if (p === 2) {
            return goTopStair();
        } 
        else if (p === 3) {
            return goLeftStair();
        } 
        else {
            return goSecretaria();
        }
    } //done
    else if (Image === "Photos/hall-rightView.jpg") {
        if (p === 1) {
            return goHall();
        }
        else if (p === 2) {
            return goScene();
        }
        else if (p === 3) {
            return goAmphi()
        }
        else {
            return goHallPause();
        }
    } //done
    else if (Image === "Photos/secretaria-doorFront.jpg") {
        if (p === 1) {
            return goHallG();
        }
        if (p === 2) {
            return goLeftStair()
        }
        else {
            rebel+=1;
        }
    } // done
    else if (Image === "Photos/top-stairs.jpg") {
            if (p === 1) {
                return goHallG();
            }
            else {
                return goCouloirTop1();
            }
    } // done
    else if (Image === "Photos/hall-pause.jpg") {
            if (p === 1) {
                return goHallD();
            }
            else if (p === 2) {
                return goMachine();
            }
            else {
                return goBabyfoot();
            }
    } // done
    else if (Image === "Photos/machine.jpg") {
            if (p === 2) {
                return goHallPause();
            }
            else if (p === 1) {
                return goBabyfoot();
            }
            else {
                cofee++;
                INFO.innerHTML = "<p>"+textCofee+"</p>";
            }
    } // done
    else if (Image === "Photos/babyfoot.jpg") {
            if (p === 1) {
                return goHallPause();
            }
            if (p === 2) {
                return goMachine();
            }
            else {
                return goLeftStair();
            }
    } // done
    else if (Image === "Photos/front-scene.jpg") {
            if (p === 1) {
                return goHallD();
            }
    } // done
    else if (Image === "Photos/amphi.jpg") {
            if (p === 1) {
                return goHallD();
            }
        } // done
    else if (Image === "Photos/left-stair.jpg") {
        if (p === 1) {
            return goSecretaria();
        }
        if (p === 3){
            return goBabyfoot();
        }
        else {
            return goCouloirBot();
        }
    } // done
    else if (Image === "Photos/couloirTop1.jpg") {
        if (p === 1) {
            return goTopStair();
        }
        if (p === 3){
            return goAscenceurBot();
        }
        else {
            return goCouloirTop2()
        }
    } // done
    else if (Image === "Photos/couloirTop2.jpg") {
        if (p === 1) {
           return goCouloirTop1();
        }
        else {
            return goD1XX();
        }
    } // done
    else if (Image === "Photos/D1XX.jpg") {
        if (p === 1) {
            return goCouloirTop2();
        }
    } // done
    else if (Image === "Photos/couloirBot.jpg") {
        if (p === 1) {
            return goLeftStair();
        }
        else {
            return goC0XX();
        }
    } // done
    else if (Image === "Photos/C0XX.jpg") {
        if (p === 1) {
            return goCouloirBot();
        }
    } // done
    else if (Image === "Photos/ascenceurBot.jpg") {
        if (p === 1) {
            return goCouloirTop1();
        }
        if (p === 3) {
            return goCouloirTop2();
        }
        else {
            return goAscenceurTop();
        }
    } // done
    else if (Image === "Photos/ascenceurTop.jpg") {
        if (p === 2) {
            return goAscenceurBot();
        }
        else {
            return goFablab();
        }
    } // done
    else if (Image === "Photos/fablab.jpg") {
        if (p === 1) {
            return goAscenceurTop()
        }
    } // no image
    

}

// Here are the achievements based function
function getSucces(id){
    document.getElementById(id).style.background = "#0d6efd"
    document.getElementById(id).style.color = "white"
}
function Rebel(i){
    if (i >= 5){
        getSucces("1");
    }
}
function Piano(i){
    if (i >= 1){
        getSucces("2")
    }
}
function Drum(i){
    if (i >= 1){
        getSucces("3")
    }
}
function Percu(i){
    if (i >= 1){
        getSucces("4")
    }
}
function Synth(i){
    if (i >= 1){
        getSucces("5")
    }
}
function Master(i){
    if (i >= 1){
        getSucces("6")
    }
}
function Genius(arr){
    if (arr.includes("a") &&
        arr.includes("b") &&
        arr.includes("c") &&
        arr.includes("d") &&
        arr.includes("e"))
    {
        getSucces("7")
    }
}
function Explorator(arr){
    if (arr.includes("a") &&
        arr.includes("b") &&
        arr.includes("c") &&
        arr.includes("d") &&
        arr.includes("e") &&
        arr.includes("f") &&
        arr.includes("g") &&
        arr.includes("h") &&
        arr.includes("i") &&
        arr.includes("j") &&
        arr.includes("k") &&
        arr.includes("l") &&
        arr.includes("m") &&
        arr.includes("n") &&
        arr.includes("o") &&
        arr.includes("p") &&
        arr.includes("q") &&
        arr.includes("r") &&
        arr.includes("s") )//&&
        //arr.includes("t"))
        {
        getSucces("8")
    }
}
function Coffee(i){
    if (i >= 1){
        getSucces("9")
    }
}

function Music(l){
    if (l === 1){
        Apiano.load();
        Adrum.pause();
        Apercu.pause();
        Asynth.pause();
        Amaster.pause();
        genius.push("a");
        piano++;
        INFO.innerHTML = "<p>"+textPiano+"</p>";
    }
    else if (l === 2){
        Apiano.pause();
        Adrum.load();
        Apercu.pause();
        Asynth.pause();
        Amaster.pause();
        genius.push("b");
        drum++;
        INFO.innerHTML = "<p>"+textDrum+"</p>";
    }
    else if (l === 3){
        Apiano.pause();
        Adrum.pause();
        Apercu.load();
        Asynth.pause();
        Amaster.pause();
        genius.push("c");
        percu++;
        INFO.innerHTML = "<p>"+textPercu+"</p>";

    }
    else if (l === 4){
        Apiano.pause();
        Adrum.pause();
        Apercu.pause();
        Asynth.load();
        Amaster.pause();
        genius.push("d");
        synth++;
        INFO.innerHTML = "<p>"+textSynth+"</p>";
    }
    else {
        Apiano.pause();
        Adrum.pause();
        Apercu.pause();
        Asynth.pause();
        Amaster.load();
        genius.push("e");
        master++;
        INFO.innerHTML = "<p>"+textMaster+"</p>";
    }
}

//Run the function with a tick

function runLoop(){
    Rebel(rebel);
    Piano(piano);
    Drum(drum);
    Percu(percu);
    Synth(synth);
    Master(master);
    Genius(genius);
    Explorator(explorator);
    Coffee(cofee);
}

setInterval(runLoop, TICK);



/*

else if (Image == "Photos/void.jpg") {
    if (p == 1) {
        INFO.innerHTML = "";
        SCREEN.innerHTML = "";
    } else if (p == 2) {
        INFO.innerHTML = "";
        SCREEN.innerHTML = "";
    } else if (p == 3) {
        INFO.innerHTML = "";
        SCREEN.innerHTML = "";
    } else {
        INFO.innerHTML = "";
        SCREEN.innerHTML = "";
    }
}

 */
