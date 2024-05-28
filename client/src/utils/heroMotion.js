export const heroMotionInitial = { opacity: 0 };

export const heroMotionAnimate = { opacity: 1 };

export const heroMotionTransition = (delay) => {
  return {
    duration: 2.5,
    delay: delay,
    ease: "easeIn",
  };
};
