function loadAside() {
    const content = document.getElementById("main_content");
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    const main_aside = document.getElementById("main_aside");
    const lesson_title = document.getElementById("unit_name");
    const main_nav = document.getElementById("main_nav");
    main_aside.style.height = (innerHeight-65).toString()+"px";
    if (innerWidth >= screen.width){
        header.style.textAlign = "left";
        header.style.height = "60px";
        lesson_title.style.display = "inline";
        lesson_title.style.margin = "10px";
        lesson_title.style.width = "auto";
        lesson_title.style.height = "100%";
        lesson_title.style.fontSize = "2em";
        lesson_title.style.paddingLeft = "1em";
        main_nav.style.height = "100%";
        main_nav.style.width = "auto";
        main_nav.style.textAlign = "right";
        main_nav.style.margin = "13px 1em 13px 0";
        main_aside.style.display = "block";
        content.style.width = "65%";
        content.style.marginTop = "0";
        main_aside.style.width = (innerWidth*0.30).toString()+"px";
    }else {
        main_aside.style.display = "none";
        header.style.textAlign = "center";
        lesson_title.style.width = "100%";
        lesson_title.style.height = "auto";
        lesson_title.style.display = "block";
        lesson_title.style.margin = "5px 0 0";
        lesson_title.style.fontSize = "25px"
        lesson_title.style.paddingLeft = "0";
        main_nav.style.display = "block";
        main_nav.style.height = "auto";
        main_nav.style.width = "100%";
        main_nav.style.textAlign = "center";
        main_nav.style.margin = "1px";
        content.style.width = "98%";
        main.style.clear = "none";
        header.style.height = (60*1.28).toString()+"px";
        content.style.marginTop = "10px";
    }

}