interface Props {
  children: React.ReactNode;
  size?: string;
}

export const SVGTile = ({ children, size }: Props) => {
  return (
    <svg
      width={size ? size : '512'}
      height={size ? size : '512'}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  );
};
