 $(document).ready(function(){ 
   document.body.className = 'ge';
        var slider_comments =  ['UI for Kunsthaus Zurich',
                                'AWY',
                                'Gesture-controlled light system'];
        var type_status = null;
        var en_type_str = "Hi, <span>I</span> create digital <span>experiences.</span>";
        var ger_type_str = "Hi, <span>Ich</span> erschaffe <br>digitale <span>Erfahrungen.</span>";
        var type_str = ger_type_str;

        function changeTypeStr(){
            if(type_status){
              $("#typed").empty();
            
              $('.typed-cursor').remove();
              type_status.stop();
              type_status = null;
            }
            if(document.body.className == "ge"){
              type_str = ger_type_str;
            }else if(document.body.className == 'en'){
              type_str = en_type_str;
            }
            type_status = new Typed('#typed', {
                strings: [type_str],
                typeSpeed: 100,
                backSpeed: 0,
                fadeOut: true,
                loop: true
            });
          
        }
        changeTypeStr();
        $(".select-language").click(function(){
            $(".select-language.active").removeClass("active");
            $(this).addClass('active');  
            if($(this).data('lang') == "ge"){
              document.body.className = 'ge';
            }else{
              document.body.className = "en";
            } 
            changeTypeStr();
        });
        var $item = $('.carousel-item');
        function showSlider(){
            var $numberofSlides = $('.carousel-item').length;
            var $currentSlide = Math.floor((Math.random() * $numberofSlides));
            $('.carousel-indicators li').each(function(){
              var $slideValue = $(this).attr('data-slide-to');
              if($currentSlide == $slideValue) {
                $(this).addClass('active');
                $item.eq($slideValue).addClass('active');
              } else {
                $(this).removeClass('active');
                $item.eq($slideValue).removeClass('active');
              }
              $('.slider_commnet_span').text(slider_comments[$currentSlide]);                
            });
        } 
        setInterval(showSlider, 3000); 
        var j_height = $('#job-list-section').height();
        var filter_pos = j_height/2 + "px";
        console.log(filter_pos);
        $('job-filter-div').css('top',filter_pos);
  //to filter list vertical middle;
  function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      if(((elemTop < docViewTop) && (elemBottom > docViewTop)) ||
      ((elemTop > docViewTop) && (elemTop  < docViewBottom))){
        return true;
      } else {
        return false;
      }
      
  }
  $(window).scroll(function(){
    setjobfilterpos();
  });
  function setjobfilterpos(){
    var job_section_h = $('#job-list-section').height();
    var job_section_top = $('#job-list-section').offset().top;
    var job_section_bottom = $('#job-list-section').offset().top + job_section_h;
    var filter_h = $('.job-filter-div').height();
    var filter_top = $('.job-filter-div').offset().top;
    var filter_bottom = filter_top + filter_h;
    var job_div_h =  $('.job-lists-div').height();
    var job_div_top =  $('.job-lists-div').offset().top;
    var job_div_bottom = job_div_top + job_div_h;
    var joblists = $('.job-lists-div');
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var h1 = 0;
    var h2 = 0;
    if(isScrolledIntoView(joblists)){
      if(job_div_top < docViewTop){
        if(job_div_bottom < docViewBottom){
          h1 = (job_div_bottom - docViewTop) / 2;
          h2 = (job_div_bottom - job_section_top) - h1;
          if((h2 + docViewTop + filter_h) > job_div_bottom){
            h2 = job_div_bottom - job_section_top - filter_h;
          }
          
        }else {
          h2 = docViewBottom - $(window).height()/2 - job_section_top - filter_h/2;
        }
      }else {
        if(job_div_bottom < docViewBottom){
          h2 = job_div_bottom - job_div_h/2 -job_section_top - filter_h/2;
        }else {
          h2 = job_div_top + (docViewBottom - job_div_top)/2 - job_section_top;
        }
      }
      $('.job-filter-div').css('top',h2 + 'px');
    }
    else{
      $('.job-filter-div').css('top', job_div_top - job_section_top + "px"); 
    }
  }
  
  // job filter button
  $(".job-filter-img").click(function(){
    var filter_str = $(this).data("filterid");
    if($(this).hasClass('active')){
      var jobs = $(".job-lists li");
      var actived_filter = $(".job-filter-img.active");
      if(actived_filter){
        if(actived_filter.length == 1){
          $(".job-filter-img.active").removeClass("active");
          var filters = $(".job-filter-img");
          for(var i=0; i < jobs.length; i++) {
              jobs.eq(i).addClass('active');
          }
          for(var i=0; i < filters.length; i++) {
              filters.eq(i).addClass('active');
          }
          //$(".job-lists li").removeClass('active');
          return;
        }
      }
    }
    $(".job-filter-img.active").removeClass("active");
    $(this).addClass('active');  
    var jobs = $(".job-lists li");
    for(var i=0; i < jobs.length; i++) {
      jobs.eq(i).removeClass('active');
      if(jobs.eq(i).hasClass(filter_str)){
        jobs.eq(i).addClass('active');
      }
    }
  });
  $(".job-filter-img").dblclick(function(){
    $(".job-filter-img.active").removeClass("active");
    var jobs = $(".job-lists li");
    var filters = $(".job-filter-img");
    $(this).addClass('active');  
    for(var i=0; i < jobs.length; i++) {
        jobs.eq(i).addClass('active');
    }
    for(var i=0; i < filters.length; i++) {
        filters.eq(i).addClass('active');
    }
  });
  $(".job-comment-body").dblclick(function(){
    window.location.href = 'project.html';
  })
});