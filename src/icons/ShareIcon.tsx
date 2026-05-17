import type { IconProps } from "./types.ts";

export const ShareIcon = ({ size = 16, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M11.5 2a2.5 2.5 0 1 1-2.45 3.02L5.92 6.58a2.5 2.5 0 0 1 0 2.84l3.13 1.56A2.5 2.5 0 1 1 8.5 12c0-.15.01-.3.04-.44L5.4 9.99a2.5 2.5 0 1 1 0-3.98l3.14-1.57A2.5 2.5 0 0 1 11.5 2m0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7 3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7 3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
  </svg>
);
