// section 1 of jquery(toggle)
$(document).ready(function(){
    $("#d1").click(function(){
        $(".d2").toggle()

    });
    $("#dev1").click(function(){
        $(".dev2").toggle()
    });
    $("#prd1").click(function(){
        $(".prd2").toggle()
    });

});

// portfolio overlay

$(document).ready(function(){
    $("#over").hover(function(){
      $("#overlay1").animate({opacity:1},60)  
    },
    function (){
        $("#overlay1").animate({opacity:0},50)
    });

    $("#over1").hover(function(){
        $("#overlay2").animate({opacity:1},60)  
      },
      function (){
          $("#overlay2").animate({opacity:0},50)
      });
      $("#over2").hover(function(){
        $("#overlay3").animate({opacity:1},60)  
      },
      function (){
          $("#overlay3").animate({opacity:0},50)
      });
      $("#over3").hover(function(){
        $("#overlay4").animate({opacity:1},60)  
      },
      function (){
          $("#overlay4").animate({opacity:0},50)
      });
      $("#over4").hover(function(){
        $("#overlay5").animate({opacity:1},60)  
      },
      function (){
          $("#overlay5").animate({opacity:0},50)
      });
      $("#over5").hover(function(){
        $("#overlay6").animate({opacity:1},60)  
      },
      function (){
          $("#overlay6").animate({opacity:0},50)
      });
      $("#over6").hover(function(){
        $("#overlay7").animate({opacity:1},60)  
      },
      function (){
          $("#overlay7").animate({opacity:0},50)
      });
      $("#over7").hover(function(){
        $("#overlay8").animate({opacity:1},60)  
      },
      function (){
          $("#overlay8").animate({opacity:0},50)
      });
})