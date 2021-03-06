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
        d="M23.936 12.001c0 6.593-5.344 11.937-11.937 11.937-6.592 0-11.937-5.344-11.937-11.937C.063 5.41 5.407.064 12 .064c6.593 0 11.937 5.345 11.937 11.937z"
        fill="#00A478"
      />
      <path d="M10.774 11.792V9.704H7.94V7.873h7.915V9.73h-2.832v2.063h-2.25z" fill="#00A478" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.723 12.023c0-.696 2.276-1.263 5.109-1.263 2.832 0 5.108.567 5.108 1.263s-2.276 1.263-5.109 1.263c-2.832 0-5.108-.567-5.108-1.263zm9.794 0c-.186-.258-1.72-1.057-4.685-1.057s-4.5.773-4.686 1.057c.185.258 1.72.645 4.686.645 2.99 0 4.5-.387 4.685-.645z"
        fill="#00A478"
      />
      <path
        d="M13.024 12.437v-1.444c-.37-.026-.767-.052-1.164-.052-.371 0-.715 0-1.06.026v1.444c.318 0 .689.026 1.06.026a8.77 8.77 0 001.164 0zM11.832 13.288c-.37 0-.714 0-1.059-.026v3.841h2.224v-3.867c-.37.026-.768.052-1.165.052z"
        fill="#00A478"
      />
    </svg>
  );
}

export default SvgComponent;
