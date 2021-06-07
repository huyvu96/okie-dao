import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        opacity={0.2}
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#F3BA2F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.492 10.97l2.51-2.51 2.51 2.511 1.46-1.46-3.97-3.972-3.97 3.97 1.46 1.46zM5.539 12L7 10.54 8.46 12 7 13.46 5.54 12zm6.463 3.542l-2.51-2.51-1.463 1.459.002.002 3.97 3.97 3.971-3.972.002-.001-1.461-1.459-2.511 2.51zm3.54-3.54l1.46-1.46 1.46 1.46-1.46 1.46-1.46-1.46zm-3.54-1.484L13.482 12h.002l-.001.001-1.481 1.482-1.481-1.48-.002-.003.002-.002.259-.26.127-.125 1.095-1.095z"
        fill="#F3BA2F"
      />
    </svg>
  );
}

export default SvgComponent;
