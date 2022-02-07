gsap.registerPlugin(ScrollTrigger);

gsap.to(".edu",{
	x:"27%",
	rotation:0,
	duration:3,
  ease: "none",
  reversed: true,
	scrollTrigger: {
		trigger:'.edu',
    end: "center center",
    toggleActions: "retart none none none",
    markers: false,
    scrub: true,
	},
});

gsap.to(".exp",{
	x:"20%",
	rotation:0,
	duration:3,
  ease: "none",
  reversed: true,
	scrollTrigger: {
		trigger:'.exp',
    end: "center center",
    toggleActions: "retart none none none",
    markers: false,
    scrub: true,
	},
});

gsap.to(".skill",{
	x:"20%",
	rotation:0,
	duration:3,
  ease: "none",
  reversed: true,
	scrollTrigger: {
		trigger:'.skill',
    end: "center center",
    toggleActions: "retart none none none",
    markers: false,
    scrub: true,
	},
});

gsap.to(".edu_content",{
	x:"20%",
	rotation:0,
	duration:3,
  ease: "none",
	scrollTrigger: {
    start: 'top 500px',
		trigger:'.edu_content',
    end: "center center",
    toggleActions: "retart none none none",
    markers: false,
    scrub: true,
	},
});

gsap.to(".exp_content_0",{
	x:"20%",
	rotation:0,
	duration:3,
  ease: "none",
	scrollTrigger: {
    start: 'top 1000px',
		trigger:'.exp_content_0',
    end: "center center",
    toggleActions: "retart none none none",
    markers: false,
    scrub: true,
	},
});

gsap.to(".exp_content_1",{
	x:"20%",
	rotation:0,
	duration:3,
  ease: "none",
	scrollTrigger: {
		trigger:'.exp_content_1',
    end: "center center",
    toggleActions: "retart none none none",
    markers: false,
    scrub: true,
	},
});

gsap.to(".exp_content_2",{
	x:"20%",
	rotation:0,
	duration:3,
  ease: "none",
	scrollTrigger: {
		trigger:'.exp_content_2',
    end: "center center",
    toggleActions: "retart none none none",
    markers: false,
    scrub: true,
	},
});

gsap.to(".skill_content",{
	x:"28%",
	rotation:0,
	duration:3,
  ease: "none",
	scrollTrigger: {
		trigger:'.skill_content',
    end: "center center",
    toggleActions: "retart none none none",
    markers: false,
    scrub: true,
	},
});
