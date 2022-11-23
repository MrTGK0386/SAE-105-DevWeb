const Image = document.getElementById("image").getAttribute("src");
const INFO = document.getElementById("interface");
const screen = document.getElementById("image");


function goBack(){
    history.go(-1);
}

function goNext(){
    if (Image == "Photos/FrontIUT.jpg"){
        INFO.innerHTML = "<p>Bienvenue à l'IUT de Béziers j'espère que la visite vous plaira</p>\n" +
            "    <p>Entrez vite n'ayez pas peur</p>\n" +
            "    <style>\n" +
            "      p {\n" +
            "        position: center;\n" +
            "        color: aqua;\n" +
            "      }\n" +
            "    </style>"
        Image
        console.log(INFO.innerHTML);
        console.log(2);
        
    }
    console.log(1);
    console.log(Image);

}