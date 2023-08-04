
var allBtn = $(".rate");
var Rscore ;

allBtn.click(function(){

$(this).addClass("select");
allBtn.not(this).removeClass("select");

});

$(".submit").click(function(){

    $("#nextPage").removeClass("hidden");
    $("#firstPage").css("display","none");
    
});

