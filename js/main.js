


/* ---------news-------------------news--------------------------news------------------ */
							var newsProjects = $('.news__row').isotope({
								itemSelector: '.news__item',
							});
							var newsFilterFns = {};

							$('.news__btns-filter').on('click', '.news__btn-filter', function () {
								var newsFilterValue = $(this).attr('news-data-filter');
								newsFilterValue = newsFilterFns[newsFilterValue] || newsFilterValue;
								newsProjects.isotope({ filter: newsFilterValue });
							});
							$('.news__btns-filter').each(function (i, newsButtonGroup) {
								var $newsButtonGroup = $(newsButtonGroup);
								$newsButtonGroup.on('click', '.news__btn-filter', function () {
									$newsButtonGroup.find('.active').removeClass('active');
									$(this).addClass('active');
								});
							});


/* ------------------career--------------------------career------------------------career------ */
							var swiper = new Swiper(".tell-us-career__swiper", {
								spaceBetween: 40,
								allowTouchMove: false,
								pagination: {
									el: ".tell-us-career__pagination",
									clickable: true,
								},
							});
						
							const careerClickBtn = document.querySelector('.tell-us-career__personal-information--click');
							careerClickBtn.addEventListener("click", function(e) {
								careerClickBtn.classList.toggle('active')
							});



















