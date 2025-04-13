// ✅ Register GSAP ScrollTrigger  
gsap.registerPlugin(ScrollTrigger);

// ✅ Product Rotation Animation (Optional Auto-Rotate)
gsap.to("#flipProduct", {
  rotationX: -360,
  repeat: -1,
  duration: 5,
  ease: "sine.inOut",
});

// ✅ Manual Rotation (Mouse and Touch Drag Feature)
let isDragging = false;
let startY = 0;
let currentRotationX = 0;
const flipProduct = document.getElementById("flipProduct");

if (flipProduct) {
  const startDrag = (y) => {
    isDragging = true;
    startY = y;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const onDrag = (y) => {
    if (isDragging) {
      const deltaY = y - startY;
      currentRotationX -= deltaY * 0.5;
      gsap.to(flipProduct, {
        rotationX: currentRotationX,
        duration: 0.5,
        ease: "power2.out",
      });
      startY = y;
    }
  };

  // Mouse events
  flipProduct.addEventListener("mousedown", (e) => startDrag(e.clientY));
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("mousemove", (e) => onDrag(e.clientY));

  // Touch events for mobile
  flipProduct.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientY));
  document.addEventListener("touchend", stopDrag);
  document.addEventListener("touchmove", (e) => onDrag(e.touches[0].clientY));
}


// ✅ Color Selection Function 
function selectColor(element) {
    document.querySelectorAll(".circle").forEach((circle) =>
      circle.classList.remove("selected")
    );
    element.classList.add("selected");
  
    const color = element.classList[1];
    document.getElementById("selectedColor").innerText = `Selected Color: ${color}`;
  }
  
  /* ✅ Scroll-Driven Animations with scrub: true */

// ✅ Flex-Window Section Animation
gsap.from(".flex-window-container h1", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".flex-window-container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  gsap.from(".flex-window-container p", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".flex-window-container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  // ✅ Flex-Cam Section Animation
  gsap.to(".flex-cam-images img", {
    scale: 1.1,
    scrollTrigger: {
      trigger: ".flex-cam-images",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  gsap.from(".flex-cam-text h1", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".flex-cam-text",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  gsap.from(".flex-cam-text p", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".flex-cam-text",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  // ✅ Night View Section Animation
  gsap.to(".night-images img", {
    scale: 1.1,
    scrollTrigger: {
      trigger: ".night-images",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  gsap.from(".night-text h1", {
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".night-text",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  gsap.from(".night-text p", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".night-text",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  // ✅ Camera Section Animation
  gsap.to(".camera-image", {
    scale: 1.1,
    scrollTrigger: {
      trigger: ".camera-images",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  gsap.from(".camera-images p", {
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".camera-images",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  // ✅ Camera Caption Animation
  gsap.from(".caption-camera h1", {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: ".caption-camera",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  // ✅ Flex-Window Caption Lines Animation
  gsap.from(".caption-flex-window .line", {
    y: 50,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".caption-flex-window",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
  
  