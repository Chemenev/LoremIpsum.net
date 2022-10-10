$(function () {
	//BEGIN
	$(".accordion__title").on("click", function (e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("show")) {
			$(".accordion__body").slideUp(400);
			$(".accordion__title").removeClass("show");
			/*$('.accordion__arrow').removeClass('accordion__rotate');*/
		}

		$this.toggleClass("show");
		$this.next().slideToggle();
		/*$('.accordion__arrow', this).toggleClass('accordion__rotate');*/
	});
	//END
});

