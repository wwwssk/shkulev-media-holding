/* ---------------------------прокрутка при клике------------------------------- */
	$('.click').on('click', function() {

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 700,
			easing: "linear"
		});

		return false;
	});

/* ---------------------появление элементов при прокрутке--------------------------- */
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('active');
		}
	});
}
let options = {
	threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.show');
for (let elm of elements) {
	observer.observe(elm);
}













/* ------------main----------------------------main------------------------main---------------------main-------------------- */
			

			//events
						//events-filter
							const eventsFilterBtns = $('.events__filter-btns');
							const eventsSwiperItems = $('.events__swiper-item');
							const eventsFilterBtn = $('.events__filter-btn');
							function eventsFilter() {
								eventsFilterBtns.on("click", event => {
									const targetId = event.target.getAttribute('data-id')
									const target = $(event.target)
								
									if (target.hasClass('events__filter-btn')) {
										eventsFilterBtn.each(function () {
											$(this).removeClass('active');
										})
										target.addClass('active')
									}
								
									switch (targetId) {
										case 'all':
											getEventsItems('events__swiper-item')
											break;
										case 'events-new':
											getEventsItems(targetId)
											break;
										case 'events-meeting':
											getEventsItems(targetId)
											break;
									}
								});
							}
							eventsFilter()
							function getEventsItems(className) {
								eventsSwiperItems.each(function (index, item) {
									if ($(this).hasClass(className)) {
										var that = $(this);
									
										setTimeout(function () {
											that.show(400);
										}, 0);
									} else {
										var that = $(this);
									
										setTimeout(function () {
											that.hide(400);
										}, 430);
									}
								});
							}
						//events-swiper
							var swiper = new Swiper(".events__swiper", {
								slidesPerView: 'auto',
								spaceBetween: 24,
								navigation: {
									prevEl: ".events__swiper-btn-prev",
									nextEl: ".events__swiper-btn-next",
								},
								breakpoints: {
									769: {
										slidesPerView: 3,
										spaceBetween: 24,
									},
									1024: {
										slidesPerView: 4,
										spaceBetween: 80,
									},
								},
							});

			//projects
						//project-filter
							/* desktop */
								const windowInnerWidth = window.innerWidth;
								if (windowInnerWidth < 769) {
									var project_initial_items_desktop = 3;
								} else {
									var project_initial_items_desktop = 6;
								}
								var project_next_items_desktop = 2;
								var $projects__items_desktop = $('#projects__items-desktop').isotope({
									itemSelector: '.projects__item-desktop',
									layoutMode: 'masonry',
									stamp: '.projects__item-desktop--static'
								});

								$('.projects__filter-btns-desktop').on('click', 'button', function () {
									var project_desktop_value = $(this).attr('data-filter');
									$projects__items_desktop.isotope({filter: project_desktop_value});
									project_updateFilterCounts_desktop();
								});
								function project_updateFilterCounts_desktop() {
									var itemElems_project_desktop = $projects__items_desktop.isotope('getFilteredItemElements');
									var count_items_project_desktop = $(itemElems_project_desktop).length;
								
									if (count_items_project_desktop > project_initial_items_desktop) {
										$('#projects__btn-plus-desktop').show();
									}
									else {
										$('#projects__btn-plus-desktop').hide();
									}
									if ($('.projects__item-desktop').hasClass('visible_item')) {
										$('.projects__item-desktop').removeClass('visible_item');
									}
									var index = 0;
										$(itemElems_project_desktop).each(function () {
										if (index >= project_initial_items_desktop) {
											$(this).addClass('visible_item');
										}
										index++;
									});
									$projects__items_desktop.isotope('layout');
								}
								$('.projects__filter-btns-desktop').each(function (i, buttonGroup) {
									var $buttonGroup = $(buttonGroup);
									$buttonGroup.on('click', 'button', function () {
										$buttonGroup.find('.active').removeClass('active');
										$(this).addClass('active');
									});
								});

								function project_showNextItems_desktop(pagination) {
									var itemsMax_project_desktop = $('.visible_item').length;
									var itemsCount = 0;
									$('.visible_item').each(function () {
										if (itemsCount < pagination) {
											$(this).removeClass('visible_item');
											itemsCount++;
										}
									});
									if (itemsCount >= itemsMax_project_desktop) {
										$('#projects__btn-plus-desktop').hide();
									}
									$projects__items_desktop.isotope('layout');
								}
								function project_hideItems_desktop(pagination) {
									var itemsMax_project_desktop = $('.projects__item-desktop').length;
									var itemsCount = 0;
									$('.projects__item-desktop').each(function () {
										if (itemsCount >= pagination) {
											$(this).addClass('visible_item');
										}
										itemsCount++;
									});
									if (itemsCount < itemsMax_project_desktop || project_initial_items_desktop >= itemsMax_project_desktop) {
										$('#projects__btn-plus-desktop').hide();
									}
									$projects__items_desktop.isotope('layout');
								}
								$('#projects__btn-plus-desktop').on('click', function (e) {
									e.preventDefault();
									project_showNextItems_desktop(project_next_items_desktop);
								});
								project_hideItems_desktop(project_initial_items_desktop);


			//history
						//history-swiper
							var swiper = new Swiper(".main-history__swiper", {
								slidesPerView: 1,
								spaceBetween: 80,
								navigation: {
									prevEl: ".main-history__swiper-btn-prev",
									nextEl: ".main-history__swiper-btn-next",
								},
								breakpoints: {
									769: {
										slidesPerView: 3,
										spaceBetween: 40,
									},
									1200: {
										slidesPerView: 4,
										spaceBetween: 80,
									},
								},
							});


			//spec-projects
						//spec-projects-swiper
							var swiper = new Swiper(".spec-projects__swiper-main", {
								slidesPerView: 'auto',
								navigation: {
									prevEl: ".spec-projects__swiper-btn-prev",
									nextEl: ".spec-projects__swiper-btn-next",
								},
								breakpoints: {
									769: {
										slidesPerView: 3
									}
								}
							});



/* ----------------------project-page---------------------------project-page---------------------------project-page-------------------- */
			//elle-events__swiper
							var swiper = new Swiper(".elle-events__swiper", {
								slidesPerView: '3',
								spaceBetween: 80,
								navigation: {
									prevEl: ".elle-events__swiper-btn-prev",
									nextEl: ".elle-events__swiper-btn-next",
								},
							});



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








/* sgp--------------------------sgp------------------------------sgp */
$('.item-sgp__btn-plus').click(function () {
	$('.item-sgp-hidden:hidden').eq(0).show(600);
	$('.item-sgp-hidden:hidden').length < 1 ? $('button.item-sgp__btn-plus').hide() : false;
});