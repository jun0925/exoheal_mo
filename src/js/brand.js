$(function(){

    //brand03 Swiper
    var brand03Swiper = new Swiper("#brand03Swiper",{
        slidesPerView:  "auto",
        loop: true,
        /*autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },*/
        speed: 1300
    });

    // brand 02
    var $brand02Tab = $("#tabCont1 a");
    contActive($brand02Tab);

    $(".b02-tab").on("click",function(){
        $(this).addClass("choice");
        $(".b02-tab").not($(this)).removeClass("choice");

        switch($(this).index()){
            case 0:
                $("#tabCont2").stop().fadeOut(300,function(){
                    $("#tabCont1").stop().fadeIn(300);
                });
                break;
            
            case 1:
                $("#tabCont1").stop().fadeOut(300,function(){
                    $("#tabCont2").stop().fadeIn(300);
                });
                break;
        }
    });

    // brand 03
    var $brand03Tab = $(".b03-tab");
    contActive($brand03Tab);

    // brand 06
    var $brand06Tab = $(".b06-tab");
    contActive($brand06Tab);

    var videoPopup = document.getElementById("videoPopup");
    var videoPopupBox = document.getElementById("videoPopupBox");
    var iframeCont = document.querySelector(".video-popup-box > .video-wrap > iframe");
    var htmlBody = document.querySelector("html,body");

    $("#videoPopupBox > .close-btn").on("click",videoClose);
    $("#videoPopup").on("click",videoClose);
    $("#videoPopupBox").on("click",function(e){
        e.stopPropagation();
    });
    
    function videoOpen(url) {
        videoPopup.style.display = "block";
        htmlBody.style.overflowY = "hidden";
        setTimeout(function () {
            videoPopupBox.classList.add("show");
            iframeCont.setAttribute("src", url);
            video.play();
        }, 50);
    }
    
    function videoClose() {
        iframeCont.setAttribute("src", " ");
        htmlBody.style.overflowY = "auto";
        videoPopupBox.classList.remove("show");
        setTimeout(function () {
            videoPopup.style.display = "none";
            //videoPlayBtn.classList.remove("hide");
        }, 500);
    }
});

function contActive(tabBtn) {
    tabBtn.on("click", function () {
        var choiceClass = "choice";
        $(this).addClass(choiceClass);
        tabBtn.not($(this)).removeClass(choiceClass);

        var $cont = [$(".b02-cont1"), $(".b02-cont2"), $(".b02-cont3"), $(".b02-cont4"),$(".b02-cont5"),$(".b02-cont6"),$(".b02-cont7"),$(".b02-cont8"),$(".b02-cont9"),$(".b02-cont10")];
        var $tabIndex = $(this).parent().index();

        $(".cont").css("display", "none").removeClass("cont-show");
        $cont[$tabIndex].css("display", "block");
        setTimeout(function () {
            $cont[$tabIndex].addClass("cont-show");
        }, 200);
    });
}