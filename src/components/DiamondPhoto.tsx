export interface IDiamondPhotoProps {
  src: string;
  size: number;
}

export const DiamondPhoto = ({ src, size }: IDiamondPhotoProps) => {
  const point1 = {
    x: size / 2,
    y: 0,
  };

  const point2 = {
    x: size,
    y: size / 2,
  };

  const point3 = {
    x: size / 2,
    y: size,
  };

  const point4 = {
    x: 0,
    y: size / 2,
  };

  const points = `${point1.x},${point1.y} ${point2.x},${point2.y} ${point3.x},${point3.y} ${point4.x},${point4.y}`;

  return (
    <svg width={size} height={size}>
      <mask id="svgmask1">
        <polygon fill="#ffffff" points={points}></polygon>
      </mask>

      <image
        href={src}
        height="100%"
        width="100%"
        mask="url(#svgmask1)"
        style={{ objectFit: "cover" }}
      ></image>
    </svg>
  );
};
