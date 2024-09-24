"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export interface IAnimateProps extends HTMLMotionProps<"div"> {}

export const Animate = ({ children, ...props }: IAnimateProps) => {
  return <motion.div {...props}>{children}</motion.div>;
};
