import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        opacity={0.1}
        d="M23.936 12c0 6.592-5.344 11.936-11.937 11.936-6.592 0-11.937-5.344-11.937-11.937C.063 5.407 5.407.062 12 .062 18.592.063 23.936 5.407 23.936 12z"
        fill="#354053"
      />
      <path d="M11.96 5.336l-.089.3v8.698l.088.088 4.038-2.387-4.038-6.7z" fill="#354053" />
      <path d="M11.96 5.336l-4.038 6.7 4.038 2.386V5.336z" fill="#515B6B" />
      <path d="M11.96 15.735l-.05.06v3.1l.05.144L16 13.35l-4.04 2.386z" fill="#13171F" />
      <path d="M11.96 19.04v-3.305L7.921 13.35l4.038 5.69z" fill="#354053" />
      <path
        d="M11.96 14.421l4.038-2.387-4.037-1.835v4.222zM7.922 12.034l4.038 2.387V10.2l-4.038 1.835z"
        fill="#151921"
      />
    </svg>
  );
}

export default SvgComponent;
