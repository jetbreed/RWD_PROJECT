    $(document).ready(function(){
        $("p").click(function(){
            // The action
            $("p").hide();
        });

        $("#b0").click(function(){
            // The action
            $("p#p2").hide();
        });
        
        $("#b01").click(function(){
            // The action
            $("p#p2").show();
        });
        
        $("#b1").click(function(){
            // fadeOut();
            $("#d1").fadeOut(1000);
        });                
        
        $("#b2").click(function(){
            // fadeIn();
            $("#d1").fadeIn();
        });                
        
        $("#b3").click(function(){
            // fadeIn();
            $("#d1").fadeToggle();
        });                
        
        $("#b4").click(function(){
            // fadeIn();
            $("#d1").fadeTo("slow", 0.40);
        });                
    });
