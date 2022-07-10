let opciones = $(".subCategoriaOptions option");
$("#ubicacionSelect").select2();

for(let i = 0; i < opciones.length; i++){
    if($(opciones[i]).hasClass("AGUA") === false){
        $(opciones[i]).addClass("hide");
        $(opciones[i]).attr("selected",false);
    }
    else{
        $(opciones[i]).removeClass("hide");
        $(opciones[i]).attr("selected",true);
    }
 }

$("#motivoOptions").on("change",function(){
    switch(this.value){
        case "0":
            for(let i = 0; i < opciones.length; i++){
                if($(opciones[i]).hasClass("AGUA") === false){
                    $(opciones[i]).addClass("hide");
                    $(opciones[i]).attr("selected",false);
                }
                else{
                    $(opciones[i]).removeClass("hide");
                    $(opciones[i]).attr("selected",true);
                }
             }
             break;
        case "1":
            for(let i = 0; i < opciones.length; i++){
                if($(opciones[i]).hasClass("ALUMBRADO") === false){
                    $(opciones[i]).addClass("hide");
                    $(opciones[i]).attr("selected",false);
                }
                else{
                    $(opciones[i]).removeClass("hide");
                    $(opciones[i]).attr("selected",true);
                }
             }
             break;
        case "2":
            for(let i = 0; i < opciones.length; i++){
                if($(opciones[i]).hasClass("ESPECTÁCULOS") === false){
                    $(opciones[i]).addClass("hide");
                    $(opciones[i]).attr("selected",false);
                }
                else{
                    $(opciones[i]).removeClass("hide");
                    $(opciones[i]).attr("selected",true);
                }
             }
             break;
        case "3":
            for(let i = 0; i < opciones.length; i++){
                if($(opciones[i]).hasClass("INFRAESTRUCTURA") === false){
                    $(opciones[i]).addClass("hide");
                    $(opciones[i]).attr("selected",false);
                }
                else{
                    $(opciones[i]).removeClass("hide");
                    $(opciones[i]).attr("selected",true);
                }
                }
             break;
        case "4":
            for(let i = 0; i < opciones.length; i++){
                if($(opciones[i]).hasClass("MEDIO") === false){
                        $(opciones[i]).addClass("hide");
                        $(opciones[i]).attr("selected",false);
                }
                else{
                     $(opciones[i]).removeClass("hide");
                     $(opciones[i]).attr("selected",true);
                }
                }
                break;
        case "5":
                for(let i = 0; i < opciones.length; i++){
                    if($(opciones[i]).hasClass("OBRAS") === false){
                            $(opciones[i]).addClass("hide");
                            $(opciones[i]).attr("selected",false);
                    }
                    else{
                         $(opciones[i]).removeClass("hide");
                         $(opciones[i]).attr("selected",true);
                    }
                    }
                    break;
        case "6":
                for(let i = 0; i < opciones.length; i++){
                    if($(opciones[i]).hasClass("SERVICIOS") === false){
                            $(opciones[i]).addClass("hide");
                            $(opciones[i]).attr("selected",false);
                    }
                    else{
                         $(opciones[i]).removeClass("hide");
                         $(opciones[i]).attr("selected",true);
                    }
                    }
                    break;
        case "7":
                for(let i = 0; i < opciones.length; i++){
                    if($(opciones[i]).hasClass("TRÁNSITO") === false){
                             $(opciones[i]).addClass("hide");
                             $(opciones[i]).attr("selected",false);
                    }
                    else{
                         $(opciones[i]).removeClass("hide");
                         $(opciones[i]).attr("selected",true);
                    }
                    }
                    break;

        default:
            for(let i = 0; i < opciones.length; i++){
                    $(opciones[i]).removeClass("hide");
                }
                break;
            
    }
    
});

