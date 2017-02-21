// DOcument ready.
// DOnt start runnning any stuff inside this js file , until the document is ready for  u to recieve it

$(document).ready(function() {
		$('.js-like').on('click',function(event){
				event.preventDefault();

				$(this).text('liked')
				.closest('.news-item') 
				.addClass('is-liked');

				// by closest  jquery will keep going upwards untill it finds the first class
		});

		$('.js-add-link').on('click',function(event){
			event.preventDefault();

			$('.js-form').toggleClass('is-visible');


		});

		$('.js-show-modal').on('click',function(event){
			event.preventDefault();

			$('.js-modal').addClass('is-visible');
			$('.js-modal-overlay').addClass('is-visible');


		});

		$('.js-modal-overlay').on('click',function(event){

			$('.js-modal').removeClass('is-visible');
			$('.js-modal-overlay').removeClass('is-visible');

		});

});