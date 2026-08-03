import React, { forwardRef } from 'react';

export const AnimatePresence = ({ children }) => {
  return <>{children}</>;
};

// Filter out framer-motion specific props to prevent HTML attribute warnings
const filterProps = (props) => {
  const {
    initial,
    animate,
    exit,
    transition,
    variants,
    whileHover,
    whileTap,
    whileInView,
    viewport,
    onAnimationStart,
    onAnimationComplete,
    ...rest
  } = props;
  return rest;
};

const createMotionComponent = (TagName) => {
  return forwardRef((props, ref) => {
    const cleanProps = filterProps(props);
    return <TagName ref={ref} {...cleanProps} />;
  });
};

export const motion = new Proxy(
  {},
  {
    get: (target, prop) => {
      return createMotionComponent(prop);
    },
  }
);
