// arrow animations
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let arrow = document.querySelector('.arrow');
let arrowRight = document.querySelector('.arrow-right');

if(arrow){
  gsap.to(arrow, {y: 12, ease: "power1.inOut", repeat: -1, yoyo: true});
}

if(arrowRight){
  gsap.to(arrowRight, {x: -12, ease: "power1.inOut", repeat: -1, yoyo: true});
}

gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".AboutMe",
    scrub: true,
    pin: true,
    start: "0%",
    end: "+=60%",
    markers:false,
    onEnter: () => setActive(links[1]),
    onEnterBack: () => setActive(links[1]),
    toggleActions: "retart retart none none",
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

gsap.to(".info",{
	x:"85%",
	rotation:0,
	duration:3,
  ease: "none",
  reversed: true,
	scrollTrigger: {
		trigger:'.panel',
    start: "0%",
    end: "+=30%",
    toggleActions: "retart retart none none",
    markers: false,
    scrub: true,
	},
});

gsap.from(".line-3", {
  scrollTrigger: {
    trigger: ".panel1",
    scrub: true,
    pin: false,
    start: "0%",
    end: "+=60%",
    markers:false,
    onEnter: () => setActive(links[1]),
    onEnterBack: () => setActive(links[1]),
    toggleActions: "retart retart none none",
  },
  scaleX: 0,
  transformOrigin: "left center",
  ease: "none"
});

gsap.to(".info2",{
	x:"-=90%",
	rotation:0,
	duration:3,
  ease: "none",
  reversed: true,
	scrollTrigger: {
		trigger:'.panel1',
    start: "0%",
    end: "+=30%",
    toggleActions: "retart retart none none",
    markers: false,
    scrub: true,
	},
});

gsap.from(".MyWeirderHobbies", {
  scrollTrigger: {
    trigger: "#two",
    scrub: true,
    pin: true,
    start: "0%",
    end: "+=60%",
    markers:false,
    onEnter: () => setActive(links[1]),
    onEnterBack: () => setActive(links[1]),
    toggleActions: "retart retart none none",
  },
  x:"-=0%",
  ease: "none"
});

gsap.to(".info3",{
  x:"70%",
	rotation:0,
	duration:3,
  ease: "none",
  reversed: true,
	scrollTrigger: {
		trigger:'.panel2',
    start: "0%",
    end: "+=30%",
    toggleActions: "retart retart none none",
    markers: false,
    scrub: true,
	},
});

gsap.to(".info4",{
  x:"-=100%",
	rotation:0,
	duration:3,
  ease: "none",
  reversed: true,
	scrollTrigger: {
		trigger:'.panel2',
    start: "0%",
    end: "+=30%",
    toggleActions: "retart retart none none",
    markers: false,
    scrub: true,
	},
});
