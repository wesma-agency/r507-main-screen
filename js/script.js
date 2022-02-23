gsap.set(".anim-bg", { position: "absolute", width: "100%", height: "100%", top: 0, left: "0" });

gsap.set(".scrollDist", { width: "100%", height: "120%" });

gsap.timeline({ scrollTrigger: { trigger: ".scrollDist", start: "top top", end: "bottom bottom", scrub: 1 } })
	.fromTo(".anim-bg__mountain.--one", { y: 0 }, { y: -100 }, 0)
	.fromTo(".anim-bg__mountain.--two", { y: 0 }, { y: -150 }, 0)
	.fromTo(".anim-bg__mountain.--three", { y: 0 }, { y: -120 }, 0)
	.fromTo(".anim-bg__coud.--one", { y: 0 }, { y: -50 }, 0)
	.fromTo(".anim-bg__coud.--two", { y: 0 }, { y: -100 }, 0)
	.fromTo(".anim-bg__coud.--three", { y: 0 }, { y: -30 }, 0);

// .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
// .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
// .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
// .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
