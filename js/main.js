gsap.registerPlugin(ScrambleTextPlugin) 

gsap.to(".scramble", {
  duration: 1.5, 
  scrambleText: {
    text: "Please click the arrow below.",
  }
});

// タイプライター関数
function typeWriter(textElement, text, duration) {
  const characters = text.split("");

  const timeline = gsap.timeline();

  characters.forEach((char, index) => {
    timeline.add(() => {
      textElement.textContent += char;
    }, index * (duration / characters.length));
  });

  return timeline;
}

// 実行
const element = document.querySelector(".typewriter");
typeWriter(element, "Hello World", 1);