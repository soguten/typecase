import type { IconProps } from "./types.ts";

export const DownloadIcon = ({ size = 16, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M8 1.75a.75.75 0 0 1 .75.75v6.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V2.5A.75.75 0 0 1 8 1.75" />
    <path d="M2.75 11.5a.75.75 0 0 1 .75.75v.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-.5a.75.75 0 0 1 1.5 0v.5A2.25 2.25 0 0 1 11.75 15h-7.5A2.25 2.25 0 0 1 2 12.75v-.5a.75.75 0 0 1 .75-.75" />
  </svg>
);
