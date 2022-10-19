$.fn.equalHeights = function(){
	var max_height = 0;
	$(this).each(function(){
		max_height = Math.max($(this).height(), max_height);
	});
	$(this).each(function(){
		$(this).height(max_height);
	});
};

$(document).ready(function(){
    $('.drain-cleaning-service').equalHeights();
});
$(document).resize(function(){
    $('.drain-cleaning-service').equalHeights();
});
