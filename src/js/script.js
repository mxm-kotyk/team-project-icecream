// $(document).ready(function () {
// 	$('.slider').slick();
// });


$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		// slidesToShow:3,
		// autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});