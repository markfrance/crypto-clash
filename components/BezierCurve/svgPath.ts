export const svgPath = (points: number[][], command: any) => {
  const d = points.reduce(
    (acc: string, point: number[], i: number, a: any) =>
      i === 0 ? `M ${point[0]},${point[1]}}` : `${acc} ${command(point, i, a)}`,
    '',
  );
  return d;
};
