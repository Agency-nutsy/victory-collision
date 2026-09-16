export const easing = {
  premium: [0.22, 1, 0.36, 1] as const, // Custom cubic-bezier for a buttery, responsive feel
  easeOut: [0.33, 1, 0.68, 1] as const,
  easeIn: [0.32, 0, 0.67, 0] as const,
};

export const durations = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.6,
  reveal: 0.8,
};

export const getFramerMotionTransition = (
  duration: number = durations.medium,
  delay: number = 0
) => ({
  duration,
  delay,
  ease: easing.premium,
});
