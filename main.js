const Image = document.getElementById("image").getAttribute("src");
const INFO = document.getElementById("interface");
const SCREEN = document.getElementById("millieu");


function goBack(){
    history.go(-1);
}

function goNext(p) {
    console.log(p)
    if (Image == "Photos/FrontIUT.jpg") {
        if (p == 1) {
            INFO.innerHTML = "<p>Bienvenue dans le hall de l'IUT !</p>\n" +
                "<p>Cet endroit est le lieu ou les élèves se rassemblent entre les pauses</p>\n" +
                "<style>\n" +
                "    p {\n" +
                "        position: center;\n" +
                "      }\n" +
                "</style>";
            SCREEN.innerHTML = "<img src=\"Photos/hall-global.jpg\" id=\"image\" alt=\"hall d'entré de l'IUT\">\n" +
                "<button onclick=\"goNext(1)\" class=\"hide\" id=\"etienne\"></button>\n" +
                "<button onclick=\"goNext(2)\" class=\"hide\" id=\"fabio\"></button>\n" +
                "<button onclick=\"goNext(3)\" class=\"hide\" id=\"julien\"></button>\n" +
                "<style>\n" +
                "    #etienne {\n" +
                "    top: 92%;\n" +
                "    right: 100%;\n" +
                "    width: 100%;\n" +
                "    height: 50px;\n" +
                "    }\n" +
                "    #fabio {\n" +
                "        top: %;\n" +
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
                "</style>";
        } else {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    } else if (Image == "Photos/hallglobal.jpg") {
        if (p == 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        } else if (p == 2) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        } else {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        }
    } else if (Image == "Photos/hall-leftView.jpg") {
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
    } else if (Image == "Photos/hall-leftView.jpg") {
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
    } else if (Image == "Photos/secretaria-doorFront.jpg") {
        if (p == 1) {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        } else {
            INFO.innerHTML = "";
            SCREEN.innerHTML = "";
        } 
    } else if (Image == "Photos/hall-leftView.jpg") {
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
    } else if (Image == "Photos/hall-pause.jpg") {
            if (p == 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            } else if (p == 2) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            } else {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
    } else if (Image == "Photos/machine.jpg") {
            if (p == 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            } else {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
    } else if (Image == "Photos/babyfoot.jpg") {
            if (p == 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            } 
    } else if (Image == "Photos/front-amphi.jpg") {
            if (p == 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            } else if (p == 2) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            } 
    } else if (Image == "Photos/front-scene.jpg") {
            if (p == 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
    } else if (Image == "Photos/amphi.jpg") {
            if (p == 1) {
                INFO.innerHTML = "";
                SCREEN.innerHTML = "";
            }
        }
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
}