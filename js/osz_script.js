gsap.registerPlugin(ScrollTrigger);


// title_2_scroll
// var tl_02 = gsap.timeline();
// 	tl_02.to("#menu_tab", { bottom: 0});

// ScrollTrigger.create({
// 	trigger: ".contents_div",
// 	animation: tl_02,
// 	start: "top top",
// 	toggleAction: "play none none reset",

// });


// title_1_scroll
// var tl_02_1 = gsap.timeline();
// 	tl_02_1.to("#menu_tab a ", { backgroundColor: "transparent", color:"#000", fontWeight:"normal", delay: -.3});
// 	tl_02_1.to("#menu_tab .tab_1", { backgroundColor: "#000", color:"#fff", fontWeight:"bold", delay: -.3});

// ScrollTrigger.create({
// 	trigger: "#img_title_2",
// 	animation: tl_02_1,
// 	start: "top top",
// 	end: "bottom bottom",
// 	toggleAction: "play none none reset",

// });

// ScrollTrigger.create({
// 	trigger: ".img_title_2_scroll",
// 	start: "top top",
// 	end: "bottom bottom",
// 	toggleAction: "restart none none none",
// 	pin: ".img_title_2_scroll .for_fixed",

// });


// var tl_02_2 = gsap.timeline();
// 	tl_02_2.to(".img_title_2_scroll .pos_ab", { y: 0, transform: "scale(1)"});
// 	tl_02_2.to(".img_title_2_scroll .mob_img_1_1", { opacity: 1, delay: -.2});


// ScrollTrigger.create({
// 	trigger: ".img_title_2_scroll .ext_0",
// 	animation: tl_02_2,
// 	start: "top 30%",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });

// var tl_02_3 = gsap.timeline();
// 	tl_02_3.to(".img_title_2_scroll .mob_img em.one", { opacity: .5, duration:.3, transform: "scale(1.2)"});
// 	tl_02_3.to(".img_title_2_scroll .mob_img em.one", { opacity: .3, duration:.3, transform: "scale(0.5)"});
// 	tl_02_3.to(".img_title_2_scroll .mob_img em.one", { opacity: 0, duration:.3, transform: "scale(1)"});
// 	tl_02_3.to(".img_title_2_scroll .mob_img_1_2", { opacity: 1, delay: -.2});
// 	tl_02_3.to(".img_title_2_scroll .mob_img_2_1", { opacity: 1, delay: 0.3});


// ScrollTrigger.create({
// 	trigger: ".img_title_2_scroll .ext_1",
// 	animation: tl_02_3,
// 	start: "top top",
// 	toggleAction: "restart none none none",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });

// var tl_02_4 = gsap.timeline();
// 	tl_02_4.to(".img_title_2_scroll .mob_img em.two", { opacity: .5, duration:.3, transform: "scale(1.2)"});
// 	tl_02_4.to(".img_title_2_scroll .mob_img em.two", { opacity: .3, duration:.3, transform: "scale(0.5)"});
// 	tl_02_4.to(".img_title_2_scroll .mob_img em.two", { opacity: 0, duration:.3, transform: "scale(1)"});
// 	tl_02_4.to(".img_title_2_scroll .mob_img_2_2", { opacity: 1, delay: -.2});
// 	tl_02_4.to(".img_title_2_scroll .mob_img_3_1", { opacity: 1, delay: 0.3});


// ScrollTrigger.create({
// 	trigger: ".img_title_2_scroll .ext_2",
// 	animation: tl_02_4,
// 	start: "top top",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });

// var tl_02_5 = gsap.timeline();
// 	tl_02_5.to(".img_title_2_scroll .mob_img em.three", { opacity: .5, duration:.3, transform: "scale(1.2)"});
// 	tl_02_5.to(".img_title_2_scroll .mob_img em.three", { opacity: .3, duration:.3, transform: "scale(0.5)"});
// 	tl_02_5.to(".img_title_2_scroll .mob_img em.three", { opacity: 0, duration:.3, transform: "scale(1)"});
// 	tl_02_5.to(".img_title_2_scroll .mob_img_3_2", { opacity: 1, delay: -.2});


// ScrollTrigger.create({
// 	trigger: ".img_title_2_scroll .ext_3",
// 	animation: tl_02_5,
// 	start: "top top",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });





// title_1_scroll

// var tl_0_1 = gsap.timeline();
// 	tl_0_1.to("#menu_tab a ", { backgroundColor: "transparent", color:"#000", fontWeight:"normal", delay: -.3});
// 	tl_0_1.to("#menu_tab .tab_2", { backgroundColor: "#000", color:"#fff", fontWeight:"bold", delay: -.3});

// ScrollTrigger.create({
// 	trigger: "#img_title_1",
// 	animation: tl_0_1,
// 	start: "top top",
// 	end: "bottom bottom",
// 	toggleAction: "play reverse none none",

// });

gsap.registerPlugin(ScrollTrigger);





ScrollTrigger.matchMedia({
	"(min-width: 769px)": function(){
		// var tl_3_0 = gsap.timeline();
		// 	tl_3_0.to(".img_title_3_scroll .for_fixed .pos_rel", { backgroundColor: "transparent", width: "50%"});
			


		// ScrollTrigger.create({
		// 	trigger: ".img_title_3_scroll .ext_0",
		// 	// pin: ".ext_1 .pos_rel",
		// 	animation: tl_3_0,
		// 	start: "top 30%",
		// 	ease: "power3.inOut",
		// 	scrub: true,
		// 	snap: true,

		// });
	}, 
	"(max-width: 768px)" : function() {
		// var tl_3_0 = gsap.timeline();
		// 	tl_3_0.to(".img_title_3_scroll .for_fixed .pos_rel", { backgroundColor: "transparent", width: "100%"});
			


		// ScrollTrigger.create({
		// 	trigger: ".img_title_3_scroll .ext_0",
		// 	// pin: ".ext_1 .pos_rel",
		// 	animation: tl_3_0,
		// 	start: "top 30%",
		// 	ease: "power3.inOut",
		// 	scrub: true,
		// 	snap: true,

		// });

	},
	"all": function() {

	}
});






ScrollTrigger.create({
	trigger: ".img_title_1_scroll",
	start: "top top",
	end: "bottom bottom",
	toggleAction: "restart none none none",
	pin: ".img_title_1_scroll .for_fixed",

});


var tl_1_0 = gsap.timeline();
	tl_1_0.to(".img_title_1_scroll .pos_ab", { y: 0, transform: "scale(1)"});
	

ScrollTrigger.create({
	trigger: ".img_title_1_scroll .ext_0",
	animation: tl_1_0,
	start: "top 30%",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_1_1 = gsap.timeline();
	tl_1_1.to(".img_title_1_scroll .mob_top", { backgroundColor: "#f8f8f8", duration: .2, delay: 0});
	tl_1_1.to(".img_title_1_scroll .mob_img", { backgroundPosition: "0% 100%", duration:.3, delay: -.4});
	tl_1_1.to(".img_title_1_scroll .comnt_1", { opacity: 1, translateY: 0, duration:.3, delay: -.2});
	tl_1_1.to(".img_title_1_scroll .comnt_2", { opacity: 1, translateY: 0, duration:.3, delay: -.2});
	
ScrollTrigger.create({
	trigger: ".img_title_1_scroll .ext_1",
	animation: tl_1_1,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});











// title_3_scroll

ScrollTrigger.create({
	trigger: ".img_title_3_scroll",
	start: "top top",
	end: "bottom bottom",
	toggleAction: "restart none none none",
	pin: ".img_title_3_scroll .for_fixed",

});

var tl_3_0 = gsap.timeline();
	tl_3_0.to(".img_title_3_scroll .for_fixed .pos_ab", { opacity: 0});
	tl_3_0.to(".grey_bg_5", { backgroundColor: "#e8e8e8" });

	


ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_0",
	// pin: ".ext_1 .pos_rel",
	animation: tl_3_0,
	start: "top 30%",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});


var tl_3_1 = gsap.timeline();
	tl_3_1.to(".img_title_3_scroll .extra .r_banner_1", {opacity: 1});
	tl_3_1.to(".img_title_3_scroll .extra .r_banner_3", {opacity: 1});
	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_1",
	pin: ".ext_1 .pos_rel",
	pinSpacing: false,
	animation: tl_3_1,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: .5,
});



var tl_3_2_0 = gsap.timeline();
	tl_3_2_0.to(".img_title_3_scroll .for_fixed .mob_img", { paddingTop: "40%", duration:0.5 });
	tl_3_2_0.to(".grey_bg_5", { backgroundColor: "#e4e3e2" });
	tl_3_2_0.to(".img_title_3_scroll .banner_1", { opacity: 0, height: "10%", duration:0.5 , delay: -1 });
	tl_3_2_0.to(".img_title_3_scroll .banner_2 .t_s", { height: "0px", marginBottom:0, opacity:0, duration:0.5, display: "none", delay: -.5 });
	tl_3_2_0.to(".img_title_3_scroll .banner_2 .t_d", { opacity:1, duration:0.5 , delay: -.5});
	tl_3_2_0.to(".img_title_3_scroll .banner_2", { opacity: 1, duration:0.5 , delay: -.5 });

ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_2",
	// pin: ".ext_2_1 .pos_rel",
	pinSpacing: false,
	animation: tl_3_2_0,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});



var tl_3_2 = gsap.timeline();
	tl_3_2.to(".img_title_3_scroll .ext_2_1 .mob_img", { backgroundPosition: "0% 100%", duration:1.3,});
	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_2_1",
	pin: ".ext_2_1 .pos_rel",
	pinSpacing: false,
	animation: tl_3_2,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "ease",
	scrub: true,
	snap: true,

});

var tl_3_3_1 = gsap.timeline();
	tl_3_3_1.to(".img_title_3_scroll .for_fixed .mob_img", { paddingTop: "40%", duration:0.5 });
	tl_3_3_1.to(".grey_bg_5", { backgroundColor: "#E8E3E2" });
	tl_3_3_1.to(".img_title_3_scroll .banner_2 .t_s", { height: "auto", marginBottom: "20px",  opacity: 1, duration:0.5, display: "block", delay: -3 });
	// tl_3_3_1.to(".img_title_3_scroll .for_fixed .pos_rel", { backgroundColor: "#f0f0f0", delay: -.5});

ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_2_2",
	// pin: ".ext_2_1 .pos_rel",
	pinSpacing: false,
	animation: tl_3_3_1,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});


var tl_3_3 = gsap.timeline();
	tl_3_3.to(".img_title_3_scroll .for_fixed h2", { innerText: "MEDIUM", duration:0.5 });
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_img em.one", { opacity: .5, duration:.2, transform: "scale(1.2)"});
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_img em.one", { opacity: .2, duration:.2, transform: "scale(0.5)"});
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_img em.one", { opacity: 0, duration:.2, transform: "scale(1)"});
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_btm", { opacity: 0, duration:.2});
	tl_3_3.to(".img_title_3_scroll .ext_3 .mob_img_3_3", { opacity: 1, duration:0.9});

	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_3",
	pin: ".ext_3 .pos_rel",
	pinSpacing: false,
	animation: tl_3_3,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "ease",
	scrub: true,
	snap: true,

});

var tl_3_4 = gsap.timeline();
	tl_3_4.to(".img_title_3_scroll .ext_3 .mob_img_3_3", { backgroundPosition: "0% 100%", duration:1.3,});
	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_4",
	pin: ".ext_3 .pos_rel",
	pinSpacing: false,
	animation: tl_3_4,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	// snap: true,

});



var tl_3_5 = gsap.timeline();
	tl_3_5.to(".img_title_3_scroll .for_fixed h2", { innerText: "FULL MEDIUM", duration:0.5 });
	tl_3_5.to(".img_title_3_scroll .for_fixed .mob_img", { paddingRight: "0%", paddingLeft: "0%", duration:0.5 });
	tl_3_5.to(".grey_bg_5", { backgroundColor: "#252525" });
	// tl_3_5.to(".img_title_3_scroll .for_fixed .pos_rel", { backgroundColor: "#323232", delay: -.3});
	tl_3_5.to(".img_title_3_scroll .banner_2", { borderColor: "#fff", delay: -.3});
	tl_3_5.to(".img_title_3_scroll .fc_bk", { color: "#fff", delay: -.6});


	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_5",
	// pin: ".ext_3 .pos_rel",
	// pinSpacing: false,
	animation: tl_3_5,
	start: "top top",
	toggleAction: "restart none restart none",
	ease: "ease",
	scrub: true,
	snap: true,

});

var tl_3_6 = gsap.timeline();
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_img em.one", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_img em.one", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_img em.one", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_btm.mob_btm_0", { opacity: 0, duration:.3});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_btm.mob_btm_1", { opacity: 1, duration:.3});
	tl_3_6.to(".img_title_3_scroll .ext_6 .mob_img_4_1", { opacity: 1, duration:1.3});
	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_6",
	pin: ".ext_6 .pos_rel",
	pinSpacing: false,
	animation: tl_3_6,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});
var tl_3_7 = gsap.timeline();
	tl_3_7.to(".img_title_3_scroll .ext_6 .mob_img_4_1", { backgroundPosition: "0% 100%", duration:1.3,});


	
ScrollTrigger.create({
	trigger: ".img_title_3_scroll .ext_7",
	pin: ".ext_6 .pos_rel",
	pinSpacing: false,
	animation: tl_3_7,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	// snap: true,

});





// img_title_4
var tl_4 = gsap.timeline();
	tl_4.to("#img_title_4 .img_title_1", { opacity:1, transform: "scale(1)"});


ScrollTrigger.create({
	trigger: "#img_title_4 .scroll_div",
	animation: tl_4,
	start: "top 50%",
	end: "top 30%",
	ease: "power3.inOut",
	
	toggleAction: "restart none restart none",
	scrub: true,
	snap: true,

});






// img_title_5

ScrollTrigger.create({
	trigger: ".img_title_5_scroll",
	start: "top top",
	end: "bottom bottom",
	toggleAction: "restart none none none",
	pin: ".img_title_5_scroll .for_fixed",

});

var tl_5 = gsap.timeline();
	tl_5.to(".img_title_5_scroll .pos_ab", { y: 0, transform: "scale(1)"});


ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_0",
	animation: tl_5,
	start: "top 30%",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});


var tl_5_1 = gsap.timeline();
	tl_5_1.to(".img_title_5_scroll .mob_img em.one", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_5_1.to(".img_title_5_scroll .mob_img em.one", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_5_1.to(".img_title_5_scroll .mob_img em.one", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_5_1.to(".img_title_5_scroll .mob_btm", { opacity: 1, delay: -.2});
	tl_5_1.to(".img_title_5_scroll .mob_img_1", { opacity: 1, delay: -.4});


ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_1",
	animation: tl_5_1,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});




var tl_5_2 = gsap.timeline();
	tl_5_2.to(".img_title_5_scroll .mob_img em.two", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_5_2.to(".img_title_5_scroll .mob_img em.two", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_5_2.to(".img_title_5_scroll .mob_img em.two", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_5_2.to(".img_title_5_scroll .mob_img_1", { opacity: 1, delay: -.2});
	tl_5_2.to(".img_title_5_scroll .mob_btm_1", { opacity: 1, delay: -.2});


ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_2",
	animation: tl_5_2,
	start: "top top",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_5_3 = gsap.timeline();
	tl_5_3.to(".img_title_5_scroll .mob_img em.three", { opacity: .5, duration:.3, transform: "scale(1.2)"});
	tl_5_3.to(".img_title_5_scroll .mob_img em.three", { opacity: .3, duration:.3, transform: "scale(0.5)"});
	tl_5_3.to(".img_title_5_scroll .mob_img em.three", { opacity: 0, duration:.3, transform: "scale(1)"});
	tl_5_3.to(".img_title_5_scroll .mob_btm_1", { opacity: 0, delay: -.2});




ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_3",
	animation: tl_5_3,
	start: "top top",
	ease: "power3.inOut",
	scrub: true,
	snap: true,

});

var tl_5_4 = gsap.timeline();
	tl_5_4.to(".img_title_5_scroll .mob_img.mob_img_1", { backgroundPosition: "0% 100%", duration:1.3,});

	
ScrollTrigger.create({
	trigger: ".img_title_5_scroll .ext_4",
	pinSpacing: false,
	animation: tl_5_4,
	start: "top top",
	toggleAction: "restart none none none",
	ease: "power3.inOut",
	scrub: true,
	// snap: .2,

});

// var tl_3_8 = gsap.timeline();
// 	tl_3_8.to(".img_title_3_scroll .for_fixed .pos_rel", { width: "0%"});
// 	tl_3_8.to(".img_title_3_scroll .extra", { paddingLeft: "0%"});

	
// ScrollTrigger.create({
// 	trigger: ".img_title_3_scroll .ext_8",
// 	animation: tl_3_8,
// 	start: "top top",
// 	toggleAction: "restart none none none",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });


// ScrollTrigger.create({
// 	trigger: ".img_title_3_scroll .ext_5",
// 	pin: ".ext_5 .pos_rel",
// 	pinSpacing: false,
// 	// animation: tl_3_4,
// 	start: "top top",
// 	toggleAction: "restart none none none",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });

// title_2_scroll

// ScrollTrigger.create({
// 	trigger: ".img_title_2_scroll",
// 	start: "top top",
// 	end: "bottom bottom",
// 	toggleAction: "restart none none none",
// 	pin: ".for_fixed",

// });


// var two_tl_0 = gsap.timeline();
// 	two_tl_0.to(".pos_ab", { y: 0, transform: "scale(1)"});


// ScrollTrigger.create({
// 	trigger: ".ext_0",
// 	animation: two_tl_0,
// 	start: "top 30%",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });

// var two_tl_1 = gsap.timeline();
// 	two_tl_1.to(".mob_img em.one", { opacity: .5, duration:.3, transform: "scale(1.2)"});
// 	two_tl_1.to(".mob_img em.one", { opacity: .3, duration:.3, transform: "scale(0.5)"});
// 	two_tl_1.to(".mob_img em.one", { opacity: 0, duration:.3, transform: "scale(1)"});
// 	two_tl_1.to(".mob_img_1", { opacity: 0, delay: -.2});


// ScrollTrigger.create({
// 	trigger: ".ext_1",
// 	animation: two_tl_1,
// 	start: "top top",
// 	toggleAction: "restart none none none",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });

// var two_tl_2 = gsap.timeline();
// 	two_tl_2.to(".mob_img em.two", { opacity: .5, duration:.3, transform: "scale(1.2)"});
// 	two_tl_2.to(".mob_img em.two", { opacity: .3, duration:.3, transform: "scale(0.5)"});
// 	two_tl_2.to(".mob_img em.two", { opacity: 0, duration:.3, transform: "scale(1)"});
// 	two_tl_2.to(".mob_btm_1", { opacity: 1, delay: -.2});


// ScrollTrigger.create({
// 	trigger: ".ext_2",
// 	animation: two_tl_2,
// 	start: "top top",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });

// var two_tl_3 = gsap.timeline();
// 	two_tl_3.to(".mob_img em.three", { opacity: .5, duration:.3, transform: "scale(1.2)"});
// 	two_tl_3.to(".mob_img em.three", { opacity: .3, duration:.3, transform: "scale(0.5)"});
// 	two_tl_3.to(".mob_img em.three", { opacity: 0, duration:.3, transform: "scale(1)"});
// 	two_tl_3.to(".mob_btm_1", { opacity: 0, delay: -.2});


// ScrollTrigger.create({
// 	trigger: ".ext_3",
// 	animation: two_tl_3,
// 	start: "top top",
// 	ease: "power3.inOut",
// 	scrub: true,
// 	snap: true,

// });


// var two_tl_4 = gsap.timeline();
// 	two_tl_4.to(".mob_btm", { yPercent: 50, duration: .6});
// 	two_tl_4.to(".mob_img", { backgroundPosition: "0% 100%", delay: -.6});


// ScrollTrigger.create({
// 	trigger: ".ext_4",
// 	animation: two_tl_4,
// 	start: "top top",
// 	scrub: true,
// 	snap: {
// 		snapTo: 1/4,
// 		duration:4,
// 		ease: "power1.inOut"
// 	},

// });




$(document).ready(function(){
	// handle links with @href started with '#' only
	$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	});

	var pd_btm  = $("#img_title_1 .img_title_div > .pd_tp_bm_300").outerHeight() - $("#img_title_1 .img_title_div > .pd_tp_bm_300").height();
	var top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - ( pd_btm / 2 );
	var top_height_2 = top_height + $("#img_title_1").outerHeight();
	
	$(window).resize(function(){
		pd_btm  = $("#img_title_1 .img_title_div > .pd_tp_bm_300").outerHeight() - $("#img_title_1 .img_title_div > .pd_tp_bm_300").height();
		top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - ( pd_btm / 2 );
		top_height_2 = top_height + $("#img_title_1").outerHeight();
	});

	
	$(window).scroll(function(){

		
		if ($(this).scrollTop() > top_height) {
			
			$("#menu_tab").addClass("show_now");
	
		}  else {
			$("#menu_tab").removeClass("show_now");
		}
	

	
	
	
	});	
		
});



$(window).on("load", function() {

		
		// lazy loading for background images
		$(".lazy_img").removeClass("lazy_css");


});