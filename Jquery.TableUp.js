 (function ($) {
        $.fn.extend({
        	TableUp: function (TitleUpFxElement) {
        		TitleUpFxElement=TitleUpFxElement||"";
        		$(this).find(' tbody tr:has(th)').prepend("<th>"+TitleUpFxElement+"</th>");
		  $('table tbody tr:not(:has(th))').each(function () {
		  	$(this).prepend("<a class='btnUp' href='javascript:void(0)'><img class='kImage' alt='Move Task Up' src='../img/go-up.png'></a><a href='javascript:void(0)'><img class='linkImage' alt='Delete Task' src='../img//trash.png'></a>");
		  });
$('.kImage').on('click',function(){
	console.log(this);
	var $actualToUp = $(this).parent().parent();
        var $TaskToDown = $actualToUp.prev();
        console.log($TaskToDown);
        if ($TaskToDown.find("th").length<1) {
            $actualToUp.fadeOut('slow', function () {
                $actualToUp.after($TaskToDown);
                $TaskToDown.css('opacity', '0');
                $actualToUp.hide();
                $actualToUp.fadeIn('5000', function () {
                    $TaskToDown.removeAttr("style");
                    $TaskToDown.hide();
                    $TaskToDown.fadeIn('5000');
                });
            });
         
        }
        return false;
});
$('.linkImage').on('click',function(){
	  $(this).parent().parent().fadeOut('slow', function () {
            $(this).remove();
        });
        return false;
});
        }
        });
    })(jQuery)
