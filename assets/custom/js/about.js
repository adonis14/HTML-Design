 $(document).ready(function(){ 
  var type_status = null;
    var en_type_str = "Hi, I am a Andreas, a passionate <span>InteractionDesigner </span> from Berne. I'm always looking for new challanges and innotative ways to build bridges between people and technology. Leave me a message.";
    var ger_type_str = "Hallo, ich bin Andreas, ein leidenschaftlicher <span>InteractionDesigner</span> aus Bern. I'm always looking for new challanges and innotative ways to build bridges between people and technology. Leave me a message.";
    var type_str = ger_type_str;
    function changeTypeStr(){
        if(document.body.className == "ge"){
            type_str = ger_type_str;
        }else if(document.body.className == 'en'){
            type_str = en_type_str;
        }
        $('#typed_about').html(type_str);
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
    var j_height = $('#project-list-section').height();
        var filter_pos = j_height/2 + 'px';
        console.log(filter_pos);
        $('project-filter-div').css({'top':filter_pos});
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
    setprojectfilterpos();
  });
  function setprojectfilterpos(){
    var job_section_h = $('#project-list-section').height();
    var job_section_top = $('#project-list-section').offset().top;
    var job_section_bottom = $('#project-list-section').offset().top + job_section_h;
    var filter_h = $('.project-filter-div').height();
    var filter_top = $('.project-filter-div').offset().top;
    var filter_bottom = filter_top + filter_h;
    var job_div_h =  $('.project-lists-div').height();
    var job_div_top =  $('.project-lists-div').offset().top;
    var job_div_bottom = job_div_top + job_div_h;
    var joblists = $('.project-lists-div');
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
      $('.project-filter-div').css('top',h2 + 'px');
    }
    else{
      $('.project-filter-div').css('top', job_div_top - job_section_top + "px"); 
    }
  }

  // experience filter button
  $(".project-filter-img").click(function(){
    var filter_str = $(this).data("filterid");
    if($(this).hasClass('active')){
      var projects = $(".project-lists-div .card");
      var actived_filter = $(".project-filter-img.active");
      if(actived_filter){
        if(actived_filter.length == 1){
          $(".project-filter-img.active").removeClass("active");
          $(".project-lists-div .card").removeClass("active");
          var filters = $(".project-filter-img");
          for(var i=0; i < projects.length; i++) {
              projects.eq(i).addClass('active');
          }
          for(var i=0; i < filters.length; i++) {
              filters.eq(i).addClass('active');
          }
          return;
        }
      }
    }
    $(".project-filter-img.active").removeClass("active");
    $(this).addClass('active');  
    var projects = $(".project-lists-div .card");
    for(var i=0; i < projects.length; i++) {
      projects.eq(i).removeClass('active');
      if(projects.eq(i).hasClass(filter_str)){
        projects.eq(i).addClass('active');
      }
    }
  });
  $(".project-filter-img").dblclick(function(){
    $(".project-filter-img.active").removeClass("active");
    var projects = $(".project-lists-div .card");
    var filters = $(".project-filter-img");
    $(this).addClass('active');  
    for(var i=0; i < projects.length; i++) {
        projects.eq(i).addClass('active');
    }
    for(var i=0; i < filters.length; i++) {
        filters.eq(i).addClass('active');
    }
  });
  $('.hover_redbar').css("transition", "all 2s ease");
  var resizeBox = function() {
    card_h = $('.whatdo-card').height();
    card_top = $('.whatdo-card').offset().top;
    $('.what_card_hoverbar').css('top', card_h + 'px');
    card_width = $('.whatdo-card').width();
    var aa = $('.whatdo-card:first').offset().left;
    $('.hover_redbar').offset({'left' : aa + card_width/2 - 30 });
       /* $('#jq').css({width: $(window).width(), height: $(window).height()});*/
  };
  resizeBox();
  $(window).resize(resizeBox);
  $(".whatdo-card").hover(function(){
      $(".whatdo_background").addClass('active_back');
      var background = "assets/images/whatido_images/";
      $(".whatdo-card.active").removeClass("active");
      $(this).addClass('active'); 
      var img_id = $(this).data("backimg");
      card_left = $(this).offset().left;
      background = background + img_id;
      red_l = $('.hover_redbar').offset().left;
       card_width = $('.whatdo-card').width();
      moveredbar(red_l, card_left+ card_width/2 - 20);
      $(".whatdo_background").css("background-image", "url("+background+")");
  });
  $(".whatdo-card").mouseleave(function(){
      $(".whatdo_background").removeClass('active_back');
  });
  function moveredbar(start_p, end_p){
      $('.hover_redbar').offset({'left' : end_p});
  }



});