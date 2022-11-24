// Main variables
const INFO = document.getElementById("interface");
const SCREEN = document.getElementById("millieu");
const TICK = 1000;

// Misc variables

const textFrontBadDoor = "ENTREZ PAR LA BONNE PORTE !!!" //text when you try enter the exit door
const textCofee = "Oh un café, SUPER !!" // text when you click on tje vending machine
const textPiano = "Vous êtes actuellement en train de jouer : "
const textDrum = "Vous êtes actuellement en train de jouer :"
const textPercu = "Vous êtes actuellement en train de jouer :"
const textSynth = "Vous êtes actuellement en train de jouer :"
const textMaster = "Vous êtes actuellement en train de jouer :"
const textGenius = "Vous êtes actuellement en train de jouer :"
let rebel = 0; //accumulator
let piano = 0; //accumulator
let drum = 0; //accumulator
let percu = 0; //accumulator
let synth = 0; //accumulator
let master = 0; //accumulator
let genius = []; //accumulator
let explorator = []; //accumulator
let cofee = 0; //accumulator
const Apiano = new Audio("");
const Adrum = new Audio("");
const Apercu = new Audio("");
const Asynth = new Audio("");
const Amaster = new Audio("");

//these are the function to warp to each place in the iut

function goAmphi(){
    explorator.push("a");
    INFO.innerHTML = "<p>C'est ici que votre patience sera mise à l'épreuve</p>\n";
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
    INFO.innerHTML = "<p>Un ascenceur qui permet de rejoindre le dernier étage</p>";
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
    INFO.innerHTML = "<p>Bienvenue au dernier étage, c'est ici que vous trouverez les équipe technique, les classes de RT et le FabLab</p>";
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
    INFO.innerHTML = "<p>C'est ici que vous pouvez faire vos plus gros tournois de babyfoot</p>";
    SCREEN.innerHTML = "<img src=\"Photos/babyfoot.jpg\" id=\"image\" alt=\"A babyfoot table\">\n" +
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
    INFO.innerHTML = "<p>Voici une salle de cours classique, la pluparts d'entre-elles se trouvent au rez-de-chaussez</p>";
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
    INFO.innerHTML = "<p>Ce couloir mène vers les salles de classe du rez-de-chaussez,</p>" +
        "<p>tout de suite sur votre droite</p>";
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
    INFO.innerHTML = "<p>A gauche dans ce couloir, vous trouverez un ascenceur</p>" +
        "<p>Au fond vous pourrez accéder au salles techniques</p>";
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
    INFO.innerHTML = "<p>Sur votre droite, vous trouverez les salles de classe technique des MMI</p>";
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
    INFO.innerHTML = "<p>Ceci est une salle de classe technique de MMI</p> " +
        "<p>C'est ici que les MMI passe le plus de temps en cours</p>";
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
    INFO.innerHTML = "<p>Ici, vous pouvez jouez des instrument qui sont \n" +
        "    mis à votre disposition ou ramener votre propre\n" +
        "    matériel si il n'est pas trop encombrant</p>\n" +
        "<p>Allez-y, essayez !</p>";
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
    INFO.innerHTML = "<p>Bienvenue à l'IUT de Béziers j'espère que la visite vous plaira</p>\n" +
        "<p>Entrez vite n'ayez pas peur</p>\n";
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
    INFO.innerHTML = "<p>Bienvenue dans le hall de l'IUT !</p>\n" +
        "<p>Cet endroit est le lieu ou les élèves se rassemblent entre les pauses</p>\n";
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
    INFO.innerHTML = "<p>Sur votre gauche ce trouve toute la partie administration de l'IUT</p>" +
    "<p>En haut de cette escalier ce trouve l'étage avec les salles technique et l'ascenceur donnant accés au FabLab</p>" +
    "<p>Si vous passez à gauche de l'escalier, vous pourrez accéder au salles de cours normales</p>";
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
    INFO.innerHTML = "<p>Cette espace permet de se ressourcer et de discutter tranquillement</p>\n" +
        "<p>Vous pouvez aussi jouer une partie endiabler de babyfoot jusqu'a en avoir mal aux main</p>\n";
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
    INFO.innerHTML = "<p>En face de vous se trouve les amphithéâtre de l'IUT</p>\n" +
        "<p>A droite vous trouverez une scène avec des instruments en libre accés pour permettre la pratique de la musique à l'IUT</p>" +
        "<p>Et à gauche vous trouverez l'espace de pause du hall avec des distributeurs et des babyfoots</p>";
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
    INFO.innerHTML = "<p>En passant par ici vous pouvez accéder</p>" +
        "<p>A droite : à l'espace de pause du hall</p>" +
        "<p>Et en face : aux espaces de cours du rez-de-chaussez</p>";
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
    INFO.innerHTML = "<p>Ces machinnes permettent d'acheter à manger ou à boire mais attention</p>" +
        "<p>elles ne prennent pas la cartes</p>";
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
    INFO.innerHTML = "<p>Personne n'a l'air d'être là ...</p>";
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
    INFO.innerHTML = "<p>En continuant tout droit, vous pourrez accéder à l'ascenceur ou au salles de cours des MMI</p>";
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
    INFO.innerHTML = "<p>Cet endroit est le paradis des petits créatifs</p>" +
        "<p>Vous pourrez venir ici pour fabriquer le monde</p>";
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
        Apiano.play();
        Adrum.pause();
        Apercu.pause();
        Asynth.pause();
        Amaster.pause();
        genius.push("a");
        piano++;
    }
    else if (l === 2){
        Apiano.pause();
        Adrum.play();
        Apercu.pause();
        Asynth.pause();
        Amaster.pause();
        genius.push("b");
        drum++;
    }
    else if (l === 3){
        Apiano.pause();
        Adrum.pause();
        Apercu.play();
        Asynth.pause();
        Amaster.pause();
        genius.push("c");
        percu++;

    }
    else if (l === 4){
        Apiano.pause();
        Adrum.pause();
        Apercu.pause();
        Asynth.play();
        Amaster.pause();
        genius.push("d");
        synth++;
    }
    else {
        Apiano.pause();
        Adrum.pause();
        Apercu.pause();
        Asynth.pause();
        Amaster.play();
        genius.push("e");
        master++;
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
