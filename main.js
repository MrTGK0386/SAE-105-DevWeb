const INFO = document.getElementById("interface");
const SCREEN = document.getElementById("millieu");


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
} //done
function goHallG(){

}
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

function goMachine(){

}

function goBabyfoot(){

}

function goAscenceur(){

}

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
