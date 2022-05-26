/* sgp--------------------------sgp------------------------------sgp */
							$('.item-sgp__btn-plus').click(function () {
								$('.item-sgp-hidden:hidden').eq(0).show(600);
								$('.item-sgp-hidden:hidden').length < 1 ? $('button.item-sgp__btn-plus').hide() : false;
							});


							const newsFilterBtns = $('.news__btns-filter');
							const newsSwiperItems = $('.news__row');
							const newsFilterBtn = $('.news__btn-filter');
							function newsFilter() {
								newsFilterBtns.on("click", event => {
									const targetId = event.target.getAttribute('data-id')
									const target = $(event.target)
								
									if (target.hasClass('news__btn-filter')) {
										newsFilterBtn.each(function () {
											$(this).removeClass('active');
										})
										target.addClass('active')
									}
								
									switch (targetId) {
										case 'all':
											getnewsItems('news__item')
											break;
										case 'news-new':
											getnewsItems(targetId)
											break;
										case 'news-meeting':
											getnewsItems(targetId)
											break;
									}
								});
							}
							newsFilter()
							function getnewsItems(className) {
								newsSwiperItems.each(function (index, item) {
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