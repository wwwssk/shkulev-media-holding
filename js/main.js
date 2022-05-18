/* --------------------------------add-class------------------------------- */
	const burger = document.querySelector('.menu-header__icon');

	burger.addEventListener("click", function(e) {
		burger.classList.toggle('active')
	});
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
	
		/* --------events------------------events-----------------------events---------------------- */

		/* ---------------------events-swiper------------------------ */
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

		/* ---------------------events-filter----------------------- */
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
						that.fadeIn(600);
					}, 0);
				} else {
					var that = $(this);

					setTimeout(function () {
						that.hide(600);
					}, 0);
				}
			});
		}


		/* --------projects-----------------projects----------------------projects----------------- */


		/* ---------------------------------project-filter------------------------------------- */

/* desktop */
	var initial_items_desktop = 6;
	var next_items_desktop = 2;
	var $projectsItems_desktop = $('#projects__items-desktop').isotope({
		itemSelector: '.projects__item-desktop',
		layoutMode: 'fitRows',
		fitRows: {
			gutter: 0
		}
	});


	$('.projects__filter-btns-desktop').on('click', '.projects__filter-btn-desktop', function () {
		var filterValue = $(this).attr('data-filter');
		$projectsItems_desktop.isotope({ filter: filterValue });
		updateFilterCounts_desktop();
	});
	function updateFilterCounts_desktop() {
		var itemElems = $projectsItems_desktop.isotope('getFilteredItemElements');
		var count_items = $(itemElems).length;

		if (count_items > initial_items_desktop) {
			$('#projects__btn-plus').show();
		}
		else {
			$('#projects__btn-plus').hide();
		}
		if ($('.projects__item-desktop').hasClass('visible_item')) {
			$('.projects__item-desktop').removeClass('visible_item');
		}
		var index = 0;

		$(itemElems).each(function () {
			if (index >= initial_items_desktop) {
				$(this).addClass('visible_item');
			}
			index++;
		});
		$projectsItems_desktop.isotope('layout');
	}

	$('.projects__filter-btn-desktop').each(function (i, projectsFilterBtnGroup) {
		var $projectsFilterBtnGroup = $(projectsFilterBtnGroup);
		$projectsFilterBtnGroup.on('click', '.projects__filter-btn-desktop', function () {
			$projectsFilterBtnGroup.find('.active').removeClass('active');
			$(this).addClass('active');
		});
	});

	function showNextItems_desktop(pagination) {
		var itemsMax = $('.visible_item').length;
		var itemsCount = 0;
		$('.visible_item').each(function () {
			if (itemsCount < pagination) {
				$(this).removeClass('visible_item');
				itemsCount++;
			}
		});
		if (itemsCount >= itemsMax) {
			$('#projects__btn-plus').hide(300);
		}
		$projectsItems_desktop.isotope('layout');
	}

	function hideItems_desktop(pagination) {
		var itemsMax = $('.projects__item-desktop').length;
		var itemsCount = 0;
		$('.projects__item-desktop').each(function () {
			if (itemsCount >= pagination) {
				$(this).addClass('visible_item');
			}
			itemsCount++;
		});
		if (itemsCount < itemsMax || initial_items_desktop >= itemsMax) {
			$('#projects__btn-plus').hide(300);
		}
		$projectsItems_desktop.isotope('layout');
	}
	$('#projects__btn-plus').on('click', function (e) {
		e.preventDefault();
		showNextItems_desktop(next_items_desktop);
	});
	hideItems_desktop(initial_items_desktop);



/* mobile */
	var initial_items_mobile = 3;
	var next_items_mobile = 2;
	var $projectsItems_mobile = $('#projects__items-mobile').isotope({
		itemSelector: '.projects__item-mobile',
		layoutMode: 'fitRows',
		fitRows: {
			gutter: 0
		}
	});


	$('.projects__filter-btns-mobile').on('click', '.projects__filter-btn-mobile', function () {
		var filterValue = $(this).attr('data-filter');
		$projectsItems_mobile.isotope({ filter: filterValue });
		updateFilterCounts_mobile();
	});
	function updateFilterCounts_mobile() {
		var itemElems = $projectsItems_mobile.isotope('getFilteredItemElements');
		var count_items = $(itemElems).length;

		if (count_items > initial_items_mobile) {
			$('#projects__btn-plus').show();
		}
		else {
			$('#projects__btn-plus').hide();
		}
		if ($('.projects__item-mobile').hasClass('visible_item')) {
			$('.projects__item-mobile').removeClass('visible_item');
		}
		var index = 0;

		$(itemElems).each(function () {
			if (index >= initial_items_mobile) {
				$(this).addClass('visible_item');
			}
			index++;
		});
		$projectsItems_mobile.isotope('layout');
	}

	$('.projects__filter-btn-mobile').each(function (i, projectsFilterBtnGroup) {
		var $projectsFilterBtnGroup = $(projectsFilterBtnGroup);
		$projectsFilterBtnGroup.on('click', '.projects__filter-btn-mobile', function () {
			$projectsFilterBtnGroup.find('.active').removeClass('active');
			$(this).addClass('active');
		});
	});

	function showNextItems_mobile(pagination) {
		var itemsMax = $('.visible_item').length;
		var itemsCount = 0;
		$('.visible_item').each(function () {
			if (itemsCount < pagination) {
				$(this).removeClass('visible_item');
				itemsCount++;
			}
		});
		if (itemsCount >= itemsMax) {
			$('#projects__btn-plus').hide(300);
		}
		$projectsItems_mobile.isotope('layout');
	}

	function hideItems_mobile(pagination) {
		var itemsMax = $('.projects__item-mobile').length;
		var itemsCount = 0;
		$('.projects__item-mobile').each(function () {
			if (itemsCount >= pagination) {
				$(this).addClass('visible_item');
			}
			itemsCount++;
		});
		if (itemsCount < itemsMax || initial_items_mobile >= itemsMax) {
			$('#projects__btn-plus').hide(300);
		}
		$projectsItems_mobile.isotope('layout');
	}
	$('#projects__btn-plus').on('click', function (e) {
		e.preventDefault();
		showNextItems_mobile(next_items_mobile);
	});
	hideItems_mobile(initial_items_mobile);










		





		/* ----------history-----------------history--------------------history--------------------- */
		var swiper = new Swiper(".history__swiper", {
			slidesPerView: 1,
			spaceBetween: 80,
			navigation: {
				prevEl: ".history__swiper-btn-prev",
				nextEl: ".history__swiper-btn-next",
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



		/* ----------spec-projects-----------------spec-projects--------------------spec-projects--------------------- */
		var swiper = new Swiper(".spec-projects__swiper", {
			slidesPerView: 'auto',
			navigation: {
				prevEl: ".spec-projects__swiper-btn-prev",
				nextEl: ".spec-projects__swiper-btn-next",
			},
		});



/* ----------------------project-page---------------------------project-page---------------------------project-page-------------------- */

		/* ---------------------elle-events__swiper------------------------ */
		var swiper = new Swiper(".elle-events__swiper", {
			slidesPerView: 'auto',
			spaceBetween: 80,
			navigation: {
				prevEl: ".elle-events__swiper-btn-prev",
				nextEl: ".elle-events__swiper-btn-next",
			},
		});



		/* ----------------------------news-------------------------------------------- */
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