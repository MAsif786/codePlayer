var htmlActive = 1, cssActive = -1, jsActive = -1, outputActive = 1, forkActive = 1, totalActive = 2;
$("#css-container").css("display", "none");
$("#js-container").css("display", "none");
$("#html-tb").addClass("tb-active");
$("#output-tb").addClass("tb-active");
$("#fork-tb").addClass("tb-active");
updateIframe();

$("#html-tb").click(function(){
    htmlActive *= -1;

    if (htmlActive == -1){
        $("#html-container").css("display", "none");
        $("#html-tb").removeClass("tb-active");
        totalActive--;
    } else {
        $("#html-container").css("display", "block");
        $("#html-tb").addClass("tb-active");
        totalActive++;
    }

    resizeContent();
});

$("#css-tb").click(function(){
    cssActive *= -1;

    if (cssActive == -1){
        $("#css-container").css("display", "none");
        $("#css-tb").removeClass("tb-active");
        totalActive--;
    } else {
        $("#css-container").css("display", "block");
        $("#css-tb").addClass("tb-active");
        totalActive++;
    }

    resizeContent();
});

$("#js-tb").click(function(){
    jsActive *= -1;

    if (jsActive == -1){
        $("#js-container").css("display", "none");
        $("#js-tb").removeClass("tb-active");
        totalActive--;
    } else {
        $("#js-container").css("display", "block");
        $("#js-tb").addClass("tb-active");
        totalActive++;
    }

    resizeContent();
});

$("#output-tb").click(function(){
    outputActive *= -1;

    if (outputActive == -1){
        $("#output-container").css("display", "none");
        $("#output-tb").removeClass("tb-active");
        totalActive--;
    } else {
        $("#output-container").css("display", "block");
        $("#output-tb").addClass("tb-active");
        totalActive++;
    }

    resizeContent();
});

$("#fork-tb").click(function(){
    outputActive *= -1;

    if (outputActive == -1){
        $("#fork-me").fadeOut();
        $("#fork-tb").removeClass("tb-active");
    } else {
        $("#fork-me").fadeIn();
        $("#fork-tb").addClass("tb-active");
    }

    resizeContent();
});

function resizeContent(){

    $(".container").css({
        marginTop: $("#header").height() + parseInt($("textarea")
        .css("margin-top").replace("px", "")) + "px",

        height: window.innerHeight - $("#header").height() + "px"
    });

    $(".container").css("width", 100/totalActive + "%");

    $("iframe").height(window.innerHeight - $("#header").height());
}

resizeContent();

$("textarea").on("change keyup paste", function(){
    updateIframe()
});

function updateIframe(){

    var innerBODY = $("#html-container textarea").val();
    var innerHEAD = "<style type='text/css'>" + $("#css-container textarea").val(); + "<\/style>";
        $("iframe").contents().find("html").html(innerBODY);
        $("iframe").contents().find("head").html(innerHEAD);

    document.getElementById("iframe").contentWindow.eval($("#js-container textarea").val());
}

$(window).resize(function(){
    resizeContent();
})