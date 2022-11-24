const INFO = document.getElementById("interface");
const SCREEN = document.getElementById("millieu");

//these are the function to warp to each place in the iut

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
    INFO.innerHTML = "<p>Ce couloir mène vers les salles de classe du rez-de-chaussez</p>";
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
    INFO.innerHTML = "<p>Vous trouverez sur votre gauche la partie administrative de l'IUT, c'est ici qu'il faudra venir pour régler la majorité des problèmes administratif</p>\n" +
        "<p>L'escalier situé en face de vous permet d'accéder au premier étage. C'est l'étage dans lequel vous passerez le plus de temps à l'IUT</p>";
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
    INFO.innerHTML = "<p>Personne n'est là pour le moment...</p>";
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
    INFO.innerHTML = "<p>Cet endroit est le paradis des petits créatifs</p>" +
        "<p>Vous pourrez venir ici pour fabriquer le monde avec Alexis</p>";
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
} // no image

// goNext function is used when moving in the IUT

function goNext(p) { //this function is used to change the place you're in 
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
