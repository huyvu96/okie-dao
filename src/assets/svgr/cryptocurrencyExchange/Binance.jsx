import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        opacity={0.2}
        d="M12.632 24c6.623 0 11.992-5.373 11.992-12S19.255 0 12.632 0C6.01 0 .641 5.373.641 12s5.368 12 11.991 12z"
        fill="#F3BA2F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.126 10.97l2.508-2.51 2.51 2.511 1.458-1.46-3.968-3.972-3.968 3.97 1.46 1.46zM6.176 12l1.46-1.46L9.096 12l-1.46 1.46L6.176 12zm6.458 3.542l-2.508-2.51-1.462 1.459.002.002 3.968 3.97 3.968-3.972.001-.001-1.46-1.459-2.509 2.51zm3.538-3.54l1.46-1.461L19.09 12l-1.46 1.46-1.46-1.46zm-3.538-1.484L14.114 12h.001v.001l-1.48 1.482-1.48-1.48-.003-.003.002-.002.26-.26.126-.125 1.094-1.095z"
        fill="#F3BA2F"
      />
    </svg>
  );
}

export default SvgComponent;
