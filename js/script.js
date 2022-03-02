gsap.set(".anim-bg", { position: "absolute", width: "100%", height: "100%", top: 0, left: "0" });

gsap.set(".scrollDist", { width: "100%", height: "110%" });

let tl = gsap
	.timeline({
		scrollTrigger: { trigger: ".scrollDist", start: "top top", end: "bottom bottom", scrub: 1 },
	})
	.fromTo(".sect-service__text", { duration: 0.3, color: "#fff" }, { duration: 0.3, color: "#000" }, 0)
	.fromTo(".sect-service__link", { duration: 0.3, color: "#fff" }, { duration: 0.3, color: "#000" }, 0)
	.fromTo(".sect-service__link svg path", { duration: 0.3, fill: "#fff" }, { duration: 0.3, fill: "#000" }, 0)
	.fromTo(".anim-bg__mountain.--one", { y: 0 }, { y: -60 }, 0)
	.fromTo(".anim-bg__mountain.--two", { y: 0 }, { y: -250 }, 0)
	.fromTo(".anim-bg__mountain.--three", { y: 0 }, { y: -200 }, 0)
	.fromTo(".anim-bg__coud.--one", { y: 0 }, { y: -250 }, 0)
	.fromTo(".anim-bg__coud.--two", { y: 0 }, { y: -100 }, 0)
	.fromTo(".anim-bg__coud.--three", { y: 0 }, { y: -30 }, 0);
