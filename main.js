const Image = document.getElementById("image").getAttribute("src");
const INFO = document.getElementById("interface");
const SCREEN = document.getElementById("millieu");


function goBack(){
    history.go(-1);
}

function goNext(){
    if (Image == "Photos/FrontIUT.jpg"){
        INFO.innerHTML = "<p>Bienvenue à l'IUT de Béziers j'espère que la visite vous plaira</p>\n" +
            "    <p>Entrez vite n'ayez pas peur</p>\n" +
            "    <style>\n" +
            "      p {\n" +
            "        text-align: center;\n" +
            "        color: aqua;\n" +
            "      }\n" +
            "    </style>"
        SCREEN.innerHTML= "<img src=\"Photos/hall-global.jpg\" id=\"image\">\n" +
            "<button onclick=\"goNext()\" class=\"hide\" id=\"julien\"></button>\n" +
            "<button onclick=\"goNext()\" class=\"hide\" id=\"nathan\"></button>\n" +
            "<button onclick=\"goNext()\" class=\"hide\" id=\"fabio\"></button>\n" +
            "<button onclick=\"goNext()\" class=\"hide\" id=\"etienne\"></button>\n" +
            "<style>\n" +
            "    #etienne {\n" +
            "    position: absolute;\n" +
            "    top: 30%;\n" +
            "    left: 20%;\n" +
            "    width: 100px;\n" +
            "    height: 100px;\n" +
            "}</style>"
        console.log(INFO.innerHTML);
        console.log(2);        
    }
    else if (Image == "Photos/hallglobal")
    console.log(1);
    console.log(Image);

}