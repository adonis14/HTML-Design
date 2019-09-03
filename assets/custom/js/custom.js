$(document).ready(function(){
  $(".down-to-buttom").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
  //to select the language flag button
  $(".select-language").click(function(){

    $(".select-language.active").removeClass("active");
    $(this).addClass('active');  
    if($(this).data('lang') == "ge"){
      document.body.className = 'ge';
    }else{
      document.body.className = "en";
    } 
  });
  $('#see-more-info').click(function(){
    url = $(this).find("a").attr('href');
    window.location.href = url;
  });
});