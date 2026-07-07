gsap.registerPlugin(ScrambleTextPlugin) 

gsap.to(".scramble", {
  duration: 1.5, 
  scrambleText: {
    text: "Portfolio",
  }
});

gsap.to(".scramble2", {
  duration: 1.5, 
  scrambleText: {
    text: "Software",
  }
});
