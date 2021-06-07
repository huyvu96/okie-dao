import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.264 9.742a.87.87 0 010-1.248L3.827 5 .264 1.506a.87.87 0 010-1.248.913.913 0 011.272 0l4.2 4.118a.87.87 0 010 1.248l-4.2 4.118a.913.913 0 01-1.272 0z"
        fill="#3B3F45"
      />
    </svg>
  );
}

export default SvgComponent;
