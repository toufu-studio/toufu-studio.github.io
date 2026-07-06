gsap.registerPlugin(ScrambleTextPlugin) 

gsap.to(".scramble", {
  duration: 1.5, 
  scrambleText: {
    text: "About me",
  }
});

gsap.to(".scramble2", {
  duration: 1.5, 
  scrambleText: {
    text: "Nice to meet you!",
  }
});
