import gsap from "gsap";

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");
  const transitionElement2 = document.getElementById("transition-element-2");

  if (transitionElement && transitionElement2) {
    const tl = gsap.timeline();

    tl.set([transitionElement, transitionElement2], {
      display: "flex",
      yPercent: 0,
    })
      .to(transitionElement, {
        yPercent: 100,
        duration: 0.6,
      })
      .to(
        transitionElement2,
        {
          yPercent: 100,
          duration: 0.4,
        },
        "-=0.4"
      )
      .set([transitionElement, transitionElement2], {
        display: "none",
      });
  }
};

export const animatePageOut = (callback) => {
  const transitionElement = document.getElementById("transition-element");
  const transitionElement2 = document.getElementById("transition-element-2");

  if (transitionElement && transitionElement2) {
    const tl = gsap.timeline({
      onComplete: () => {
        callback();
      },
    });

    tl.set([transitionElement, transitionElement2], {
      display: "flex",
      yPercent: -100,
    })
      .to(transitionElement, {
        yPercent: 0,
        duration: 0.6,
      })
      .to(
        transitionElement2,
        {
          yPercent: 0,
          duration: 0.6,
        },
        "-=0.4"
      );
  } else {
    callback;
  }
};
