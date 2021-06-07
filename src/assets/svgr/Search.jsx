import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 7.584a5.242 5.242 0 1110.485 0 5.242 5.242 0 01-10.485 0zM6.742.842a6.742 6.742 0 104.033 12.146l1.955 1.95a.75.75 0 101.06-1.063l-1.92-1.913A6.742 6.742 0 006.742.842z"
        fill="#E4948F"
      />
    </svg>
  );
}

export default SvgComponent;
