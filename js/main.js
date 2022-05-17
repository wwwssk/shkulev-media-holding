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
				768: {
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
					$(this).addClass('active-f').show(500);
				} else {
					$(this).removeClass('active-f').hide(500);
				}
			});
		}



		/* --------projects-----------------projects----------------------projects----------------- */

		/* ---------------------------project-clickAdd---------------------------------- */
		/* $('.projects__btn-plus').click(function () {
			$('.projects__item-hidden:hidden').eq(0).show(500);
			$('.projects__item-hidden:hidden').length < 1 ? $('button.projects__btn-plus').hide() : false;
		}); */

		/* ---------------------------------project-filter------------------------------------- */
/* 		const projectsFilterBtns = $('.projects__filter-btns');
		const projectsItems = $('.projects__item');
		const projectsFilterBtn = $('.projects__filter-btn');

		function projectsFilter() {
			projectsFilterBtns.on("click", event => {
				const targetId = event.target.getAttribute('data-id')
				const target = $(event.target)

				if (target.hasClass('projects__filter-btn')) {
					projectsFilterBtn.each(function () {
						$(this).removeClass('active');
					})
					target.addClass('active')
				}

				switch (targetId) {
					case 'all':
						getProjectsItems('projects__item')
						break;
					case 'projects-digital':
						getProjectsItems(targetId)
						break;
					case 'projects-print':
						getProjectsItems(targetId)
						break;
				}
			});
		}
		projectsFilter()

		function getProjectsItems(className) {
			projectsItems.each(function (index, item) {
				if ($(this).hasClass(className)) {
					$(this).addClass('active-f').fadeIn(500);
				} else {
					$(this).removeClass('active-f').fadeOut(500);
				}
			});
		}
 */



		/* var $projects = $('.projects__items').isotope({
			itemSelector: '.projects__item',
		});
		var filterFns = {};
		
		$('#projects__filter-btns').on('click', '.projects__filter-btn', function () {
			var projectsFilterValue = $(this).attr('projects-data-filter');
			projectsFilterValue = filterFns[projectsFilterValue] || projectsFilterValue;
			$projects.isotope({ filter: projectsFilterValue });
		});


		$('#projects__filter-btns').each(function (i, projectsButtonGroup) {
			var $projectsButtonGroup = $(projectsButtonGroup);
			$projectsButtonGroup.on('click', '.projects__filter-btn', function () {
				$projectsButtonGroup.find('.active').removeClass('active');
				$(this).addClass('active');
			});
		}); */

		var initial_items = 6;
		var next_items = 2;
		var $projectsItems = $('#projects__items').isotope({
			itemSelector: '.projects__item',
			layoutMode: 'fitRows',
			fitRows: {
				gutter: 0
			}
		});


		$('.projects__filter-btns').on('click', '.projects__filter-btn', function () {
			var filterValue = $(this).attr('data-filter');
			$projectsItems.isotope({filter: filterValue});
			updateFilterCounts();
		});
		function updateFilterCounts() {
			var itemElems = $projectsItems.isotope('getFilteredItemElements');
			var count_items = $(itemElems).length;

			if (count_items > initial_items) {
				$('#projects__btn-plus').show();
			}
			else {
				$('#projects__btn-plus').hide();
			}
			if ($('.projects__item').hasClass('visible_item')) {
				$('.projects__item').removeClass('visible_item');
			}
			var index = 0;
		
			$(itemElems).each(function () {
				if (index >= initial_items) {
					$(this).addClass('visible_item');
				}
				index++;
			});
			$projectsItems.isotope('layout');
		}

		$('.projects__filter-btns').each(function (i, projectsFilterBtnGroup) {
			var $projectsFilterBtnGroup = $(projectsFilterBtnGroup);
			$projectsFilterBtnGroup.on('click', '.projects__filter-btn', function () {
				$projectsFilterBtnGroup.find('.active').removeClass('active');
				$(this).addClass('active');
			});
		});

		function showNextItems(pagination) {
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
			$projectsItems.isotope('layout');
		}

		function hideItems(pagination) {
			var itemsMax = $('.projects__item').length;
			var itemsCount = 0;
			$('.projects__item').each(function () {
				if (itemsCount >= pagination) {
					$(this).addClass('visible_item');
				}
				itemsCount++;
			});
			if (itemsCount < itemsMax || initial_items >= itemsMax) {
				$('#projects__btn-plus').hide(300);
			}
			$projectsItems.isotope('layout');
		}
		$('#projects__btn-plus').on('click', function (e) {
			e.preventDefault();
			showNextItems(next_items);
		});
		hideItems(initial_items);





		/* ----------history-----------------history--------------------history--------------------- */
		var swiper = new Swiper(".history__swiper", {
			slidesPerView: 1,
			spaceBetween: 80,
			navigation: {
				prevEl: ".history__swiper-btn-prev",
				nextEl: ".history__swiper-btn-next",
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 60,
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
			spaceBetween: 24,
			navigation: {
				prevEl: ".spec-projects__swiper-btn-prev",
				nextEl: ".spec-projects__swiper-btn-next",
			},
			breakpoints: {
				700: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 80,
				},
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