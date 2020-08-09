var mobileNav = {
	SMALL_TABLET: 768,

	openNav: ($menuToggleElem, $menuList) => {
		$('html, body').toggleClass('js-lock');
		$menuToggleElem.toggleClass('is-active');
		$menuList.fadeToggle(300);
	},

	init: () => {
		const $navigation = $('.nav');

		$('.js-mobile-menu').click(function () {
			mobileNav.openNav($(this), $navigation)
		});

		$(window).resize(() => {
			if ($(window).width() > mobileNav.SMALL_TABLET) {
				$navigation.css('style', '').removeAttr('style');
			}
		})
	}
};

export { mobileNav };
