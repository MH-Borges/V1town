$(".theme-switch").on("click", () => {
    $("body").toggleClass("light-theme");
    var dark = $("#dark").text();
    if (dark.trim() === 'Dark Mode') {
        light = '<span id="lightIn">Light Mode<span>';  
        $("#darkIn").remove();
        $("#light").append(light);
    }
    if (dark.trim() === 'Light Mode') {
        DarkIn = '<span id="darkIn">Dark Mode<span>';  
        $("#lightIn").remove();
        $("#dark").append(DarkIn);
    }
});

$("#activelogo").on("click", () => {
    $(".Menu").toggleClass("actived");
    $(".content").toggleClass("actived");
    $(".iconFts").toggleClass("actived");  
});

$(".Links").on("click", () => {
    $(".Links").toggleClass("linksPhone");  
});

$(".iconFts").on("click", () => {
    var getClass = $('.iconsFT').attr('class');
    if (getClass === 'iconsFT') {
        $(".five").remove();
        $(".six").remove();
        $(".iconsFT").addClass("metade");
        $(".FotoBx").addClass("metade");
        $(".FotoBx").removeClass("none");
    }
    if (getClass === 'iconsFT metade') {
        $(".iconsFT").removeClass("metade");
        $(".two").remove();
        $(".three").remove();
        $(".four").remove();
        $(".iconsFT").addClass("cem");
        $(".FotoBx").removeClass("metade");
        $(".FotoBx").addClass("cem");
    }
    if (getClass === 'iconsFT cem') {
        $(".iconsFT").removeClass("cem");
        two = '<div class="iconsFT two"></div>';
        three = '<div class="iconsFT three"></div>';
        four = '<div class="iconsFT four"></div>';
        five = '<div class="iconsFT five"></div>';
        six = '<div class="iconsFT six"></div>';
        $(".iconFts").append(two, three, four, five, six);
        $(".FotoBx").removeClass("cem");
        $(".hide").addClass("none");
    }
});

$(".AbelhaTeste").on("click", () => {
    var abelha = $("#Abelha").text();
    if (abelha.trim() === 'Abelha') {
        abelha = '<span id="TesteAgora"> Clique aqui e teste </span>';
        TesteMuda = '<li id="resetAbelha"> Resetar </li>';  
        $("#Abelha").remove();
        $("#testAbelha").append(abelha);
        $("#MudaTeste").remove();
        $(".AbelhaTeste").append(TesteMuda);
    }
    else{
        abelha = '<span id="Abelha"> Abelha </span>'; 
        TesteMuda = '<li id="MudaTeste">Testar</li>'; 
        
        $("#Abelha").remove();
        $("#MudaTeste").remove();

        $("#TesteAgora").remove();
        $("#testAbelha").append(abelha);
        $("#resetAbelha").remove();
        $(".AbelhaTeste").append(TesteMuda);
        $("#testAbelha").removeClass("regular");
        $('#testAbelha').addClass("bold");
        $('#testAbelha').css("font-size", "4vw");
    }
});

$("#type").on("click", () => {
    var select = $("#type option:selected").val();
    if(select === 'bold'){
        $("#testAbelha").removeClass("regular");
        $('#testAbelha').addClass("bold");
        $("#linkDownload").attr("href", "font/abelhagorda.otf");
    }
    if(select === 'regular'){
        $("#testAbelha").removeClass("bold");
        $('#testAbelha').addClass("regular");
        $("#linkDownload").attr("href", "font/abelharegular.otf");
    }
});

$("#slider").on("input",function () {
    $('#testAbelha').css("font-size", $(this).val() + "px");
});

$(".MenuSd").on("click", () => {
    if(fts === 'tab-pane fade show active'){
        $(".iconFts").removeClass("none"); 
    }
    else{
        $(".iconFts").addClass("none");
    }
});

$(document).ready(()=> {
    $(".TradicionalFt").mouseenter(()=> {
        $('.Tradicional').addClass("none");
        $('.TradicionalOn').removeClass("none");
    })
    .mouseleave(()=> {
        $('.Tradicional').removeClass("none");
        $('.TradicionalOn').addClass("none");
    });

    $(".DecorativaFt").mouseenter(()=> {
        $('.Decorativa').addClass("none");
        $('.DecorativaOn').removeClass("none");
    })
    .mouseleave(()=> {
        $('.Decorativa').removeClass("none");
        $('.DecorativaOn').addClass("none");
    });

    $(".LigaturasFt").mouseenter(()=> {
        $('.Ligaturas').addClass("none");
        $('.LigaturasOn').removeClass("none");
    })
    .mouseleave(()=> {
        $('.Ligaturas').removeClass("none");
        $('.LigaturasOn').addClass("none");
    });
    
    $(".SetasFt").mouseenter(()=> {
        $('.Setas').addClass("none");
        $('.SetasOn').removeClass("none");
    })
    .mouseleave(()=> {
        $('.Setas').removeClass("none");
        $('.SetasOn').addClass("none");
    });
});