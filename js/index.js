$(document).ready(function() {

	var cart = $(".topbar-cart");
	var cartLink = $(".topbar-cart a");
	var cartMenu = $(".cart-menu");

	var searchBtn = $(".search-btn");
	var searchText = $(".search-text");

	/*
	 * 购物车对象 
	 */

	function TopBarCart() {

	}

	/*
	 *  显示购物车菜单方法
	 */

	TopBarCart.prototype.showCartMenu = function() {
		cartLink.css({
			"color": "#ff6700",
			"background-color": "#fff"
		});
		cartMenu.slideDown(100);
	}

	/*
	 * 隐藏购物车菜单 
	 */

	TopBarCart.prototype.hideCartMenu = function() {
		cartLink.css({
			"color": "#b0b0b0",
			"background-color": "#424242"
		});
		cartMenu.slideUp(100);
	}

	TopBarCart.prototype.cartMenuArray = [];

	/*
	 * 购物车控件的鼠标事件方法 
	 */

	TopBarCart.prototype.mouse = function() {
		var cartMenuArray = TopBarCart.prototype.cartMenuArray;
		cart.mouseenter(function() {
			cartMenuArray.forEach(function(one) {
				clearTimeout(one);
			});
			cartMenuArray.length = 0;
			var timer = setTimeout(TopBarCart.prototype.showCartMenu, 100);
			cartMenuArray.push(timer);
		});
		cart.mouseleave(function() {
			cartMenuArray.forEach(function(one) {
				clearTimeout(one);
			});
			cartMenuArray.length = 0;
			var timer = setTimeout(TopBarCart.prototype.hideCartMenu, 100);
			cartMenuArray.push(timer);
		});
	}

	/*
	 * 工厂方法 
	 */

	function factory(key) {
		if(key == "TopBarCart") {
			return new TopBarCart();
		} else if(key == "headerSearch") {
			return new headerSearch();
		} else if(key == "homeHeroSlider") {
			return new homeHeroSlider();
		} else if(key == "homeStarGoods") {
			return new homeStarGoods();
		} else if(key == "match") {
			return new match();
		} else if(key == "recommend") {
			return new recommend();
		} else if(key == "conTent") {
			return new conTent();
		}
	}

	var topbarCart = factory("TopBarCart");
	topbarCart.mouse();

	/*
	 * 搜索条对象 
	 */

	function headerSearch() {

	}

	/*
	 * 搜索按钮边框变橙边框 
	 */

	headerSearch.prototype.orangeBorderBtn = function() {
		searchBtn.css({
			"background-color": "#fff",
			"color": "#616161",
			"border-color": "#ff6700"
		});
	}

	/*
	 * 搜索按钮变橙
	 */

	headerSearch.prototype.orangeBtn = function() {
		searchBtn.css({
			"color": "#fff",
			"background-color": "#ff6700",
			"border-color": "#ff6700"
		});
	}

	/*
	 * 搜索按钮变暗边框 
	 */

	headerSearch.prototype.darkBtn = function() {
		searchBtn.css({
			"border-color": "#afafaf"
		});
	}

	/*
	 * 搜索按钮高亮边框 
	 */

	headerSearch.prototype.lightBtn = function() {
		searchBtn.css({
			"background-color": "#fff",
			"color": "#616161",
			"border": 1 / 16 + "rem solid #e0e0e0"
		});
	}

	/*
	 * 搜索框变暗边框 
	 */

	headerSearch.prototype.darkSearch = function() {
		searchText.css({
			"border-color": "#afafaf"
		});
	}

	/*
	 * 搜索框高亮边框 
	 */

	headerSearch.prototype.lightSearch = function() {
		searchText.css({
			"border-color": "#e0e0e0"
		});
	}

	/*
	 * 搜索框变橙边框 
	 */

	headerSearch.prototype.orangeSearch = function() {
		searchText.css({
			"border-color": "#ff6700"
		});
	}

	headerSearch.prototype.navMenuArray = [];

	/*
	 * 显示标题栏弹出菜单
	 */

	headerSearch.prototype.showNavMenu = function() {
		var navMenuArray = headerSearch.prototype.navMenuArray;
		navMenuArray.forEach(function(one) {
			clearTimeout(one);
		});
		navMenuArray.length = 0;
		var timer = setTimeout("$('.header-nav-menu').slideDown(300)", 200);
		navMenuArray.push(timer);
	}

	/*
	 * 隐藏标题栏菜单
	 */

	headerSearch.prototype.hideNavMenu = function() {
		var navMenuArray = headerSearch.prototype.navMenuArray;
		navMenuArray.forEach(function(one) {
			clearTimeout(one);
		});
		navMenuArray.length = 0;
		var timer = setTimeout("$('.header-nav-menu').slideUp(300)", 300);
		navMenuArray.push(timer);
	}

	/*
	 * 搜索条鼠标事件 
	 */

	headerSearch.prototype.mouse = function() {
		//搜索按钮鼠标移入事件
		searchBtn.mouseover(function() {
			if(document.activeElement.id == "search") {
				headerSearch.prototype.orangeBtn();
				return;
			}
			headerSearch.prototype.orangeBtn();
			headerSearch.prototype.darkSearch();
		});
		//搜索按钮鼠标移出事件
		searchBtn.mouseleave(function() {
			if(document.activeElement.id == "search") {
				headerSearch.prototype.orangeBorderBtn();
				return;
			}
			headerSearch.prototype.lightBtn();
			headerSearch.prototype.lightSearch();
		});

		var temp = $(".header-search");
		//搜索框和热词移入事件
		temp.mouseover(function() {
			if(document.activeElement.id == "search") {
				return;
			}
			headerSearch.prototype.darkBtn();
			headerSearch.prototype.darkSearch();
		});
		//搜索框和热词移除事件
		temp.mouseleave(function() {
			if(document.activeElement.id == "search") {
				return;
			}
			headerSearch.prototype.lightBtn();
			headerSearch.prototype.lightSearch();
		});
		//搜索文本框获得焦点时间
		searchText.focus(function() {
			headerSearch.prototype.orangeBorderBtn();
			headerSearch.prototype.orangeSearch();
			$(".keyword-list").slideDown(150);
			$(".search-hot-words").fadeOut(150);
		});
		//搜索文本框失去焦点时间
		searchText.blur(function() {
			headerSearch.prototype.lightBtn();
			headerSearch.prototype.lightSearch();
			$(".keyword-list").slideUp(150);
			$(".search-hot-words").fadeIn(150);
		});
		//鼠标移入标题栏某些控件，显示弹出导航菜单
		$(".nav-list .nav-item a[data-menu],.header-nav-menu").mouseenter(function() {
			var menu = $(this).data("menu");
			if(menu != null) {
				for(var i = 1; i <= 7; i++) {
					$("#menu-" + i).css("display", "none");
					if(menu == "menu-" + i) {
						$("#menu-" + i).css("display", "block");
					}
				}
			}
			headerSearch.prototype.showNavMenu();
		});
		//鼠标移入标题栏某些控件，隐藏弹出导航菜单
		$(".nav-list .nav-item ,.header-nav-menu").mouseleave(function() {
			headerSearch.prototype.hideNavMenu();
		});
	}
	var Search = factory("headerSearch");
	Search.mouse();

	/*
	 * 大英雄区
	 */

	function homeHeroSlider() {

	}

	/*
	 * 轮播方法
	 */
	homeHeroSlider.prototype.direction = "next";
	homeHeroSlider.prototype.order = 0; //轮播次序

	homeHeroSlider.prototype.change = function() {
		var slide = $(".ui-viewport .slide"); //所有轮播图片
		var order = homeHeroSlider.prototype.order;
		var direction = homeHeroSlider.prototype.direction;
		var uiPaper = $(".ui-paper a");
		uiPaper.eq(order).removeClass("active");
		if(direction == "next") {
			order++;
			if(order > 6) {
				order = 0;
			}
		} else if(direction == "prev") {
			order--;
			if(order < 0) {
				order = 6;
			}
		}
		slide.eq(order).siblings().css({
			"opacity": 0,
			"z-index": -1
		});
		slide.eq(order).css({
			"opacity": 1,
			"z-index": 5
		});
		uiPaper.eq(order).addClass("active");
		homeHeroSlider.prototype.order = order;
	}
	/*
	 * 图片轮播小球切换方法
	 */
	homeHeroSlider.prototype.changeTo = function(index) {
		var slide = $(".ui-viewport .slide"); //所有轮播图片
		var uiPaper = $(".ui-paper a");
		uiPaper.removeClass("active");
		slide.eq(index).siblings().css({
			"opacity": 0,
			"z-index": -1
		});
		slide.eq(index).css({
			"opacity": 1,
			"z-index": 5
		});
		uiPaper.eq(index).addClass("active");
		homeHeroSlider.prototype.order = index;
	}

	/*
	 * 翻页鼠标事件
	 */

	homeHeroSlider.prototype.mouse = function() {
		//向前翻页
		var prev = $(".ui-controls .prev");
		prev.click(function() {
			clearInterval(heroSliderTimer);
			homeHeroSlider.prototype.direction = "prev";
			homeHeroSlider.prototype.change();
		});
		//向后翻页
		var next = $(".ui-controls .next");
		next.click(function() {
			clearInterval(heroSliderTimer);
			homeHeroSlider.prototype.direction = "next";
			homeHeroSlider.prototype.change();
		});

		$(".ui-paper a").click(function() {
			clearInterval(heroSliderTimer);
			var index = $(this).data("slide");
			heroSlider.changeTo(index);
		});
	}

	var heroSlider = factory("homeHeroSlider");
	var heroSliderTimer = setInterval(homeHeroSlider.prototype.change, 5000);
	heroSlider.mouse();

	/*
	 * 小米明星单品对象
	 */

	function homeStarGoods() {

	}

	homeStarGoods.prototype.direction = "prev"; //切换状态
	homeStarGoods.prototype.timer = null; //定时器

	homeStarGoods.prototype.change = function() {
		var direction = homeStarGoods.prototype.direction;
		var temp = 0;
		if(direction == "prev") {
			temp = -1240 / 16 + "rem";
			homeStarGoods.prototype.direction = "next";
			var control = $(".home-star-goods .control-next");
			control.siblings().removeClass("control-active");
			control.addClass("control-active");
		} else {
			temp = 0;
			homeStarGoods.prototype.direction = "prev";
			var control = $(".home-star-goods .control-prev");
			control.siblings().removeClass("control-active");
			control.addClass("control-active");
		}
		$(".carousel-list").animate({
			"margin-left": temp
		}, 300);
	}
	homeStarGoods.prototype.mouse = function() {
		$(".home-star-goods s.control-prev").click(function() {
			var direction = homeStarGoods.prototype.direction;
			if(direction == "next") {
				homeStarGoods.prototype.change();
				homeStarGoods.prototype.initTimer();
				$(this).siblings().removeClass("control-active");
				$(this).addClass("control-active");
			}
		});
		$(".home-star-goods .control-next").click(function() {
			var direction = homeStarGoods.prototype.direction;
			if(direction == "prev") {
				homeStarGoods.prototype.change();
				homeStarGoods.prototype.initTimer();
				$(this).siblings().removeClass("control-active");
				$(this).addClass("control-active");
			}
		});
	}

	var starGoods = factory("homeStarGoods");
	homeStarGoods.prototype.initTimer = function() {
		clearInterval(homeStarGoods.prototype.timer);
		homeStarGoods.prototype.timer = setInterval(starGoods.change, 7000);
	}
	starGoods.mouse();
	starGoods.initTimer();

	/*
	 * 家电栏目对象
	 */

	function match() {

	}

	match.prototype.mouse = function() {
		$(".home-brick-box .more-list .more-item a").mouseenter(function() {
			$(".home-brick-box .more-list .more-item a").removeClass("more-active");
			$(this).addClass("more-active");
			var i = $(this).data("index");
			var temp = $($(".home-brick-box .row .brick-list")[i]);
			temp.siblings().removeClass("tab-active");
			temp.addClass("tab-active");
		});
	}

	var match = factory("match");
	match.mouse();

	/*
	 * 为你推荐对象
	 */

	function recommend() {

	}

	recommend.prototype.mouse = function() {
		$(".recommemd .control-prev").click(function() {
			$(this).siblings().removeClass("control-active");
			$(".recm-carousel-list").animate({
				"margin-left": "0"
			}, 500);
			$(this).addClass("control-active");
		});
		$(".recommemd .control-next").click(function() {
			$(this).siblings().removeClass("control-active");
			$(".recm-carousel-list").animate({
				"margin-left": "-1240px"
			}, 500);
			$(this).addClass("control-active");
		});
	}

	var recm = factory("recommend");
	recm.mouse();

	/*
	 * 内容
	 */

	function conTent() {

	}

	conTent.prototype.changeContent = function(index,content) {
		$(content + " .wrapper").css("margin-left",-(index - 1) * 296/16 + "rem");
	}

	conTent.prototype.mouse = function() {
		$(".content-item .control").click(function() {
			var content = "#" + $(this).parents().parents().attr("id");  //获取父元素id
			var obj = $(content + " .pager-list .pager-active"); //获取已激活的小球
			var len = $(content + " .wrapper .content").length; //获取卡片数量
			var index = new Number($(content + " .pager-active").data("index")); //获取小球的index
			if($(this).hasClass("control-prev")) {
				if(index > 1) {
					conTent.prototype.changeContent(index - 1,content);
					obj.removeClass("pager-active");
					$(content + " .pager-item[data-index='"+ (index - 1) +"']").addClass("pager-active");
				}
			} else if($(this).hasClass("control-next")) {
				if(index < len) {
					conTent.prototype.changeContent(index + 1,content);
					obj.removeClass("pager-active");
					$(content + " .pager-item[data-index='"+ (index + 1) +"']").addClass("pager-active");
				}
			}
		});
		$(".content-item .pager-item").click(function() {
			var content = "#" + $(this).parents().parents().attr("id");  //获取父元素id
			if($(this).hasClass("pager-active")){
				return;
			}
			$(this).siblings().removeClass("pager-active");
			var index = $(this).data("index");
			$(this).addClass("pager-active");
			conTent.prototype.changeContent(index,content);
		});
	}

	var Content = factory("conTent");
	Content.mouse();
});