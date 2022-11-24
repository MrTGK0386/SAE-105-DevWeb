const INFO = document.getElementById("interface");
const SCREEN = document.getElementById("millieu");

function goAmphi(){
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
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/ascenceurBot.jpg\" id=\"image\" alt=\"Elevator door\">\n" +
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
} //
function goAscenceurTop(){
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/ascenceurTop.jpg\" id=\"image\" alt=\"Elevator door\">\n" +
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
} //
function goBabyfoot(){
    INFO.innerHTML = "";
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
} //
function goC0XX(){
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/C0XX.jpg\" id=\"image\" alt=\"A random groundfloor class \">\n" +
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
} //
function goCouloirBot(){
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/couloirBot.jpg\" id=\"image\" alt=\"A groundfloor coridor\">\n" +
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
} //
function goCouloirTop1(){
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/couloirTop1.jpg.jpg\" id=\"image\" alt=\"First floor's first corridor\">\n" +
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
} //
function goCouloirTop2(){
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/couloirTop2.jpg.jpg\" id=\"image\" alt=\"First floor's second corridor\">\n" +
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
} //
function goD1XX(){
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/D1XX.jpg\" id=\"image\" alt=\"A random tech class in the first floor\">\n" +
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
} //
function goScene(){
    INFO.innerHTML = "<p>Ici, vous pouvez jouez des instrument qui sont \n" +
        "    mis à votre disposition ou ramener votre propre\n" +
        "    matériel si il n'est pas trop encombrant</p>\n" +
        "<p>Allez-y, essayez !</p>";
    SCREEN.innerHTML = "<img src=\"Photos/front-scene.jpg\" id=\"image\" alt=\"Litlle IUT's stage\">\n" +
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
function goFront(){
    INFO.innerHTML = "<p>Vous êtes revenu en arrière ? Pourquoi ?</p>\n" +
        "<p>N'ayez pas peur, il n'y à pas d'examen aujourd'hui personne ne vous n'avez rien à craindre</p>\n";
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
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/hall-leftView.jpg\" id=\"image\" alt=\"This is the left view of the hub\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "<button onclick=\"goNext(4)\" class=\"hide\" id=\"nathan\"></button>\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 30%;\n" +
        "        left: 20%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "        top: 30%;\n" +
        "        left: 20%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "    #julien {\n" +
        "        top: 30%;\n" +
        "        left: 20%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "    #nathan {\n" +
        "        top: 30%;\n" +
        "        left: 20%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "</style>";
} //
function goHallPause(){
    INFO.innerHTML = "<p>Cette permet de se ressourcer et de discutter tranquillement</p>\n" +
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
    INFO.innerHTML = "<p>Vous trouverez sur votre droite la scène de l'IUT, elle contient divers insturment en libre accés</p>\n" +
        "<p>En face de vous ce trouve les Amphithéâtres \"Olympe de Gouges\" et \"Linus Torvald\" c'est ici qu'auront lieux vos cours magistraux</p>\n" +
        "<p>Sur la gauche vous retrouverez l'espace détente avec des distributeur et des babyfoots</p>\n";
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
} //
function goLeftStair(){
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/hall-left-stair.jpg\" id=\"image\" alt=\"A view below the stairs\">\n" +
        "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
        "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
        "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
        "<button onclick=\"goNext(4)\" class=\"hide\" id=\"nathan\"></button>\n" +
        "<style>\n" +
        "    #etienne {\n" +
        "        top: 30%;\n" +
        "        left: 20%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "    #fabio {\n" +
        "        top: 30%;\n" +
        "        left: 20%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "    #julien {\n" +
        "        top: 30%;\n" +
        "        left: 20%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "    #nathan {\n" +
        "        top: 30%;\n" +
        "        left: 20%;\n" +
        "        width: 100px;\n" +
        "        height: 100px;\n" +
        "    }\n" +
        "</style>";
} //
function goMachine(){
    INFO.innerHTML = "";
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
} //
function goSecretaria(){
    INFO.innerHTML = "";
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
} //
function goTopStair(){
    INFO.innerHTML = "";
    SCREEN.innerHTML = "<img src=\"Photos/top-stairs.jpg\" id=\"image\" alt=\"The top of the stairs\">\n" +
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
} //



function goNext(p) {
    const Image = document.getElementById("image").getAttribute("src");
    console.log(p);
    console.log(Image)
    if (Image === "Photos/FrontIUT.jpg") {
        if (p === 1) {
            return goHall();
        }
        else {
            INFO.innerHTML = "<p>ENTREZ PAR LA BONNE PORTE !!! >:(</p>";
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
    }
    else if (Image === "Photos/hall-leftView.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        } else if (p === 2) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        } else if (p === 3) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        } else {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
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
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
        else {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        } 
    }
    else if (Image === "Photos/top-stairs.jpg") {
            if (p === 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
            else if (p === 2) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
            else if (p === 3) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
            else {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
    }
    else if (Image === "Photos/hall-pause.jpg") {
            if (p === 1) {
                return goHallD();
            }
            else if (p === 2) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
            else {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
    }
    else if (Image === "Photos/machine.jpg") {
            if (p === 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
            else {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
    }
    else if (Image === "Photos/babyfoot.jpg") {
            if (p === 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            } 
    }
    else if (Image === "Photos/front-scene.jpg") {
            if (p === 1) {
                return goHallD();
            }
    }
    else if (Image === "Photos/amphi.jpg") {
            if (p === 1) {
                return goHallD();
            }
        }
    else if (Image === "Photos/left-stair.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    else if (Image === "Photos/couloirTop1.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    else if (Image === "Photos/couloirTop2.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    else if (Image === "Photos/D1XX.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    else if (Image === "Photos/couloirBot.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    else if (Image === "Photos/C0XX.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    else if (Image === "Photos/ascenceurBot.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    else if (Image === "Photos/ascenceurTop.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    else if (Image === "Photos/fablab.jpg") {
        if (p === 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    }
    

}



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
