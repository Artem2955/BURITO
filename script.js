let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "../BURITO/1light.css" ){
        theme.href = "../BURITO/2dark.css";
    }else{
      theme.href = "../BURITO/1light.css";
    }
    const currentTheme = localStorage.getItem("theme");
}


