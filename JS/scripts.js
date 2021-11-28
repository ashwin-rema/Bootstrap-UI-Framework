 //code for carousel button

 $(document).ready(function(){

    $("#reserveTable").click(function(){
        $('#reserveModal').modal('toggle');

    });

    
    $("#closeButton").click(function(){
        $('#reserveModal').modal('hide');
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal('toggle');
    });

    $("#logoutButton").click(function(){
        $("#loginModal").modal('hide');
    });

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $('#mycarousel').carousel({ interval : 2000 });
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

    
});