import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.264 0h7.464C14.448 0 16 1.536 16 4.264v7.472C16 14.448 14.456 16 11.736 16H4.264C1.536 16 0 14.448 0 11.736V4.264C0 1.536 1.536 0 4.264 0zm4.392 8.664h2.272a.674.674 0 00.664-.672.662.662 0 00-.664-.664H8.656V5.072a.662.662 0 00-.664-.664.662.662 0 00-.664.664v2.256H5.064a.694.694 0 00-.472.192.674.674 0 00.472 1.144h2.264v2.264c0 .368.296.664.664.664a.662.662 0 00.664-.664V8.664z"
        fill="#E4948F"
      />
    </svg>
  );
}

export default SvgComponent;
