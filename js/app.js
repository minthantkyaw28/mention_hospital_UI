$(document).ready(function () {
    // console.log("hoi");

    // Start header 
    // Start Banner
    // $(".carousel").carousel({
    //     Interval:1000
    // })
    // End Banner
    // End Header

    /*Start Info Section*/
    $(window).scroll(function(){
        let getscrollpoint=$(this).scrollTop();
        console.log(getscrollpoint);

        if(getscrollpoint>=220){
            $(".infotxts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        }else{
            $(".infotxts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights")
        }
    })
    /*End Info Section*/


    // Start Primeses Sction
    $("#lightslider").lightSlider({
        item: 4,
        slideMove: 1, // slidemove will be 1 if loop is true
        mode: "slide",
        auto:true,
        speed: 600, //ms'
        loop:true,
    }).play();
    // end Primeses Sction


    // Start Pricing Sction
    $(window).scroll(function(){
       let getscroll= $(this).scrollTop();
       console.log(getscroll);

       if(getscroll>=2450){
        $(".cardones").addClass("movelefts");
        $(".cardtwos").addClass("movebottoms");
        $(".cardthrees").addClass("moverights");
       }else{
        $(".cardones").removeClass("movelefts");
        $(".cardtwos").removeClass("movebottoms");
        $(".cardthrees").removeClass("moverights");
       }
    })
    // End Pricing Sction
    
    //Start Join Us section
    $("#accordion").accordion();
    //End Join Us Section
    
    //Start Footer section
    $("#getyear").text(new Date().getUTCFullYear());
    //End Footer section

    //Start Progress
    $(window).scroll(function(){
        var getprogress= $("#progresses");
        var getprogressval=$("#progressvalues");
        var getscrolltop=$(this).scrollTop();

        var getscrollheight=$(document).height();
        var getclientheight=$(window).height();

        var calcheight=getscrollheight - getclientheight;
        var getfinal=Math.round(getscrolltop*100/calcheight);
        console.log(getfinal);

        getprogressval.text(`${getfinal}%`);

        getprogress.css({
            "background":`conic-gradient(steelblue ${getfinal}%, #eee ${getfinal}%)`
        })

    });
    //End Progress 
})

//With JS
// var getscrollheight=document.documentElement.scrollHeight;
// var getclientheight=document.documentElement.clientHeight;
// var calcheight=getscrollheight - getclientheight;
// var getfinal=Math.round(getscrolltop*100/calcheight);