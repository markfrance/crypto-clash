import { controlPoint } from './controlPoint';

export const bezierCommand = (point: number[], i: any, a: any) => {
  // start control point
  const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point);

  // end control point
  const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true);

  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
};
