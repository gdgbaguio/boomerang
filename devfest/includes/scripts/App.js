var App = {
	xhr: null,
	fl: true,
	viewLoad: false,
	headLoad: false,
	currentPage: "",
	skills: [
		{
			name: "Android",
			color: "light-green darken-2"
		}
	],
	speakerInfo: [
		{
			name: "Ralph Vincent Regalado",
			title: "Community Manager, GDG Philippines",
			img: "ralph-regalado",
			bio: "Ralph Vincent Regalado is one of the Community Managers of GDG Philippines. He is also the CEO and Founder of SENTi, a tech startup that analyzes sentiments and conversations in social media. He is a professor, and a Natural Language Processing researcher at De La Salle University, Manila. His research works were presented not only in local but also in international conferences hosted in China, Japan, Vietnam, Indonesia and the United States. When he is not at work, he spends his time travelling and hiking mountains.",
			skills: [0],
			company: "GDG Philippines",
			sm: {
				fb: "https://www.facebook.com/regalandroid",
				tw: "https://twitter.com/regalandroid",
				gp: "https://plus.google.com/+RalphVincentRegalado/posts",
				li: "https://www.linkedin.com/in/rvregalado",
				wb: "http://ralphregalado.com/",
			}
		},
		{
			name: "Ralph Vincent Regalado",
			title: "Community Manager, GDG Philippines",
			img: "ralph-regalado",
			bio: "Ralph Vincent Regalado is one of the Community Managers of GDG Philippines. He is also the CEO and Founder of SENTi, a tech startup that analyzes sentiments and conversations in social media. He is a professor, and a Natural Language Processing researcher at De La Salle University, Manila. His research works were presented not only in local but also in international conferences hosted in China, Japan, Vietnam, Indonesia and the United States. When he is not at work, he spends his time travelling and hiking mountains.",
			skills: [0],
			company: "GDG Philippines",
			sm: {
				fb: "https://www.facebook.com/regalandroid",
				tw: "https://twitter.com/regalandroid",
				gp: "https://plus.google.com/+RalphVincentRegalado/posts",
				li: "https://www.linkedin.com/in/rvregalado",
				wb: "http://ralphregalado.com/",
			}
		},
		{
			name: "Ralph Vincent Regalado",
			title: "Community Manager, GDG Philippines",
			img: "ralph-regalado",
			bio: "Ralph Vincent Regalado is one of the Community Managers of GDG Philippines. He is also the CEO and Founder of SENTi, a tech startup that analyzes sentiments and conversations in social media. He is a professor, and a Natural Language Processing researcher at De La Salle University, Manila. His research works were presented not only in local but also in international conferences hosted in China, Japan, Vietnam, Indonesia and the United States. When he is not at work, he spends his time travelling and hiking mountains.",
			skills: [0],
			company: "GDG Philippines",
			sm: {
				fb: "https://www.facebook.com/regalandroid",
				tw: "https://twitter.com/regalandroid",
				gp: "https://plus.google.com/+RalphVincentRegalado/posts",
				li: "https://www.linkedin.com/in/rvregalado",
				wb: "http://ralphregalado.com/",
			}
		},
		{
			name: "Ralph Vincent Regalado",
			title: "Community Manager, GDG Philippines",
			img: "ralph-regalado",
			bio: "Ralph Vincent Regalado is one of the Community Managers of GDG Philippines. He is also the CEO and Founder of SENTi, a tech startup that analyzes sentiments and conversations in social media. He is a professor, and a Natural Language Processing researcher at De La Salle University, Manila. His research works were presented not only in local but also in international conferences hosted in China, Japan, Vietnam, Indonesia and the United States. When he is not at work, he spends his time travelling and hiking mountains.",
			skills: [0],
			company: "GDG Philippines",
			sm: {
				fb: "https://www.facebook.com/regalandroid",
				tw: "https://twitter.com/regalandroid",
				gp: "https://plus.google.com/+RalphVincentRegalado/posts",
				li: "https://www.linkedin.com/in/rvregalado",
				wb: "http://ralphregalado.com/",
			}
		},
		{
			name: "Ralph Vincent Regalado",
			title: "Community Manager, GDG Philippines",
			img: "ralph-regalado",
			bio: "Ralph Vincent Regalado is one of the Community Managers of GDG Philippines. He is also the CEO and Founder of SENTi, a tech startup that analyzes sentiments and conversations in social media. He is a professor, and a Natural Language Processing researcher at De La Salle University, Manila. His research works were presented not only in local but also in international conferences hosted in China, Japan, Vietnam, Indonesia and the United States. When he is not at work, he spends his time travelling and hiking mountains.",
			skills: [0],
			company: "GDG Philippines",
			sm: {
				fb: "https://www.facebook.com/regalandroid",
				tw: "https://twitter.com/regalandroid",
				gp: "https://plus.google.com/+RalphVincentRegalado/posts",
				li: "https://www.linkedin.com/in/rvregalado",
				wb: "http://ralphregalado.com/",
			}
		},
		{
			name: "Ralph Vincent Regalado",
			title: "Community Manager, GDG Philippines",
			img: "ralph-regalado",
			bio: "Ralph Vincent Regalado is one of the Community Managers of GDG Philippines. He is also the CEO and Founder of SENTi, a tech startup that analyzes sentiments and conversations in social media. He is a professor, and a Natural Language Processing researcher at De La Salle University, Manila. His research works were presented not only in local but also in international conferences hosted in China, Japan, Vietnam, Indonesia and the United States. When he is not at work, he spends his time travelling and hiking mountains.",
			skills: [0],
			company: "GDG Philippines",
			sm: {
				fb: "https://www.facebook.com/regalandroid",
				tw: "https://twitter.com/regalandroid",
				gp: "https://plus.google.com/+RalphVincentRegalado/posts",
				li: "https://www.linkedin.com/in/rvregalado",
				wb: "http://ralphregalado.com/",
			}
		},
		{
			name: "Ralph Vincent Regalado",
			title: "Community Manager, GDG Philippines",
			img: "ralph-regalado",
			bio: "Ralph Vincent Regalado is one of the Community Managers of GDG Philippines. He is also the CEO and Founder of SENTi, a tech startup that analyzes sentiments and conversations in social media. He is a professor, and a Natural Language Processing researcher at De La Salle University, Manila. His research works were presented not only in local but also in international conferences hosted in China, Japan, Vietnam, Indonesia and the United States. When he is not at work, he spends his time travelling and hiking mountains.",
			skills: [0],
			company: "GDG Philippines",
			sm: {
				fb: "https://www.facebook.com/regalandroid",
				tw: "https://twitter.com/regalandroid",
				gp: "https://plus.google.com/+RalphVincentRegalado/posts",
				li: "https://www.linkedin.com/in/rvregalado",
				wb: "http://ralphregalado.com/",
			}
		}
	],
	getRandom: function(arr, n) {
		var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
		if (n > len)
			throw new RangeError("getRandom: more elements taken than available");
		while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len;
		}
		return result;
	},
	ready: function(page) {
		if(page == "")
			page = "home";
		App.loadController(page);
		App.responsive();
		$(window).scroll(function() {
			var pos = $(window).scrollTop();
			var height = $(".header").outerHeight() - $(".action-bar").outerHeight();
			$(".header .bg").css("opacity", 1-(pos/(height)));
			$(".header .wrapper").css("opacity", 1-(pos/(height)));
			$(".header .black-filter").css("opacity", 1-(pos/(height)));
			if(pos > height) {
				$(".action-bar").addClass("color");
				if(App.currentPage == "home")
					$(".action-bar img.logo").css("opacity", "1")
			} else {
				$(".action-bar").removeClass("color")
				if(App.currentPage == "home")
					$(".action-bar img.logo").css("opacity", "0")
			}
		}).resize(function() {
			App.responsive();
		})
		$(".black-trans, .back").click(function() {
			App.slider("hide");
			$(".speaker-container").css("bottom", "-80%");
		})
		$(".menu").click(function() {
			App.slider("show");
		})
		$("[data-page]").click(function() {
			if(!$(this).is(".selected")) {
				App.loadController($(this).attr("data-page"));
				App.slider("hide");
			}
		});
	},
	slider: function(action) {
		if(action == "show") {
			$(".slider").animate({
				"left": "0px"
			}, 500);
			$(".black-trans").show();
			$("body").css("overflow", "hidden");
		} else {
			$(".slider").animate({
				"left": "-310px"
			}, 500);
			$(".black-trans").hide();
			$("body").css("overflow", "auto");
		}
	},
	responsive: function() {
		$(".action-bar .nav").show();
		$(".action-bar .menu").hide();
		if($(window).width() < 600) {
			$(".action-bar .nav").hide();
			$(".action-bar .menu").css("display", "table");
		}
	},
	loadSpeaker: function(si) {
		$("body").css("overflow", "hidden");
		$(".black-trans").show();
		$(".speaker-container").scrollTop(0);
		$(".speaker-container").css("bottom", "0px");
		var ss = App.speakerInfo[si];
		$(".speaker-container .cover").css("background-image", "url(includes/images/speakers/"+ss.img+".jpg)")
		$(".speaker-container .name").html(ss.name);
		$(".speaker-container small").html(ss.title);
		var skillhtml = "";
		$(".speaker-container p").html(ss.bio);
		$(".speaker-container .chips").html("");
		for(var i = 0; i < ss.skills.length; i++) {
			skillhtml += '<div class="chip '+App.skills[ss.skills[i]].color+'"><span>'+App.skills[ss.skills[i]].name+'</span></div>';
		}
		$(".speaker-container .chips").html(skillhtml);
		$(".speaker-container .sm").html(((ss.sm.gp != "") ? '<a href="'+ss.sm.gp+'" target="_blank" class="sm"><img src="includes/images/gp.png"></a>' : '') +
						((ss.sm.fb != "") ? '<a href="'+ss.sm.fb+'" target="_blank" class="sm"><img src="includes/images/fb.png"></a>' : '') +
						((ss.sm.tw != "") ? '<a href="'+ss.sm.tw+'" target="_blank" class="sm"><img src="includes/images/tw.png"></a>' : '') +
						((ss.sm.li != "") ? '<a href="'+ss.sm.li+'" target="_blank" class="sm"><img src="includes/images/li.png"></a>' : '') +
						((ss.sm.wb != "") ? '<a href="'+ss.sm.wb+'" target="_blank" class="sm"><img src="includes/images/wb.png"></a>' : ''));
	},
	loadController: function(controller) {
		App.currentPage = controller;
		$(".loading").css("top", "80px");
		$("ul.nav a").removeClass("selected");
		$("ul.nav a[data-page='"+controller+"']").addClass("selected");
		if(App.fl)
			App.fl = false;
		else
			App.xhr.abort();
		$("body").animate({
			scrollTop: 0
		}, 500, 'swing');
		App.xhr = $.ajax({
			url: "views/"+controller+".html",
			cache: true,
			success: function(html) {
				$(".view").html("").attr("controller", controller).css("height", "400px").animate({
					"top": "200px",
					"opacity": "0"
				}, 500);
				$(".header .wrapper").animate({
					"top": "500px"
				}, 500);
				setTimeout(function() {
					if(controller != "home") {
						$(".action-bar img.logo").css("opacity", "1")
					} else {
						$(".action-bar img.logo").css("opacity", "0")
					}
					$(".view").html($(html).filter("#view")).animate({
						"top": "0px",
						"opacity": "1"
					}, 1500).css("height", "auto");
					$(".header .col-6").html($(html).filter("#header"));
					$(".header .wrapper").animate({
						"top": "0px"
					}, 1500, function() {
						$(".loading").css("top", "-80px");
					});
				}, 750);
			},
			error: function(xhrtemp, ajaxOptions, thrownError) {
				if(xhrtemp.status == 404) {
					App.loadController("home");
				}
			}
		})
	}
}