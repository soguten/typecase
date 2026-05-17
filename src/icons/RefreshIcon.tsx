import type { IconProps } from "./types.ts";

export const RefreshIcon = ({ size = 16, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 2a6 6 0 0 1 5.3 3.18l.77-1.24a.75.75 0 1 1 1.28.8l-1.55 2.5a.75.75 0 0 1-1.03.25l-2.5-1.5a.75.75 0 1 1 .78-1.28l1.05.63A4.5 4.5 0 1 0 12.5 8a.75.75 0 0 1 1.5 0A6 6 0 1 1 8 2" />
  </svg>
);
