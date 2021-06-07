import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <rect width={20} height={20} rx={6} fill="#F3F5F9" />
      <path
        d="M11.26 10.74h2.01a.751.751 0 00.739-.749c0-.41-.33-.739-.74-.739H6.74a.773.773 0 00-.525.214A.771.771 0 006 9.99c0 .41.33.74.74.749h4.52z"
        fill="#C1C7D0"
      />
    </svg>
  );
}

export default SvgComponent;
