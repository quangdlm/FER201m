    $("#header").load("./src/component/html/header.html");
    $("#footer").load("./src/component/html/footer.html");
    $('.nav-item').each(function(id,element){
        console.log("click");
        element.onclick = function(){
            console.log("active ",$(".active"));
            $(".active").each(function(id,element){
                element.classList.remove("active");
            });
            element.className += " active";
            console.log("click ", element);

        };
    });