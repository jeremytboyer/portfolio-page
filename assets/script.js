$('.nav-link').on('click', function(){
    $(this).addClass("active").parent().siblings().find(".nav-link").removeClass("active");
    
})
