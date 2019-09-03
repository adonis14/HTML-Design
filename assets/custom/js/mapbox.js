$(document).ready(function(){
	

	var add_html = $('.project_temp_list').html();
	Berne= ["7.458583", "46.939413"]
	Zurich= ["8.531535", "47.368968"]
	Emmen= ["8.298845", "47.046107"] 
	cur_loc = Berne;
	before_loc = Berne;
	var map;
	mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kb2JvIiwiYSI6ImNqZ3l1b3U0NzA1ODMzM213aWt6bXk1NDMifQ.vJ5PaWmK5Hre4zXmrFyKJw';
	var map = new mapboxgl.Map({
		      container: 'mapbox_div',
		      style: 'mapbox://styles/andobo/cjj012i0z054z2rnu6r3euwfh',
		      center:  cur_loc,
		      zoom: 12,
		      attributionControl: false
		    });
	map.scrollZoom.disable();
    $(".project-lists-div .card").hover(function(){
    	var location = $(this).data('local');
    	if(location == "berne") {
    		cur_loc = Berne;
    	}else if(location == "zurich") {
    		cur_loc = Zurich;
    	} else if(location == "emmen") {
    		cur_loc = Emmen;
    	}
    	if(before_loc!=cur_loc){
    		map = new mapboxgl.Map({
		      container: 'mapbox_div',
		      style: 'mapbox://styles/andobo/cjj012i0z054z2rnu6r3euwfh',
		      center:  cur_loc,
		      zoom: 12,
		      attributionControl: false
		    });
		    map.scrollZoom.disable();
		    before_loc = cur_loc;
    	}
    });   
});