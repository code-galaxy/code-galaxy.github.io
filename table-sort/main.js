
$("[class*=sup]").show();
$("[class*=sub]").show();
$("[class*=btn]").hide();


$(".game").click(function(){
    $("[class^=sup]").show();
    $(this).css("color","#111");
    $("[class*=btn]").show();
});

$(".sup_sport").click(function(){
    $("
