import * as React from "react";
const Trash = ({ onClick }: { onClick: () => void }) => (
  <svg
    onClick={onClick}
    width={30}
    height={31}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1201_1641)">
      <path
        d="M13.3335 14.5001C13.5987 14.5001 13.8531 14.6054 14.0406 14.793C14.2281 14.9805 14.3335 15.2349 14.3335 15.5001V20.1667C14.3335 20.432 14.2281 20.6863 14.0406 20.8739C13.8531 21.0614 13.5987 21.1667 13.3335 21.1667C13.0683 21.1667 12.8139 21.0614 12.6264 20.8739C12.4389 20.6863 12.3335 20.432 12.3335 20.1667V15.5001C12.3335 15.2349 12.4389 14.9805 12.6264 14.793C12.8139 14.6054 13.0683 14.5001 13.3335 14.5001Z"
        fill="#00A296"
      />
      <path
        d="M18.6668 14.5001C18.932 14.5001 19.1864 14.6054 19.3739 14.793C19.5615 14.9805 19.6668 15.2349 19.6668 15.5001V20.1667C19.6668 20.432 19.5615 20.6863 19.3739 20.8739C19.1864 21.0614 18.932 21.1667 18.6668 21.1667C18.4016 21.1667 18.1473 21.0614 17.9597 20.8739C17.7722 20.6863 17.6668 20.432 17.6668 20.1667V15.5001C17.6668 15.2349 17.7722 14.9805 17.9597 14.793C18.1473 14.6054 18.4016 14.5001 18.6668 14.5001Z"
        fill="#00A296"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3667 5.60586C10.4195 6.32983 9.7395 7.34785 9.4335 8.5001H6.3335C6.06828 8.5001 5.81393 8.60545 5.62639 8.79299C5.43885 8.98053 5.3335 9.23488 5.3335 9.5001C5.3335 9.76531 5.43885 10.0197 5.62639 10.2072C5.81393 10.3947 6.06828 10.5001 6.3335 10.5001H7.3335V22.1668C7.3335 23.4928 7.86028 24.7646 8.79796 25.7023C9.73564 26.64 11.0074 27.1668 12.3335 27.1668H19.6668C20.3234 27.1668 20.9736 27.0374 21.5802 26.7862C22.1869 26.5349 22.7381 26.1666 23.2024 25.7023C23.6667 25.238 24.035 24.6868 24.2862 24.0802C24.5375 23.4736 24.6668 22.8234 24.6668 22.1668V10.5001H25.6668C25.932 10.5001 26.1864 10.3947 26.3739 10.2072C26.5615 10.0197 26.6668 9.76531 26.6668 9.5001C26.6668 9.23488 26.5615 8.98053 26.3739 8.79299C26.1864 8.60545 25.932 8.5001 25.6668 8.5001H22.2335C22.0027 7.37085 21.389 6.35596 20.4962 5.62709C19.6033 4.89822 18.4861 4.50011 17.3335 4.5001H14.6668C13.4747 4.49295 12.3139 4.88188 11.3667 5.60586ZM12.932 7.04944C12.4246 7.40766 12.0407 7.91451 11.8335 8.5001H20.1628C19.9558 7.91516 19.5726 7.40876 19.0659 7.05059C18.5592 6.69243 17.954 6.5001 17.3335 6.5001H14.6668C14.0457 6.49928 13.4395 6.69121 12.932 7.04944ZM22.6668 10.5001H9.3335V22.1668C9.3335 22.9624 9.64957 23.7255 10.2122 24.2881C10.7748 24.8507 11.5378 25.1668 12.3335 25.1668H19.6668C20.4625 25.1668 21.2255 24.8507 21.7881 24.2881C22.3508 23.7255 22.6668 22.9624 22.6668 22.1668V10.5001Z"
        fill="#00A296"
      />
    </g>
    <defs>
      <clipPath id="clip0_1201_1641">
        <rect y={0.5} width={32} height={32} rx={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default Trash;
