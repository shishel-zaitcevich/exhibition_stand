import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  height?: number;
  direction?: "top" | "bottom";
  offset?: number;
  degree?: number;
  accent?: boolean;
}

export const Ray: FC<Props> = ({height, direction, offset, degree, accent}) => {
  return <Box sx={{
    width: '200%',
    height: height ?? 8,
    position: 'absolute',
    [direction ?? 'top']: offset ?? 0,
    left: '-30%',
    transform: `rotate(${degree ?? 45}deg)`,
    opacity: 0.1,
    zIndex: accent ? 1 : -1,
    transformOrigin: 'left center',
    background: 'radial-gradient(circle, #8AA5FF 0%, rgba(138, 165, 255, 0) 90%)',
    filter: 'blur(5px)',
  }} />
};
