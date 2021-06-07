import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.034 0H3.965C1.588 0 0 1.703 0 4.141V9.86C0 12.299 1.583 14 3.966 14h6.067C12.416 14 14 12.3 14 9.859V4.14C14 1.701 12.416 0 10.034 0zM3.965 1.05h6.069c1.785 0 2.916 1.214 2.916 3.091V9.86c0 1.877-1.13 3.091-2.917 3.091H3.966c-1.786 0-2.916-1.214-2.916-3.091V4.14c0-1.874 1.134-3.091 2.915-3.091zm5.898 3.918a.525.525 0 00-.743 0L6.17 7.918l-1.29-1.29-.06-.05a.525.525 0 00-.683.793l1.662 1.661.06.051a.525.525 0 00.683-.05L9.863 5.71l.05-.059a.525.525 0 00-.05-.683z"
        fill="#C5CAD3"
      />
    </svg>
  );
}

export default SvgComponent;
