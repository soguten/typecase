import type { IconProps } from "./types.ts";

export const EyeIcon = ({ size = 16, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M16 8s-2.8 5-8 5-8-5-8-5 2.8-5 8-5 8 5 8 5M1.73 8a13.1 13.1 0 0 0 1.67 1.95C4.78 11.14 6.18 12 8 12s3.22-.86 4.6-2.05A13.1 13.1 0 0 0 14.27 8a13.1 13.1 0 0 0-1.67-1.95C11.22 4.86 9.82 4 8 4s-3.22.86-4.6 2.05A13.1 13.1 0 0 0 1.73 8" />
    <path d="M8 5.5A2.5 2.5 0 1 1 5.5 8 2.5 2.5 0 0 1 8 5.5m0 1.5A1 1 0 1 0 9 8 1 1 0 0 0 8 7" />
  </svg>
);
