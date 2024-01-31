$(document).ready (function(){

// For  sticky position

$(".js--services-section").waypoint(function(direction){
    if(direction=="down"){
        $("nav").addClass("sticky")
    }
    else{
        $("nav").removeClass("sticky")
    }

});



    // miixitup for [portfolio section]
    var mixer = mixitup(".container");
   
        
    });
