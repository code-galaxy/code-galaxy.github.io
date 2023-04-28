
$("[class*=sup]").show();
$("[class*=sub]").show();
$("[class*=btn]").hide();


$(".game").click(function(){
    $("[class^=sup]").show();
    $(this).css("color","#111");
    $("[class*=btn]").show();
});

$(".sup_sport").click(function(){
    $("[class*=esport_e]").hide();
    $("[class*=sup_esport]").hide();
    $("[class*=sport_f]").show();
    $(this).
