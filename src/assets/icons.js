const SeasonSquare = ({ colors }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.6666 17.5L25.6666 10.5C25.6666 4.66669 23.3333 2.33336 17.5 2.33336L10.5 2.33336C4.66665 2.33336 2.33331 4.66669 2.33331 10.5L2.33331 17.5C2.33331 23.3334 4.66665 25.6667 10.5 25.6667L17.5 25.6667C23.3333 25.6667 25.6666 23.3334 25.6666 17.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4133 18.1183L16.52 14L12.4133 9.88168"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const SircleNext = ({ colors }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12H14.5"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15L15.5 12L12.5 9"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ArrowPrevousNext = ({ colors }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57 5.92999L3.5 12L9.57 18.07"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4999 12H3.66992"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const NoImg = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 33H22.5C30 33 33 30 33 22.5V13.5C33 6 30 3 22.5 3H13.5C6 3 3 6 3 13.5V22.5C3 30 6 33 13.5 33Z"
        stroke="#E8E8E8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 15C15.1569 15 16.5 13.6569 16.5 12C16.5 10.3431 15.1569 9 13.5 9C11.8431 9 10.5 10.3431 10.5 12C10.5 13.6569 11.8431 15 13.5 15Z"
        stroke="#E8E8E8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.00488 28.425L11.3999 23.46C12.5849 22.665 14.2949 22.755 15.3599 23.67L15.8549 24.105C17.0249 25.11 18.9149 25.11 20.0849 24.105L26.3249 18.75C27.4949 17.745 29.3849 17.745 30.5549 18.75L32.9999 20.85"
        stroke="#E8E8E8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ActiveHeartIcons = ({ colors }) => {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 16 16"
      fill={colors}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41337 12.8733C8.18671 12.9533 7.81337 12.9533 7.58671 12.8733C5.65337 12.2133 1.33337 9.45998 1.33337 4.79332C1.33337 2.73332 2.99337 1.06665 5.04004 1.06665C6.25337 1.06665 7.32671 1.65332 8.00004 2.55998C8.67337 1.65332 9.75337 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41337 12.8733Z"
        stroke={colors}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const HeartIcons = ({ colors }) => {
  return (
    <svg
      width="24"
      height="20"
      viewBox="0 0 16 16"
      fill={`none`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41337 12.8733C8.18671 12.9533 7.81337 12.9533 7.58671 12.8733C5.65337 12.2133 1.33337 9.45998 1.33337 4.79332C1.33337 2.73332 2.99337 1.06665 5.04004 1.06665C6.25337 1.06665 7.32671 1.65332 8.00004 2.55998C8.67337 1.65332 9.75337 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41337 12.8733Z"
        stroke={colors}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const HeartLinkIcons = ({ colors }) => {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 20 18"
      fill={`${colors ? "#D50000" : "none"}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41337 12.8733C8.18671 12.9533 7.81337 12.9533 7.58671 12.8733C5.65337 12.2133 1.33337 9.45998 1.33337 4.79332C1.33337 2.73332 2.99337 1.06665 5.04004 1.06665C6.25337 1.06665 7.32671 1.65332 8.00004 2.55998C8.67337 1.65332 9.75337 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41337 12.8733Z"
        stroke={`${colors ? "#D50000" : "#000"}`}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const StarIcons = ({ width }) => {
  return (
    <svg
      width={width ? width : 20}
      height={width ? width : 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9321 11.9334C14.7163 12.1425 14.6171 12.445 14.6663 12.7417L15.4071 16.8417C15.4696 17.1892 15.3229 17.5409 15.0321 17.7417C14.7471 17.95 14.3679 17.975 14.0571 17.8084L10.3663 15.8834C10.2379 15.815 10.0954 15.7784 9.94961 15.7742H9.72378C9.64544 15.7859 9.56878 15.8109 9.49878 15.8492L5.80711 17.7834C5.62461 17.875 5.41794 17.9075 5.21545 17.875C4.72211 17.7817 4.39294 17.3117 4.47378 16.8159L5.21545 12.7159C5.26461 12.4167 5.16544 12.1125 4.94961 11.9L1.94045 8.98337C1.68878 8.73921 1.60128 8.37254 1.71628 8.04171C1.82795 7.71171 2.11294 7.47087 2.45711 7.41671L6.59878 6.81587C6.91378 6.78337 7.19044 6.59171 7.33211 6.30837L9.15711 2.56671C9.20044 2.48337 9.25628 2.40671 9.32378 2.34171L9.39878 2.28337C9.43794 2.24004 9.48294 2.20421 9.53294 2.17504L9.62378 2.14171L9.76544 2.08337H10.1163C10.4296 2.11587 10.7054 2.30337 10.8496 2.58337L12.6988 6.30837C12.8321 6.58087 13.0913 6.77004 13.3904 6.81587L17.5321 7.41671C17.8821 7.46671 18.1746 7.70837 18.2904 8.04171C18.3996 8.37587 18.3054 8.74254 18.0488 8.98337L14.9321 11.9334Z"
        fill="#F4A622"
      />
    </svg>
  );
};
const SaveBasketIcons = () => {
  return (
    <span className="w-full">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="4" fill="#FCFCFC" />
        <path
          d="M9 9.11334V8.46667C9 6.96667 10.2067 5.49334 11.7067 5.35334C13.4933 5.18001 15 6.58667 15 8.34001V9.26001"
          stroke="black"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.99988 18.6667H13.9999C16.6799 18.6667 17.1599 17.5934 17.2999 16.2867L17.7999 12.2867C17.9799 10.66 17.5132 9.33337 14.6666 9.33337H9.33322C6.48655 9.33337 6.01988 10.66 6.19988 12.2867L6.69988 16.2867C6.83988 17.5934 7.31988 18.6667 9.99988 18.6667Z"
          stroke="black"
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.3306 12H14.3366"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.66268 12H9.66867"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="1" y="13" width="10" height="10" rx="5" fill="#FCFCFC" />
        <path
          d="M4 18H8"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 20V16"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
const SaveMarketIcons = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.625 14.7521V14.0246C14.625 12.3371 15.9825 10.6796 17.67 10.5221C19.68 10.3271 21.375 11.9096 21.375 13.8821V14.9171"
        stroke="white"
        strokidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 25.5H20.25C23.265 25.5 23.805 24.2925 23.9625 22.8225L24.525 18.3225C24.7275 16.4925 24.2025 15 21 15H15C11.7975 15 11.2725 16.4925 11.475 18.3225L12.0375 22.8225C12.195 24.2925 12.735 25.5 15.75 25.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6216 18H20.6283"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3709 18H15.3776"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="6" y="20" width="10" height="10" rx="5" fill="#007DCA" />
      <path
        d="M8.66663 25H13.3333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 27.3327V22.666"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const InputCheckedTrueIcons = ({ colors }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.99998 14.6667H9.99998C13.3333 14.6667 14.6666 13.3333 14.6666 10V6C14.6666 2.66667 13.3333 1.33334 9.99998 1.33334H5.99998C2.66665 1.33334 1.33331 2.66667 1.33331 6V10C1.33331 13.3333 2.66665 14.6667 5.99998 14.6667Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16669 7.99999L7.05335 9.88666L10.8334 6.11333"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CheckedStatusIcons = ({ colors }) => {
  return (
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66662 7.115L10.7946 0.986328L11.738 1.92899L4.66662 9.00033L0.42395 4.75766L1.36662 3.81499L4.66662 7.115Z"
        fill={colors}
      />
    </svg>
  );
};
const ArrowTopIcons = ({ colors }) => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.77661 4.62647L4.25394 1.14913C4.66461 0.738465 5.33661 0.738465 5.74728 1.14913L9.22461 4.62646"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const LocationIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 11.1917C11.4359 11.1917 12.6 10.0276 12.6 8.5917C12.6 7.15576 11.4359 5.9917 10 5.9917C8.56406 5.9917 7.4 7.15576 7.4 8.5917C7.4 10.0276 8.56406 11.1917 10 11.1917Z"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M3.01667 7.07484C4.65833 -0.141827 15.35 -0.133494 16.9833 7.08317C17.9417 11.3165 15.3083 14.8998 13 17.1165C11.325 18.7332 8.675 18.7332 6.99167 17.1165C4.69167 14.8998 2.05833 11.3082 3.01667 7.07484Z"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
};
const LocationColoursIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 11.1917C11.4359 11.1917 12.6 10.0276 12.6 8.5917C12.6 7.15576 11.4359 5.9917 10 5.9917C8.56406 5.9917 7.4 7.15576 7.4 8.5917C7.4 10.0276 8.56406 11.1917 10 11.1917Z"
        stroke={colors}
        strokeWidth="1.5"
      />
      <path
        d="M3.01667 7.07484C4.65833 -0.141827 15.35 -0.133494 16.9833 7.08317C17.9417 11.3165 15.3083 14.8998 13 17.1165C11.325 18.7332 8.675 18.7332 6.99167 17.1165C4.69167 14.8998 2.05833 11.3082 3.01667 7.07484Z"
        stroke={colors}
        strokeWidth="1.5"
      />
    </svg>
  );
};
const UploadIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99967 6.6665V1.6665L8.33301 3.33317"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.6665L11.6667 3.33317"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83333 10C2.5 10 2.5 11.4917 2.5 13.3333V14.1667C2.5 16.4667 2.5 18.3333 6.66667 18.3333H13.3333C16.6667 18.3333 17.5 16.4667 17.5 14.1667V13.3333C17.5 11.4917 17.5 10 14.1667 10C13.3333 10 13.1 10.175 12.6667 10.5L11.8167 11.4C10.8333 12.45 9.16667 12.45 8.175 11.4L7.33333 10.5C6.9 10.175 6.66667 10 5.83333 10Z"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16699 9.99987V8.3332C4.16699 6.6582 4.16699 5.27487 6.66699 5.0332"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.833 9.99987V8.3332C15.833 6.6582 15.833 5.27487 13.333 5.0332"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const HouseStatisticIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.51667 2.36664L3.025 5.86664C2.275 6.44997 1.66667 7.69164 1.66667 8.63331V14.8083C1.66667 16.7416 3.24167 18.325 5.175 18.325H14.825C16.7583 18.325 18.3333 16.7416 18.3333 14.8166V8.74997C18.3333 7.74164 17.6583 6.44997 16.8333 5.87497L11.6833 2.26664C10.5167 1.44997 8.64167 1.49164 7.51667 2.36664Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 9.5835L10.25 13.0835L8.91667 11.0835L6.25 13.7502"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0833 9.5835H13.75V11.2502"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const DashboardStatisticIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.75 7.9165L10.25 11.4165L8.91667 9.4165L6.25 12.0832"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0833 7.9165H13.75V9.58317"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49999 18.3332H12.5C16.6667 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6667 1.6665 12.5 1.6665H7.49999C3.33332 1.6665 1.66666 3.33317 1.66666 7.49984V12.4998C1.66666 16.6665 3.33332 18.3332 7.49999 18.3332Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const WarningSircleIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18.3332C14.5833 18.3332 18.3333 14.5832 18.3333 9.99984C18.3333 5.4165 14.5833 1.6665 10 1.6665C5.41667 1.6665 1.66667 5.4165 1.66667 9.99984C1.66667 14.5832 5.41667 18.3332 10 18.3332Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.6665V10.8332"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99542 13.3335H10.0029"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const PersonPlusIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2305 12.6719C5.02717 12.6719 2.29133 13.156 2.29133 15.096C2.29133 17.036 5.0105 17.5377 8.2305 17.5377C11.4347 17.5377 14.1697 17.0527 14.1697 15.1135C14.1697 13.1744 11.4513 12.6719 8.2305 12.6719Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2305 9.90484C10.333 9.90484 12.0372 8.20067 12.0372 6.09817C12.0372 3.99567 10.333 2.2915 8.2305 2.2915C6.12883 2.2915 4.42464 3.99567 4.42464 6.09817C4.41717 8.19317 6.10883 9.89734 8.20467 9.90484H8.2305Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0031 7.22412V10.5658"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.708 8.89502H14.2997"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const PersonIcons = ({ colors, width, height }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox={`0 0 ${width || "24"} ${height || "24"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9847 15.3462C8.11713 15.3462 4.81427 15.931 4.81427 18.2729C4.81427 20.6148 8.09617 21.2205 11.9847 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9847 15.3462Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9847 12.0059C14.5228 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5228 2.81445 11.9847 2.81445C9.44664 2.81445 7.38852 4.8716 7.38852 7.40969C7.37997 9.93922 9.42378 11.9973 11.9524 12.0059H11.9847Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ActivePersonIcons = ({ colors }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9847 15.3462C8.11713 15.3462 4.81427 15.931 4.81427 18.2729C4.81427 20.6148 8.09617 21.2205 11.9847 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9847 15.3462Z"
        stroke={colors}
        fill={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9847 12.0059C14.5228 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5228 2.81445 11.9847 2.81445C9.44664 2.81445 7.38852 4.8716 7.38852 7.40969C7.37997 9.93922 9.42378 11.9973 11.9524 12.0059H11.9847Z"
        stroke={colors}
        fill={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ListCollectionIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0968 13.5195H7.08017"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0968 10.0308H7.08017"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.37608 6.55029H7.08025"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2572 2.2915C13.2572 2.2915 6.85967 2.29484 6.84967 2.29484C4.54967 2.309 3.1255 3.82234 3.1255 6.13067V13.794C3.1255 16.114 4.5605 17.6332 6.8805 17.6332C6.8805 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CotegoryIcons = ({ colors }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 7.5H5.25C6.75 7.5 7.5 6.75 7.5 5.25V3.75C7.5 2.25 6.75 1.5 5.25 1.5H3.75C2.25 1.5 1.5 2.25 1.5 3.75V5.25C1.5 6.75 2.25 7.5 3.75 7.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 16.5H14.25C15.75 16.5 16.5 15.75 16.5 14.25V12.75C16.5 11.25 15.75 10.5 14.25 10.5H12.75C11.25 10.5 10.5 11.25 10.5 12.75V14.25C10.5 15.75 11.25 16.5 12.75 16.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ActiveCotegoryIcons = ({ colors }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={colors}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 7.5H5.25C6.75 7.5 7.5 6.75 7.5 5.25V3.75C7.5 2.25 6.75 1.5 5.25 1.5H3.75C2.25 1.5 1.5 2.25 1.5 3.75V5.25C1.5 6.75 2.25 7.5 3.75 7.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 16.5H14.25C15.75 16.5 16.5 15.75 16.5 14.25V12.75C16.5 11.25 15.75 10.5 14.25 10.5H12.75C11.25 10.5 10.5 11.25 10.5 12.75V14.25C10.5 15.75 11.25 16.5 12.75 16.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CotegoryMenuIcons = ({ colors }) => {
  return (
    <svg
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.56582 20.9997C5.56582 21.3587 5.85684 21.6497 6.21582 21.6497C6.57481 21.6497 6.86582 21.3587 6.86582 20.9997L5.56582 20.9997ZM5.56582 15.2271L5.56582 20.9997L6.86582 20.9997L6.86582 15.2271L5.56582 15.2271Z"
        fill="#DD006A"
      />
      <path
        d="M8.60693 18.1138L3.82536 18.1138"
        stroke="#DD006A"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M15.6442 2.07136C15.6839 1.71352 15.4278 1.39139 15.0721 1.35186L9.27501 0.707757C8.91928 0.668231 8.59867 0.926276 8.55891 1.28412C8.51915 1.64196 8.7753 1.96409 9.13103 2.00361L14.284 2.57615L13.708 7.75957C13.6683 8.11741 13.9244 8.43953 14.2802 8.47906C14.6359 8.51859 14.9565 8.26054 14.9963 7.9027L15.6442 2.07136ZM10.9241 6.11472L15.4046 2.50855L14.5955 1.49103L10.115 5.0972L10.9241 6.11472Z"
        fill="#008FCD"
      />
      <path
        d="M11.7821 9.93538C11.7821 13.034 9.28639 15.5391 6.21605 15.5391C3.1457 15.5391 0.65 13.034 0.65 9.93538C0.65 6.83681 3.1457 4.33164 6.21605 4.33164C9.28639 4.33164 11.7821 6.83681 11.7821 9.93538Z"
        stroke="url(#paint0_linear_3887_16404)"
        strokeWidth="1.3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3887_16404"
          x1="10.5"
          y1="6"
          x2="6.21604"
          y2="16.1891"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#008FCD" />
          <stop offset="1" stopColor="#DD006A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const MapSitesIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.90833 6.48348V14.5918C1.90833 16.1751 3.03333 16.8251 4.4 16.0418L6.35833 14.9251C6.78333 14.6835 7.49167 14.6585 7.93333 14.8835L12.3083 17.0751C12.75 17.2918 13.4583 17.2751 13.8833 17.0335L17.4917 14.9668C17.95 14.7001 18.3333 14.0501 18.3333 13.5168V5.40848C18.3333 3.82514 17.2083 3.17514 15.8417 3.95848L13.8833 5.07514C13.4583 5.31681 12.75 5.34181 12.3083 5.11681L7.93333 2.93348C7.49167 2.71681 6.78333 2.73348 6.35833 2.97514L2.75 5.04181C2.28333 5.30848 1.90833 5.95848 1.90833 6.48348Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.13333 3.3335V14.1668"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1083 5.5166V16.6666"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MarketIcons = ({ colors }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25745 8.415V11.7825C2.25745 15.15 3.60745 16.5 6.97495 16.5H11.0174C14.3849 16.5 15.7349 15.15 15.7349 11.7825V8.415"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99999 9C10.3725 9 11.385 7.8825 11.25 6.51L10.755 1.5H7.25249L6.74999 6.51C6.61499 7.8825 7.62749 9 8.99999 9Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7325 9C15.2475 9 16.3575 7.77 16.2075 6.2625L15.9975 4.2C15.7275 2.25 14.9775 1.5 13.0125 1.5H10.725L11.25 6.7575C11.3775 7.995 12.495 9 13.7325 9Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.23003 9C5.46753 9 6.58503 7.995 6.70503 6.7575L6.87003 5.1L7.23003 1.5H4.94253C2.97753 1.5 2.22753 2.25 1.95753 4.2L1.75503 6.2625C1.60503 7.77 2.71503 9 4.23003 9Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.75C7.7475 12.75 7.125 13.3725 7.125 14.625V16.5H10.875V14.625C10.875 13.3725 10.2525 12.75 9 12.75Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MapIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49996 18.3333H12.5C16.6666 18.3333 18.3333 16.6667 18.3333 12.5V7.5C18.3333 3.33333 16.6666 1.66667 12.5 1.66667H7.49996C3.33329 1.66667 1.66663 3.33333 1.66663 7.5V12.5C1.66663 16.6667 3.33329 18.3333 7.49996 18.3333Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 1.66667L11.625 18.3333"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.60832 10.1833L1.66663 12.5"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MapNavMenuIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={colors}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49996 18.3333H12.5C16.6666 18.3333 18.3333 16.6667 18.3333 12.5V7.5C18.3333 3.33333 16.6666 1.66667 12.5 1.66667H7.49996C3.33329 1.66667 1.66663 3.33333 1.66663 7.5V12.5C1.66663 16.6667 3.33329 18.3333 7.49996 18.3333Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 1.66667L11.625 18.3333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.60832 10.1833L1.66663 12.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const PrivateCheckIcons = () => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.17875 1.95148L4.8125 3.59648C3.80625 3.97273 2.98375 5.16273 2.98375 6.23023V12.7315C2.98375 13.764 3.66625 15.1202 4.4975 15.7415L8.26 18.5502C9.49375 19.4777 11.5237 19.4777 12.7575 18.5502L16.52 15.7415C17.3512 15.1202 18.0338 13.764 18.0338 12.7315V6.23023C18.0338 5.15398 17.2112 3.96398 16.205 3.58773L11.8387 1.95148C11.095 1.68023 9.905 1.68023 9.17875 1.95148Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.91875 10.3865L9.3275 11.7952L13.09 8.03271"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CommentIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.08334 15.8332H6.66667C3.33334 15.8332 1.66667 14.9998 1.66667 10.8332V6.6665C1.66667 3.33317 3.33334 1.6665 6.66667 1.6665H13.3333C16.6667 1.6665 18.3333 3.33317 18.3333 6.6665V10.8332C18.3333 14.1665 16.6667 15.8332 13.3333 15.8332H12.9167C12.6583 15.8332 12.4083 15.9582 12.25 16.1665L11 17.8332C10.45 18.5665 9.55001 18.5665 9.00001 17.8332L7.75001 16.1665C7.61667 15.9832 7.30834 15.8332 7.08334 15.8332Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3304 9.16667H13.3379"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99624 9.16667H10.0037"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66209 9.16667H6.66957"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const PhoneIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3083 15.2748C18.3083 15.5748 18.2417 15.8832 18.1 16.1832C17.9583 16.4832 17.775 16.7665 17.5333 17.0332C17.125 17.4832 16.675 17.8082 16.1667 18.0165C15.6667 18.2248 15.125 18.3332 14.5417 18.3332C13.6917 18.3332 12.7833 18.1332 11.825 17.7248C10.8667 17.3165 9.90834 16.7665 8.95834 16.0748C8.00001 15.3748 7.09167 14.5998 6.22501 13.7415C5.36667 12.8748 4.59167 11.9665 3.90001 11.0165C3.21667 10.0665 2.66667 9.1165 2.26667 8.17484C1.86667 7.22484 1.66667 6.3165 1.66667 5.44984C1.66667 4.88317 1.76667 4.3415 1.96667 3.8415C2.16667 3.33317 2.48334 2.8665 2.92501 2.44984C3.45834 1.92484 4.04167 1.6665 4.65834 1.6665C4.89167 1.6665 5.12501 1.7165 5.33334 1.8165C5.55001 1.9165 5.74167 2.0665 5.89167 2.28317L7.82501 5.00817C7.97501 5.2165 8.08334 5.40817 8.15834 5.5915C8.23334 5.7665 8.27501 5.9415 8.27501 6.09984C8.27501 6.29984 8.21667 6.49984 8.10001 6.6915C7.99167 6.88317 7.83334 7.08317 7.63334 7.28317L7.00001 7.9415C6.90834 8.03317 6.86667 8.1415 6.86667 8.27484C6.86667 8.3415 6.87501 8.39984 6.89167 8.4665C6.91667 8.53317 6.94167 8.58317 6.95834 8.63317C7.10834 8.90817 7.36667 9.2665 7.73334 9.69984C8.10834 10.1332 8.50834 10.5748 8.94167 11.0165C9.39167 11.4582 9.82501 11.8665 10.2667 12.2415C10.7 12.6082 11.0583 12.8582 11.3417 13.0082C11.3833 13.0248 11.4333 13.0498 11.4917 13.0748C11.5583 13.0998 11.625 13.1082 11.7 13.1082C11.8417 13.1082 11.95 13.0582 12.0417 12.9665L12.675 12.3415C12.8833 12.1332 13.0833 11.9748 13.275 11.8748C13.4667 11.7582 13.6583 11.6998 13.8667 11.6998C14.025 11.6998 14.1917 11.7332 14.375 11.8082C14.5583 11.8832 14.75 11.9915 14.9583 12.1332L17.7167 14.0915C17.9333 14.2415 18.0833 14.4165 18.175 14.6248C18.2583 14.8332 18.3083 15.0415 18.3083 15.2748Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
const EmailIcons = ({ colors }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.6667 8.99935C15.6666 7.51342 15.17 6.07013 14.2558 4.89868C13.3417 3.72722 12.0624 2.89475 10.621 2.53346C9.17968 2.17217 7.65895 2.30277 6.30032 2.90452C4.94168 3.50627 3.82303 4.54467 3.12199 5.85484C2.42095 7.16501 2.17771 8.67183 2.43091 10.136C2.6841 11.6002 3.41921 12.9379 4.5195 13.9366C5.61979 14.9352 7.02219 15.5377 8.504 15.6483C9.98582 15.7588 11.4621 15.3712 12.6984 14.5468L13.6234 15.9335C12.2553 16.8483 10.6459 17.3353 9.00008 17.3327C4.39758 17.3327 0.666748 13.6018 0.666748 8.99935C0.666748 4.39685 4.39758 0.666016 9.00008 0.666016C13.6026 0.666016 17.3334 4.39685 17.3334 8.99935V10.2493C17.3335 10.8733 17.1335 11.4809 16.7628 11.9827C16.392 12.4846 15.8701 12.8544 15.2737 13.0377C14.6773 13.221 14.0378 13.2083 13.4492 13.0013C12.8605 12.7943 12.3538 12.404 12.0034 11.8877C11.4472 12.466 10.7359 12.8714 9.95484 13.0553C9.17381 13.2391 8.3563 13.1935 7.60055 12.924C6.8448 12.6545 6.18294 12.1724 5.6945 11.5359C5.20606 10.8993 4.91182 10.1352 4.84712 9.33543C4.78241 8.53567 4.95001 7.73423 5.32977 7.02741C5.70953 6.32059 6.28529 5.73845 6.98789 5.35093C7.69049 4.96342 8.49003 4.78701 9.29046 4.8429C10.0909 4.8988 10.8582 5.18461 11.5001 5.66602H13.1667V10.2493C13.1667 10.5809 13.2984 10.8988 13.5329 11.1332C13.7673 11.3677 14.0852 11.4993 14.4167 11.4993C14.7483 11.4993 15.0662 11.3677 15.3006 11.1332C15.5351 10.8988 15.6667 10.5809 15.6667 10.2493V8.99935ZM9.00008 6.49935C8.33704 6.49935 7.70115 6.76274 7.23231 7.23158C6.76347 7.70042 6.50008 8.33631 6.50008 8.99935C6.50008 9.66239 6.76347 10.2983 7.23231 10.7671C7.70115 11.236 8.33704 11.4993 9.00008 11.4993C9.66312 11.4993 10.299 11.236 10.7678 10.7671C11.2367 10.2983 11.5001 9.66239 11.5001 8.99935C11.5001 8.33631 11.2367 7.70042 10.7678 7.23158C10.299 6.76274 9.66312 6.49935 9.00008 6.49935Z"
        fill={colors}
      />
    </svg>
  );
};
const FooterOriginalIcons = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00001 0.333496C10.68 0.333496 13.6667 3.32016 13.6667 7.00016C13.6667 10.6802 10.68 13.6668 7.00001 13.6668C3.32001 13.6668 0.333344 10.6802 0.333344 7.00016C0.333344 3.32016 3.32001 0.333496 7.00001 0.333496ZM7.00001 1.66683C4.05334 1.66683 1.66668 4.0535 1.66668 7.00016C1.66668 9.94683 4.05334 12.3335 7.00001 12.3335C9.94668 12.3335 12.3333 9.94683 12.3333 7.00016C12.3333 4.0535 9.94668 1.66683 7.00001 1.66683ZM7.00001 3.66683C8.21334 3.66683 9.27534 4.3155 9.85868 5.2855L8.71601 5.9715C8.53618 5.67166 8.2809 5.4242 7.97561 5.25379C7.67032 5.08339 7.32569 4.99599 6.97609 5.00032C6.62649 5.00464 6.28412 5.10054 5.98314 5.27844C5.68216 5.45635 5.43308 5.71005 5.26072 6.01424C5.08837 6.31844 4.99877 6.6625 5.00086 7.01212C5.00296 7.36175 5.09666 7.70471 5.27264 8.00682C5.44862 8.30894 5.70072 8.55964 6.00381 8.73393C6.3069 8.90822 6.65038 9.00002 7.00001 9.00016C7.34543 9.00039 7.68502 8.91109 7.98564 8.74097C8.28627 8.57085 8.53768 8.32572 8.71534 8.0295L9.85868 8.71483C9.48402 9.34057 8.91444 9.82614 8.23729 10.0971C7.56015 10.368 6.81282 10.4093 6.10994 10.2146C5.40706 10.02 4.78744 9.60017 4.3461 9.01953C3.90477 8.43888 3.66609 7.72949 3.66668 7.00016C3.66668 5.16016 5.16001 3.66683 7.00001 3.66683Z"
        fill="black"
      />
    </svg>
  );
};
const MyPurchaseIcons = ({ colors }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9.15H11.25"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12.15H9.285"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 4.5H10.5C12 4.5 12 3.75 12 3C12 1.5 11.25 1.5 10.5 1.5H7.5C6.75 1.5 6 1.5 6 3C6 4.5 6.75 4.5 7.5 4.5Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.015C14.4975 3.15 15.75 4.0725 15.75 7.5V12C15.75 15 15 16.5 11.25 16.5H6.75C3 16.5 2.25 15 2.25 12V7.5C2.25 4.08 3.5025 3.15 6 3.015"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MenuOpenIcons = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H21"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
const EyesOpenIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18301 16.25H6.24967C5.73301 16.25 5.27467 16.2333 4.86634 16.175C2.67467 15.9333 2.08301 14.9 2.08301 12.0833V7.91667C2.08301 5.1 2.67467 4.06667 4.86634 3.825C5.27467 3.76667 5.73301 3.75 6.24967 3.75H9.13301"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5166 3.75H13.7499C14.2666 3.75 14.7249 3.76667 15.1333 3.825C17.3249 4.06667 17.9166 5.1 17.9166 7.91667V12.0833C17.9166 14.9 17.3249 15.9333 15.1333 16.175C14.7249 16.2333 14.2666 16.25 13.7499 16.25H12.5166"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 1.66667V18.3333"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2451 10H9.25258"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.91209 10H5.91957"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ClothesIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_843_5301)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.66678 2.67504V7.67504C1.66547 7.70855 1.67543 7.74154 1.69507 7.76873C1.71471 7.79592 1.74289 7.81575 1.77512 7.82504L4.05845 8.65837C4.08996 8.67135 4.117 8.69324 4.13625 8.72137C4.15549 8.7495 4.16611 8.78263 4.16678 8.81671V16.6667C4.16678 17.1087 4.34238 17.5327 4.65494 17.8452C4.9675 18.1578 5.39142 18.3334 5.83345 18.3334H14.1668C14.6088 18.3334 15.0327 18.1578 15.3453 17.8452C15.6579 17.5327 15.8335 17.1087 15.8335 16.6667V8.80004C15.8343 8.76384 15.8458 8.7287 15.8665 8.69904C15.8873 8.66938 15.9164 8.64653 15.9501 8.63337L18.2251 7.80004C18.2523 7.79272 18.2769 7.7779 18.296 7.75726C18.3152 7.73663 18.3282 7.71103 18.3334 7.68337V2.68337C18.3339 2.64318 18.3198 2.60417 18.2938 2.57355C18.2678 2.54292 18.2315 2.52273 18.1918 2.51671L13.4584 1.66671C13.4212 1.66146 13.3833 1.66835 13.3502 1.68636C13.3172 1.70437 13.2909 1.73255 13.2751 1.76671L12.3834 3.65837C12.1693 4.10929 11.8317 4.49029 11.4099 4.75724C10.9881 5.02419 10.4993 5.16616 10.0001 5.16671V5.16671C9.50093 5.16616 9.01211 5.02419 8.5903 4.75724C8.16849 4.49029 7.83095 4.10929 7.61678 3.65837L6.72512 1.77504C6.71073 1.73933 6.68497 1.70936 6.65182 1.68978C6.61868 1.67019 6.58 1.66208 6.54178 1.66671L1.80845 2.50004C1.76723 2.50621 1.72982 2.52761 1.7036 2.56C1.67738 2.59239 1.66424 2.63344 1.66678 2.67504V2.67504Z"
          stroke={colors}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_843_5301">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const DollorIcons = ({ colors }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.94922 13.1357C7.94922 14.3182 8.85672 15.2715 9.98422 15.2715H12.2851C13.2659 15.2715 14.0634 14.4374 14.0634 13.4107C14.0634 12.2924 13.5776 11.8982 12.8534 11.6415L9.15922 10.3582C8.43505 10.1015 7.94922 9.70736 7.94922 8.58903C7.94922 7.56236 8.74672 6.7282 9.72755 6.7282H12.0284C13.1559 6.7282 14.0634 7.68153 14.0634 8.86403"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 5.5V16.5"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 20.1667C16.0626 20.1667 20.1666 16.0626 20.1666 11C20.1666 5.93738 16.0626 1.83333 11 1.83333C5.93737 1.83333 1.83331 5.93738 1.83331 11C1.83331 16.0626 5.93737 20.1667 11 20.1667Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const PlusIcons = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.16663 5.16667V0.166672H6.83329V5.16667H11.8333V6.83334H6.83329V11.8333H5.16663V6.83334H0.166626V5.16667H5.16663Z"
        fill="black"
      />
    </svg>
  );
};
const HomeIcons = ({ colors }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.23075 2.58494L2.87825 7.67244C2.16325 8.24078 1.70492 9.44161 1.86075 10.3399L3.07992 17.6366C3.29992 18.9383 4.54658 19.9924 5.86658 19.9924H16.1333C17.4441 19.9924 18.6999 18.9291 18.9199 17.6366L20.1391 10.3399C20.2858 9.44161 19.8274 8.24078 19.1216 7.67244L12.7691 2.59411C11.7883 1.80578 10.2024 1.80578 9.23075 2.58494Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16.5V13.75"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ActiveHomeIcons = ({ colors }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill={colors}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.23075 2.58494L2.87825 7.67244C2.16325 8.24078 1.70492 9.44161 1.86075 10.3399L3.07992 17.6366C3.29992 18.9383 4.54658 19.9924 5.86658 19.9924H16.1333C17.4441 19.9924 18.6999 18.9291 18.9199 17.6366L20.1391 10.3399C20.2858 9.44161 19.8274 8.24078 19.1216 7.67244L12.7691 2.59411C11.7883 1.80578 10.2024 1.80578 9.23075 2.58494Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16.5V13.75"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const BasketIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 1 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.875 7.03084V6.14167C6.875 4.07917 8.53417 2.05334 10.5967 1.86084C13.0533 1.62251 15.125 3.55667 15.125 5.96751V7.23251"
        stroke={"#000"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25009 20.1667H13.7501C17.4351 20.1667 18.0951 18.6909 18.2876 16.8942L18.9751 11.3942C19.2226 9.15754 18.5809 7.33337 14.6668 7.33337H7.33342C3.41925 7.33337 2.77759 9.15754 3.02509 11.3942L3.71259 16.8942C3.90509 18.6909 4.56509 20.1667 8.25009 20.1667Z"
        stroke={"#000"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2043 11H14.2125"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.78655 11H7.79478"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ActiveBasketIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 1 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.875 7.03084V6.14167C6.875 4.07917 8.53417 2.05334 10.5967 1.86084C13.0533 1.62251 15.125 3.55667 15.125 5.96751V7.23251"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25009 20.1667H13.7501C17.4351 20.1667 18.0951 18.6909 18.2876 16.8942L18.9751 11.3942C19.2226 9.15754 18.5809 7.33337 14.6668 7.33337H7.33342C3.41925 7.33337 2.77759 9.15754 3.02509 11.3942L3.71259 16.8942C3.90509 18.6909 4.56509 20.1667 8.25009 20.1667Z"
        fill={colors}
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2043 11H14.2125"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.78655 11H7.79478"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const SearchIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.80553 17.296C13.9424 17.296 17.296 13.9424 17.296 9.80549C17.296 5.66862 13.9424 2.31503 9.80553 2.31503C5.66866 2.31503 2.31506 5.66862 2.31506 9.80549C2.31506 13.9424 5.66866 17.296 9.80553 17.296Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0153 15.4043L17.9519 18.3333"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const VolumeIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.29339 8.00011C1.29083 9.12729 1.24053 10.6647 1.93788 11.2394C2.58834 11.7755 3.04614 11.6373 4.23368 11.7245C5.42207 11.8125 7.93014 15.3058 9.86363 14.2008C10.8611 13.4165 10.9352 11.7722 10.9352 8.00011C10.9352 4.22804 10.8611 2.58372 9.86363 1.79938C7.93014 0.693574 5.42207 4.18775 4.23368 4.27572C3.04614 4.36287 2.58834 4.22475 1.93788 4.7608C1.24053 5.33549 1.29083 6.87292 1.29339 8.00011Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9523 2.41199C19.2898 5.77709 19.2975 10.2159 16.9523 13.5876"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6578 4.62152C15.8599 6.72132 15.8599 9.28563 14.6578 11.3789"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const BrushColorIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1379_14327)">
        <path
          d="M7.91668 16.25V15H3.75001C3.29168 15 2.87501 14.8167 2.57501 14.5084C2.26668 14.2084 2.08334 13.7917 2.08334 13.3334C2.08334 12.475 2.75001 11.7584 3.59168 11.675C3.64168 11.6667 3.69168 11.6667 3.75001 11.6667H16.25C16.3083 11.6667 16.3583 11.6667 16.4083 11.675C16.8083 11.7084 17.1583 11.8834 17.425 12.1584C17.7667 12.4917 17.95 12.9667 17.9083 13.4834C17.8333 14.3584 17.0417 15 16.1583 15H12.0833V16.25C12.0833 17.4 11.15 18.3334 10 18.3334C8.85001 18.3334 7.91668 17.4 7.91668 16.25Z"
          stroke={colors}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.8083 4.41669L16.4083 11.675C16.3583 11.6667 16.3083 11.6667 16.25 11.6667H3.75001C3.69168 11.6667 3.64168 11.6667 3.59168 11.675L3.19168 4.41669C3.04168 2.94169 4.20001 1.66669 5.67501 1.66669H14.325C15.8 1.66669 16.9583 2.94169 16.8083 4.41669Z"
          stroke={colors}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.65833 1.66669V5.83335"
          stroke={colors}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 1.66669V3.33335"
          stroke={colors}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1379_14327">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const TopBrandsIcon = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83334 8.95001V11.6167"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.5V13.0667"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1667 8.95001V11.6167"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.49999 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5V7.50002C18.3333 3.33335 16.6667 1.66669 12.5 1.66669H7.49999C3.33332 1.66669 1.66666 3.33335 1.66666 7.50002V12.5C1.66666 16.6667 3.33332 18.3334 7.49999 18.3334Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ItailIcons = ({ colors }) => {
  return (
    <svg
      width="6"
      height="13"
      viewBox="0 0 6 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.305 12.95L5.55 0.0499997H4.335L0.09 12.95H1.305Z"
        fill={colors}
      />
    </svg>
  );
};
const DeliveryIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 1.66663V9.99996C12.5 10.9166 11.75 11.6666 10.8333 11.6666H1.66666V4.99996C1.66666 3.15829 3.15832 1.66663 4.99999 1.66663H12.5Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 11.6666V14.1666C18.3333 15.55 17.2167 16.6666 15.8333 16.6666H15C15 15.75 14.25 15 13.3333 15C12.4167 15 11.6667 15.75 11.6667 16.6666H8.33332C8.33332 15.75 7.58332 15 6.66666 15C5.74999 15 4.99999 15.75 4.99999 16.6666H4.16666C2.78332 16.6666 1.66666 15.55 1.66666 14.1666V11.6666H10.8333C11.75 11.6666 12.5 10.9166 12.5 9.99996V4.16663H14.0333C14.6333 4.16663 15.1833 4.49163 15.4833 5.0083L16.9083 7.49996H15.8333C15.375 7.49996 15 7.87496 15 8.33329V10.8333C15 11.2916 15.375 11.6666 15.8333 11.6666H18.3333Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66667 18.3333C7.58714 18.3333 8.33333 17.5871 8.33333 16.6667C8.33333 15.7462 7.58714 15 6.66667 15C5.74619 15 5 15.7462 5 16.6667C5 17.5871 5.74619 18.3333 6.66667 18.3333Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 18.3333C14.2538 18.3333 15 17.5871 15 16.6667C15 15.7462 14.2538 15 13.3333 15C12.4128 15 11.6667 15.7462 11.6667 16.6667C11.6667 17.5871 12.4128 18.3333 13.3333 18.3333Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 10V11.6667H15.8333C15.375 11.6667 15 11.2917 15 10.8333V8.33333C15 7.875 15.375 7.5 15.8333 7.5H16.9083L18.3333 10Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const TicketDiscountIcons = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 8.33366C13 7.41366 13.7466 6.66699 14.6666 6.66699V6.00033C14.6666 3.33366 14 2.66699 11.3333 2.66699H4.66665C1.99998 2.66699 1.33331 3.33366 1.33331 6.00033V6.33366C2.25331 6.33366 2.99998 7.08033 2.99998 8.00033C2.99998 8.92033 2.25331 9.66699 1.33331 9.66699V10.0003C1.33331 12.667 1.99998 13.3337 4.66665 13.3337H11.3333C14 13.3337 14.6666 12.667 14.6666 10.0003C13.7466 10.0003 13 9.25366 13 8.33366Z"
        stroke="#D50000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 9.83301L10 5.83301"
        stroke="#D50000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99636 9.83333H10.0023"
        stroke="#D50000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.99636 6.16634H6.00235"
        stroke="#D50000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CircleSuccessIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 18.3327C14.5833 18.3327 18.3333 14.5827 18.3333 9.99935C18.3333 5.41602 14.5833 1.66602 9.99996 1.66602C5.41663 1.66602 1.66663 5.41602 1.66663 9.99935C1.66663 14.5827 5.41663 18.3327 9.99996 18.3327Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={colors}
      />
      <path
        d="M6.45837 10.0009L8.81671 12.3592L13.5417 7.64258"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={colors}
      />
    </svg>
  );
};
const CircleWarningIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99996 18.3327C14.5833 18.3327 18.3333 14.5827 18.3333 9.99935C18.3333 5.41602 14.5833 1.66602 9.99996 1.66602C5.41663 1.66602 1.66663 5.41602 1.66663 9.99935C1.66663 14.5827 5.41663 18.3327 9.99996 18.3327Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.66602V10.8327"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99536 13.334H10.0028"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const DeleteIcons = ({ colors }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.75 4.48438C13.2525 4.23687 10.74 4.10938 8.235 4.10938C6.75 4.10938 5.265 4.18438 3.78 4.33438L2.25 4.48438"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1375 6.85547L13.65 14.408C13.5675 15.5855 13.5 16.5005 11.4075 16.5005H6.59255C4.50005 16.5005 4.43255 15.5855 4.35005 14.408L3.86255 6.85547"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.74756 12.375H10.2451"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.125 9.375H10.875"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const PaymeSystemIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66675 7.08789H18.3334"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13.7539H6.66667"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 13.7539H12.0833"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.36675 2.91992H14.6251C17.5917 2.91992 18.3334 3.65326 18.3334 6.57826V13.4199C18.3334 16.3449 17.5917 17.0783 14.6334 17.0783H5.36675C2.40841 17.0866 1.66675 16.3533 1.66675 13.4283V6.57826C1.66675 3.65326 2.40841 2.91992 5.36675 2.91992Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CalendarIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66675 1.66602V4.16602"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 1.66602V4.16602"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91675 7.57422H17.0834"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 7.08268V14.166C17.5 16.666 16.25 18.3327 13.3333 18.3327H6.66667C3.75 18.3327 2.5 16.666 2.5 14.166V7.08268C2.5 4.58268 3.75 2.91602 6.66667 2.91602H13.3333C16.25 2.91602 17.5 4.58268 17.5 7.08268Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0788 11.4167H13.0863"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0788 13.9167H13.0863"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99632 11.4167H10.0038"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99632 13.9167H10.0038"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91185 11.4167H6.91933"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91185 13.9167H6.91933"
        stroke={colors}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ProductArticleIcons = () => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.83333 1.16602H1.63333C1.59797 1.16602 1.56406 1.18006 1.53905 1.20507C1.51405 1.23007 1.5 1.26399 1.5 1.29935V4.49935"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 4.49935V1.29935C16.5 1.26399 16.4859 1.23007 16.4609 1.20507C16.4359 1.18006 16.402 1.16602 16.3666 1.16602H13.1666"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1666 12.8333H16.3666C16.402 12.8333 16.4359 12.8193 16.4609 12.7943C16.4859 12.7693 16.5 12.7354 16.5 12.7V9.5"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.5 9.5V12.7C1.5 12.7354 1.51405 12.7693 1.53905 12.7943C1.56406 12.8193 1.59797 12.8333 1.63333 12.8333H4.83333"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.83337 4.5V9.5"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4.5V9.5"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1666 4.5V9.5"
        stroke="black"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ProductSwitchIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.33335 3.74935V14.9993C8.33335 15.8993 7.96667 16.7243 7.38334 17.3243L7.35003 17.3577C7.27503 17.4327 7.19169 17.5077 7.11669 17.566C6.86669 17.7827 6.58334 17.9493 6.29168 18.066C6.20001 18.1077 6.10835 18.141 6.01669 18.1743C5.69169 18.2827 5.34169 18.3327 5.00002 18.3327C4.77502 18.3327 4.55003 18.3077 4.33336 18.266C4.22503 18.241 4.11668 18.216 4.00835 18.1827C3.87502 18.141 3.75003 18.0993 3.62503 18.041C3.62503 18.0327 3.62502 18.0327 3.61668 18.041C3.38335 17.9243 3.15836 17.791 2.95003 17.6327L2.94169 17.6243C2.83335 17.541 2.73336 17.4577 2.6417 17.3577C2.55003 17.2577 2.45835 17.1577 2.36668 17.0494C2.20835 16.841 2.07503 16.616 1.95836 16.3827C1.96669 16.3744 1.96669 16.3743 1.95836 16.3743C1.95836 16.3743 1.95835 16.366 1.95002 16.3577C1.90002 16.241 1.85835 16.116 1.81668 15.991C1.78335 15.8827 1.75834 15.7744 1.73334 15.666C1.69168 15.4494 1.66669 15.2243 1.66669 14.9993V3.74935C1.66669 2.49935 2.50002 1.66602 3.75002 1.66602H6.25002C7.50002 1.66602 8.33335 2.49935 8.33335 3.74935Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3333 13.7493V16.2493C18.3333 17.4993 17.5 18.3327 16.25 18.3327H5C5.34167 18.3327 5.69167 18.2827 6.01667 18.1743C6.10833 18.141 6.19999 18.1077 6.29166 18.066C6.58332 17.9493 6.86667 17.7827 7.11667 17.566C7.19167 17.5077 7.27501 17.4327 7.35001 17.3577L7.38332 17.3243L13.05 11.666H16.25C17.5 11.666 18.3333 12.4993 18.3333 13.7493Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.00832 18.1839C3.50832 18.0339 3.03333 17.7589 2.64167 17.3589C2.24167 16.9672 1.96665 16.4922 1.81665 15.9922C2.14165 17.0339 2.96665 17.8589 4.00832 18.1839Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3083 9.40845L13.05 11.6668L7.3833 17.3251C7.96663 16.7251 8.33331 15.9001 8.33331 15.0001V6.95012L10.5916 4.6918C11.475 3.80846 12.6583 3.80846 13.5416 4.6918L15.3083 6.45846C16.1916 7.34179 16.1916 8.52512 15.3083 9.40845Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00002 15.8327C5.46026 15.8327 5.83335 15.4596 5.83335 14.9993C5.83335 14.5391 5.46026 14.166 5.00002 14.166C4.53978 14.166 4.16669 14.5391 4.16669 14.9993C4.16669 15.4596 4.53978 15.8327 5.00002 15.8327Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ProductSizeIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1417 10.209V13.959C14.1417 17.084 12.8917 18.334 9.76666 18.334H6.01666C2.89166 18.334 1.64166 17.084 1.64166 13.959V10.209C1.64166 7.08398 2.89166 5.83398 6.01666 5.83398H9.76666C12.8917 5.83398 14.1417 7.08398 14.1417 10.209Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3083 4.87435V7.62435C18.3083 9.91602 17.3917 10.8327 15.1 10.8327H14.1417V10.2077C14.1417 7.08268 12.8917 5.83268 9.76666 5.83268H9.14166V4.87435C9.14166 2.58268 10.0583 1.66602 12.35 1.66602H15.1C17.3917 1.66602 18.3083 2.58268 18.3083 4.87435Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const DiscountShapeIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.32408 12.2171L2.05742 10.9504C1.54076 10.4337 1.54076 9.58371 2.05742 9.06705L3.32408 7.80036C3.54075 7.5837 3.71575 7.15869 3.71575 6.85869V5.067C3.71575 4.33367 4.31575 3.73369 5.04909 3.73369H6.84075C7.14075 3.73369 7.56575 3.55872 7.78242 3.34205L9.04908 2.07537C9.56574 1.5587 10.4158 1.5587 10.9324 2.07537L12.1991 3.34205C12.4158 3.55872 12.8407 3.73369 13.1407 3.73369H14.9324C15.6658 3.73369 16.2657 4.33367 16.2657 5.067V6.85869C16.2657 7.15869 16.4407 7.5837 16.6574 7.80036L17.9241 9.06705C18.4408 9.58371 18.4408 10.4337 17.9241 10.9504L16.6574 12.2171C16.4407 12.4337 16.2657 12.8587 16.2657 13.1587V14.9503C16.2657 15.6837 15.6658 16.2837 14.9324 16.2837H13.1407C12.8407 16.2837 12.4158 16.4587 12.1991 16.6754L10.9324 17.9421C10.4158 18.4587 9.56574 18.4587 9.04908 17.9421L7.78242 16.6754C7.56575 16.4587 7.14075 16.2837 6.84075 16.2837H5.04909C4.31575 16.2837 3.71575 15.6837 3.71575 14.9503V13.1587C3.71575 12.8504 3.54075 12.4254 3.32408 12.2171Z"
        stroke="#D50000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12.5L12.5 7.5"
        stroke="#D50000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0787 12.0833H12.0862"
        stroke="#D50000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.91209 7.91667H7.91957"
        stroke="#D50000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const WomanGenIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 13.3327C13.2217 13.3327 15.8334 10.721 15.8334 7.49935C15.8334 4.27769 13.2217 1.66602 10.0001 1.66602C6.77842 1.66602 4.16675 4.27769 4.16675 7.49935C4.16675 10.721 6.77842 13.3327 10.0001 13.3327Z"
        stroke="#DD006A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.334V18.334"
        stroke="#DD006A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15.834H7.5"
        stroke="#DD006A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ManGenIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.54158 17.9167C12.1084 17.9167 14.9999 15.0252 14.9999 11.4583C14.9999 7.89149 12.1084 5 8.54158 5C4.97475 5 2.08325 7.89149 2.08325 11.4583C2.08325 15.0252 4.97475 17.9167 8.54158 17.9167Z"
        stroke="#0090CD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9166 2.08398L13.3333 6.66732"
        stroke="#0090CD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 2.08398H17.9167V7.50065"
        stroke="#0090CD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ChildGenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="9"
        y="13.8618"
        width="2.5"
        height="5"
        transform="rotate(30 9 13.8618)"
        fill="#1E88E5"
      />
      <rect
        x="13.3188"
        y="15.1113"
        width="2.5"
        height="5"
        transform="rotate(-30 13.3188 15.1113)"
        fill="#1E88E5"
      />
      <rect
        x="4.86133"
        y="8.98389"
        width="2.5"
        height="5"
        transform="rotate(-60 4.86133 8.98389)"
        fill="#1E88E5"
      />
      <rect
        x="17.8989"
        y="6.81885"
        width="2.5"
        height="5"
        transform="rotate(60 17.8989 6.81885)"
        fill="#1E88E5"
      />
      <rect
        x="6.99854"
        y="18.5"
        width="2.5"
        height="4"
        transform="rotate(-60 6.99854 18.5)"
        fill="#1E88E5"
      />
      <rect
        x="16.4639"
        y="16.2002"
        width="2.5"
        height="4"
        transform="rotate(60 16.4639 16.2002)"
        fill="#1E88E5"
      />
      <path
        d="M8.49854 9H15.4985V12.25V13.875L14.5755 14.5769L13.7485 15.5H11.9985H10.2485L9.42161 14.5769L8.49854 13.875V12.25V9Z"
        fill="#64B5F6"
      />
      <path
        d="M8.49854 12.5H15.4985V14L13.9985 15.5H9.99854L8.49854 14V12.5Z"
        fill="#CCE8FF"
      />
      <rect x="9.50146" y="3.5" width="5" height="5" rx="2.5" fill="#90CAF9" />
    </svg>
  );
};
const VideoStoreIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.50008 18.3327H12.5001C16.6667 18.3327 18.3334 16.666 18.3334 12.4993V7.49935C18.3334 3.33268 16.6667 1.66602 12.5001 1.66602H7.50008C3.33341 1.66602 1.66675 3.33268 1.66675 7.49935V12.4993C1.66675 16.666 3.33341 18.3327 7.50008 18.3327Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.58325 10.0002V8.7669C7.58325 7.17524 8.70825 6.53357 10.0833 7.32524L11.1499 7.9419L12.2166 8.55857C13.5916 9.35024 13.5916 10.6502 12.2166 11.4419L11.1499 12.0586L10.0833 12.6752C8.70825 13.4669 7.58325 12.8169 7.58325 11.2336V10.0002Z"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ClockIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3337 10.0001C18.3337 14.6001 14.6003 18.3334 10.0003 18.3334C5.40033 18.3334 1.66699 14.6001 1.66699 10.0001C1.66699 5.40008 5.40033 1.66675 10.0003 1.66675C14.6003 1.66675 18.3337 5.40008 18.3337 10.0001Z"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0914 12.65L10.5081 11.1083C10.0581 10.8416 9.69141 10.2 9.69141 9.67497V6.2583"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ClothesHangIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8337 5.41675V5.00008C10.8337 4.44755 10.6142 3.91764 10.2235 3.52694C9.83276 3.13624 9.30286 2.91675 8.75033 2.91675V2.91675C8.19779 2.91675 7.66789 3.13624 7.27719 3.52694C6.88649 3.91764 6.66699 4.44755 6.66699 5.00008V5.00008C6.66589 5.55736 6.82677 6.10295 7.13007 6.57046C7.43336 7.03798 7.86599 7.40727 8.37533 7.63342L17.3503 11.6667C17.6402 11.797 17.8867 12.0074 18.061 12.2732C18.2352 12.539 18.3298 12.849 18.3337 13.1667V15.4167C18.3337 15.8588 18.1581 16.2827 17.8455 16.5953C17.5329 16.9078 17.109 17.0834 16.667 17.0834H3.33366C2.89163 17.0834 2.46771 16.9078 2.15515 16.5953C1.84259 16.2827 1.66699 15.8588 1.66699 15.4167V13.2084C1.66833 12.876 1.76902 12.5517 1.95613 12.2769C2.14323 12.0022 2.4082 11.7897 2.71699 11.6667L10.0003 8.75008"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MarkerMapsIcons = ({ colors }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#007DCA" />
      <path
        d="M23.9983 15.9059L31.3154 11L30.6751 13.1146L25.4617 17.4285L26.6507 18.8664L25.0044 22.2498L26.3763 24.2253L23.9983 31.5843V15.9059Z"
        fill="white"
      />
      <path
        d="M23.9983 15.9059L16.6812 11L17.3215 13.1146L22.5349 17.4285L21.3459 18.8664L22.9922 22.2498L21.6202 24.2253L23.9983 31.5843V15.9059Z"
        fill="white"
      />
      <path
        d="M31.2693 11L23.9994 33.4157V41L33.2018 25.1573C30.846 20.7753 34.1834 19.2303 36.1466 19.0056L38.9994 11H31.2693Z"
        fill="white"
      />
      <path
        d="M16.7295 11L23.9994 33.4157V41L14.7969 25.1573C17.1528 20.7753 13.8153 19.2303 11.8521 19.0056L8.99939 11H16.7295Z"
        fill="white"
      />
    </svg>
  );
};
const MaximazeMapsIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 7.5V2.5H12.5"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5V17.5H7.5"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 2.5L11.25 8.75"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.75 11.25L2.5 17.5"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const FullScreenMapsIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66699 7.50002V5.41669C1.66699 3.34169 3.34199 1.66669 5.41699 1.66669H7.50033"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 1.66669H14.5833C16.6583 1.66669 18.3333 3.34169 18.3333 5.41669V7.50002"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.333 13.3333V14.5833C18.333 16.6583 16.658 18.3333 14.583 18.3333H13.333"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50033 18.3333H5.41699C3.34199 18.3333 1.66699 16.6583 1.66699 14.5833V12.5"
        stroke="#4D4D4D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const LogOutIcons = ({ colors }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.01343 8.59835L3.66676 10.945L6.01343 13.2917"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0532 10.945L3.73072 10.945"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2199 3.66665C15.2716 3.66665 18.5532 6.41665 18.5532 11C18.5532 15.5833 15.2716 18.3333 11.2199 18.3333"
        stroke={colors}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const SortIcons = ({ colors }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 5.25H15.75"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 9H13.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 12.75H10.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
const FilterIcons = ({ colors }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 5.25H15.75"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.5 9H13.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 12.75H10.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
const ProductShopIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64166 6.2002L10 10.4585L17.3083 6.2252"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18.0085V10.4502"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.275 2.06706L3.825 4.53373C2.81667 5.09206 1.99167 6.49206 1.99167 7.64206V12.3504C1.99167 13.5004 2.81667 14.9004 3.825 15.4587L8.275 17.9337C9.225 18.4587 10.7833 18.4587 11.7333 17.9337L16.1833 15.4587C17.1917 14.9004 18.0167 13.5004 18.0167 12.3504V7.64206C18.0167 6.49206 17.1917 5.09206 16.1833 4.53373L11.7333 2.05873C10.775 1.53373 9.225 1.53373 8.275 2.06706Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MenuMore = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.33333C10.9205 3.33333 11.6667 2.58714 11.6667 1.66667C11.6667 0.746192 10.9205 0 10 0C9.07954 0 8.33334 0.746192 8.33334 1.66667C8.33334 2.58714 9.07954 3.33333 10 3.33333ZM10 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07952 10.9205 8.33333 10 8.33333C9.07954 8.33333 8.33334 9.07952 8.33334 10C8.33334 10.9205 9.07954 11.6667 10 11.6667ZM11.6667 18.3333C11.6667 19.2538 10.9205 20 10 20C9.07954 20 8.33334 19.2538 8.33334 18.3333C8.33334 17.4129 9.07954 16.6667 10 16.6667C10.9205 16.6667 11.6667 17.4129 11.6667 18.3333Z"
        fill="#161616"
      />
    </svg>
  );
};
const FreeStarIcon = ({ colors }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9457 8.54602C10.773 8.71335 10.6937 8.95535 10.733 9.19268L11.3257 12.4727C11.3757 12.7507 11.2583 13.032 11.0257 13.1927C10.7977 13.3594 10.4943 13.3793 10.2457 13.246L7.29299 11.706C7.19032 11.6513 7.07632 11.622 6.95965 11.6187H6.77899C6.71632 11.628 6.65499 11.648 6.59899 11.6787L3.64565 13.226C3.49965 13.2993 3.33432 13.3253 3.17232 13.2993C2.77765 13.2247 2.51432 12.8487 2.57899 12.452L3.17232 9.17202C3.21165 8.93268 3.13232 8.68935 2.95965 8.51935L0.552319 6.18602C0.350986 5.99068 0.280986 5.69735 0.372986 5.43268C0.462319 5.16868 0.690319 4.97602 0.965653 4.93268L4.27899 4.45202C4.53099 4.42602 4.75232 4.27268 4.86565 4.04602L6.32565 1.05268C6.36032 0.986016 6.40499 0.924682 6.45899 0.872682L6.51899 0.826016C6.55032 0.791349 6.58632 0.762682 6.62632 0.739349L6.69899 0.712682L6.81232 0.666016H7.09299C7.34365 0.692016 7.56432 0.842016 7.67965 1.06602L9.15899 4.04602C9.26565 4.26402 9.47299 4.41535 9.71232 4.45202L13.0257 4.93268C13.3057 4.97268 13.5397 5.16602 13.6323 5.43268C13.7197 5.70002 13.6443 5.99335 13.439 6.18602L10.9457 8.54602Z"
        fill="#CFCFCF"
      />
    </svg>
  );
};
const SendMessageIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0833 16.668C17.0148 16.6678 16.9467 16.6565 16.8817 16.6347L0.42333 11.0097C0.307717 10.9698 0.20624 10.8971 0.131341 10.8005C0.0564407 10.7038 0.011373 10.5874 0.001663 10.4655C-0.00738739 10.3436 0.0193339 10.2218 0.0785474 10.1149C0.137761 10.008 0.22689 9.92076 0.334996 9.86382L19.085 0.0721522C19.1873 0.0191505 19.3023 -0.00460219 19.4173 0.00350619C19.5322 0.0116146 19.6427 0.0512699 19.7366 0.118111C19.8305 0.184953 19.9042 0.276391 19.9494 0.382371C19.9947 0.488351 20.0099 0.604768 19.9933 0.718819L17.7017 16.1355C17.6795 16.2836 17.6049 16.4188 17.4914 16.5166C17.3779 16.6143 17.2331 16.668 17.0833 16.668ZM2.205 10.2972L16.575 15.2088L18.5758 1.74882L2.205 10.2972Z"
        fill="#007DCA"
      />
      <path
        d="M7.91666 19.1672C7.83449 19.1676 7.75307 19.1516 7.67709 19.1203C7.60112 19.0891 7.53209 19.043 7.47398 18.9849C7.41588 18.9268 7.36986 18.8578 7.33856 18.7818C7.30727 18.7058 7.29133 18.6244 7.29166 18.5422V12.9172C7.29166 12.7597 7.35166 12.6064 7.45916 12.4906L18.9175 0.198914C19.0307 0.0775775 19.1874 0.00616283 19.3532 0.000380461C19.519 -0.00540191 19.6803 0.0549217 19.8017 0.168081C19.923 0.28124 19.9944 0.437965 20.0002 0.603778C20.006 0.769592 19.9457 0.930911 19.8325 1.05225L8.54166 13.1631V16.6364L10.6275 13.7972C10.7285 13.6713 10.8743 13.5893 11.0343 13.5684C11.1944 13.5474 11.3563 13.5891 11.4864 13.6847C11.6164 13.7803 11.7045 13.9225 11.7322 14.0815C11.7599 14.2405 11.7251 14.4041 11.635 14.5381L8.42083 18.9131C8.3624 18.9918 8.28639 19.0558 8.19886 19.0999C8.11132 19.144 8.01469 19.1671 7.91666 19.1672Z"
        fill="#007DCA"
      />
    </svg>
  );
};
const NoNameIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1273 2.40471C15.6347 -0.0880273 11.5786 -0.0880273 9.08556 2.40471L1.33525 10.155C-0.445181 11.9356 -0.445064 14.8328 1.33548 16.6133C2.22584 17.5037 3.39498 17.9488 4.56459 17.9487C5.73388 17.9486 6.90365 17.5036 7.79384 16.6133L14.8981 9.50893C15.4156 8.99143 15.7007 8.30334 15.7008 7.57147C15.7008 6.83955 15.4158 6.1515 14.8982 5.63385C13.8297 4.56553 12.0913 4.56557 11.0231 5.63404L6.3772 10.2798C6.02052 10.6365 6.02052 11.2148 6.37712 11.5715C6.73377 11.9283 7.31209 11.9281 7.6688 11.5715L12.3147 6.92568C12.6709 6.56955 13.2503 6.56947 13.6064 6.92561C13.6915 7.01022 13.759 7.11086 13.8049 7.22172C13.8508 7.33257 13.8743 7.45144 13.874 7.57143C13.874 7.81537 13.779 8.04467 13.6064 8.21725L6.50216 15.3216C5.43376 16.3899 3.69548 16.3901 2.62716 15.3217C1.55884 14.2533 1.55876 12.5149 2.62697 11.4465L10.3772 3.69639C12.1579 1.91576 15.0552 1.91576 16.8356 3.69639C17.6982 4.55889 18.1733 5.70572 18.1733 6.92553C18.1733 8.14533 17.6982 9.29217 16.8356 10.1547L9.08545 17.9051C8.7288 18.2618 8.7288 18.8401 9.08552 19.1968C9.17023 19.2818 9.2709 19.3491 9.38173 19.395C9.49257 19.4409 9.61138 19.4645 9.73134 19.4643C9.85131 19.4645 9.97012 19.4409 10.081 19.395C10.1918 19.3491 10.2925 19.2817 10.3772 19.1968L18.1272 11.4465C19.3349 10.2389 19.9999 8.63338 20 6.92557C20 5.21779 19.3349 3.61225 18.1273 2.40471Z"
        fill="#CFCFCF"
      />
    </svg>
  );
};
const ThreeCicleIcon = () => {
  return (
    <svg
      width="29"
      height="26"
      viewBox="0 0 29 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0359 2.57606C12.5755 -0.0906108 16.4245 -0.0906172 17.9641 2.57605L27.4904 19.076C29.03 21.7427 27.1055 25.076 24.0263 25.076H4.97373C1.89453 25.076 -0.0299823 21.7427 1.50962 19.0761L11.0359 2.57606Z"
        fill="white"
      />
    </svg>
  );
};
const DashboardUser = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0003 8.33329C11.8413 8.33329 13.3337 6.84091 13.3337 4.99996C13.3337 3.15901 11.8413 1.66663 10.0003 1.66663C8.15938 1.66663 6.66699 3.15901 6.66699 4.99996C6.66699 6.84091 8.15938 8.33329 10.0003 8.33329Z"
        fill="#007DCA"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6668 14.5833C16.6668 16.6541 16.6668 18.3333 10.0002 18.3333C3.3335 18.3333 3.3335 16.6541 3.3335 14.5833C3.3335 12.5124 6.3185 10.8333 10.0002 10.8333C13.6818 10.8333 16.6668 12.5124 16.6668 14.5833Z"
        fill="#007DCA"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const DashboardList = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 2.5C8.94181 2.5 8.00015 3.16667 7.65015 4.16667H2.50015V5.83333H4.12515L1.66681 11.6667C1.27515 13.3333 2.50015 14.1667 4.58348 14.1667C6.66681 14.1667 7.96681 13.3333 7.50015 11.6667L5.04181 5.83333H7.64181C7.91681 6.54167 8.45848 7.08333 9.16681 7.35833V16.6667H1.66681V18.3333H18.3335V16.6667H10.8335V7.35C11.5418 7.08333 12.0835 6.54167 12.3501 5.83333H14.9585L12.5001 11.6667C12.1085 13.3333 13.3335 14.1667 15.4168 14.1667C17.5001 14.1667 18.8001 13.3333 18.3335 11.6667L15.8751 5.83333H17.5001V4.16667H12.3585C12.0001 3.16667 11.0585 2.5 10.0001 2.5ZM10.0001 4.16667C10.2212 4.16667 10.4331 4.25446 10.5894 4.41074C10.7457 4.56703 10.8335 4.77899 10.8335 5C10.8335 5.22101 10.7457 5.43298 10.5894 5.58926C10.4331 5.74554 10.2212 5.83333 10.0001 5.83333C9.77913 5.83333 9.56717 5.74554 9.41089 5.58926C9.25461 5.43298 9.16681 5.22101 9.16681 5C9.16681 4.77899 9.25461 4.56703 9.41089 4.41074C9.56717 4.25446 9.77913 4.16667 10.0001 4.16667ZM4.58348 8.54167L5.83348 11.6667H3.33348L4.58348 8.54167ZM15.4168 8.54167L16.6668 11.6667H14.1668L15.4168 8.54167Z"
        fill="#007dca"
        stroke={colors}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const StarIcon = () => {
  return (
    <svg
      width="9"
      height="8"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.312 3.56L6.456 4.616L8.424 6.848L7.032 8.048L5.112 5.528L3.216 8.024L1.848 6.824L3.816 4.592L0.984 3.536L1.704 1.856L4.32 3.104L4.248 0.175999H6.024L5.952 3.128L8.592 1.856L9.312 3.56Z"
        fill="#FA4F4F"
      />
    </svg>
  );
};
const CopyIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7485 7.5C15.7395 5.86875 15.6675 4.98525 15.0908 4.40925C14.4323 3.75 13.371 3.75 11.25 3.75H9C6.879 3.75 5.81775 3.75 5.15925 4.40925C4.5 5.06775 4.5 6.129 4.5 8.25V12C4.5 14.121 4.5 15.1823 5.15925 15.8408C5.81775 16.5 6.879 16.5 9 16.5H11.25C13.371 16.5 14.4323 16.5 15.0908 15.8408C15.75 15.1823 15.75 14.121 15.75 12V11.25"
        stroke="#505050"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M2.25 7.5V12C2.25 12.5967 2.48705 13.169 2.90901 13.591C3.33097 14.0129 3.90326 14.25 4.5 14.25M13.5 3.75C13.5 3.15326 13.2629 2.58097 12.841 2.15901C12.419 1.73705 11.8467 1.5 11.25 1.5H8.25C5.42175 1.5 4.00725 1.5 3.129 2.379C2.6385 2.86875 2.42175 3.525 2.3265 4.5"
        stroke="#505050"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
const SettingsIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke="#303030"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66675 10.7334V9.2667C1.66675 8.40003 2.37508 7.68336 3.25008 7.68336C4.75841 7.68336 5.37508 6.6167 4.61675 5.30836C4.18341 4.55836 4.44175 3.58336 5.20008 3.15003L6.64175 2.32503C7.30008 1.93336 8.15008 2.1667 8.54175 2.82503L8.63341 2.98336C9.38341 4.2917 10.6167 4.2917 11.3751 2.98336L11.4667 2.82503C11.8584 2.1667 12.7084 1.93336 13.3667 2.32503L14.8084 3.15003C15.5667 3.58336 15.8251 4.55836 15.3917 5.30836C14.6334 6.6167 15.2501 7.68336 16.7584 7.68336C17.6251 7.68336 18.3417 8.3917 18.3417 9.2667V10.7334C18.3417 11.6 17.6334 12.3167 16.7584 12.3167C15.2501 12.3167 14.6334 13.3834 15.3917 14.6917C15.8251 15.45 15.5667 16.4167 14.8084 16.85L13.3667 17.675C12.7084 18.0667 11.8584 17.8334 11.4667 17.175L11.3751 17.0167C10.6251 15.7084 9.39175 15.7084 8.63341 17.0167L8.54175 17.175C8.15008 17.8334 7.30008 18.0667 6.64175 17.675L5.20008 16.85C4.44175 16.4167 4.18341 15.4417 4.61675 14.6917C5.37508 13.3834 4.75841 12.3167 3.25008 12.3167C2.37508 12.3167 1.66675 11.6 1.66675 10.7334Z"
        stroke="#303030"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const CategoryUsersIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2443_20799)">
        <path
          d="M5.83333 14.1667C6.98393 14.1667 7.91667 13.2339 7.91667 12.0833C7.91667 10.9327 6.98393 10 5.83333 10C4.68274 10 3.75 10.9327 3.75 12.0833C3.75 13.2339 4.68274 14.1667 5.83333 14.1667Z"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1668 14.1667C15.3174 14.1667 16.2502 13.2339 16.2502 12.0833C16.2502 10.9327 15.3174 10 14.1668 10C13.0162 10 12.0835 10.9327 12.0835 12.0833C12.0835 13.2339 13.0162 14.1667 14.1668 14.1667Z"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0001 5.83341C11.1507 5.83341 12.0834 4.90067 12.0834 3.75008C12.0834 2.59949 11.1507 1.66675 10.0001 1.66675C8.84949 1.66675 7.91675 2.59949 7.91675 3.75008C7.91675 4.90067 8.84949 5.83341 10.0001 5.83341Z"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.66675 18.3335C1.66675 16.0322 3.53216 14.1668 5.83341 14.1668C8.13466 14.1668 10.0001 16.0322 10.0001 18.3335C10.0001 16.0322 11.8655 14.1668 14.1667 14.1668C16.468 14.1668 18.3334 16.0322 18.3334 18.3335M14.1667 10.0002C14.1667 7.69891 12.3013 5.8335 10.0001 5.8335C7.69883 5.8335 5.83341 7.69891 5.83341 10.0002"
          stroke="#303030"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2443_20799">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ChapterIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1665 8.33325C15.5472 8.33325 16.6665 7.21396 16.6665 5.83325C16.6665 4.45254 15.5472 3.33325 14.1665 3.33325C12.7858 3.33325 11.6665 4.45254 11.6665 5.83325C11.6665 7.21396 12.7858 8.33325 14.1665 8.33325Z"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83325 16.6665C7.21396 16.6665 8.33325 15.5472 8.33325 14.1665C8.33325 12.7858 7.21396 11.6665 5.83325 11.6665C4.45254 11.6665 3.33325 12.7858 3.33325 14.1665C3.33325 15.5472 4.45254 16.6665 5.83325 16.6665Z"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6666 11.6666H16.6666V15.8333C16.6666 16.0543 16.5788 16.2662 16.4225 16.4225C16.2662 16.5788 16.0543 16.6666 15.8333 16.6666H12.4999C12.2789 16.6666 12.0669 16.5788 11.9107 16.4225C11.7544 16.2662 11.6666 16.0543 11.6666 15.8333V11.6666ZM3.33325 3.33325H8.33325V7.49992C8.33325 7.72093 8.24545 7.93289 8.08917 8.08917C7.93289 8.24545 7.72093 8.33325 7.49992 8.33325H4.16659C3.94557 8.33325 3.73361 8.24545 3.57733 8.08917C3.42105 7.93289 3.33325 7.72093 3.33325 7.49992V3.33325Z"
        stroke="#303030"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const QualityIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.723 2.08399C9.80506 2.02938 9.90143 2.00024 10 2.00024C10.0986 2.00024 10.1949 2.02938 10.277 2.08399C12.1649 3.35668 14.3169 4.18446 16.571 4.50499C16.6901 4.52207 16.799 4.58153 16.8778 4.67245C16.9566 4.76338 17 4.87967 17 4.99999V9.59999C16.6804 9.43643 16.3454 9.3048 16 9.20699V5.42699C14.019 5.09177 12.1191 4.38575 10.4 3.34599L10 3.09699L9.6 3.34599C7.88094 4.3861 5.98102 5.09246 4 5.42799V9.49999C4 12.742 5.798 15.143 9.478 16.746C9.673 17.181 9.922 17.586 10.218 17.952L10.18 17.967C10.0642 18.0117 9.93584 18.0117 9.82 17.967C5.308 16.23 3 13.39 3 9.49999V4.99999C3.00002 4.87952 3.04353 4.76311 3.12253 4.67216C3.20154 4.58122 3.31072 4.52185 3.43 4.50499C5.68377 4.18431 7.83543 3.35654 9.723 2.08399ZM19 14.5C19 15.6935 18.5259 16.8381 17.682 17.682C16.8381 18.5259 15.6935 19 14.5 19C13.3065 19 12.1619 18.5259 11.318 17.682C10.4741 16.8381 10 15.6935 10 14.5C10 13.3065 10.4741 12.1619 11.318 11.318C12.1619 10.4741 13.3065 9.99999 14.5 9.99999C15.6935 9.99999 16.8381 10.4741 17.682 11.318C18.5259 12.1619 19 13.3065 19 14.5ZM16.854 12.646C16.8076 12.5994 16.7524 12.5625 16.6916 12.5373C16.6309 12.5121 16.5658 12.4991 16.5 12.4991C16.4342 12.4991 16.3691 12.5121 16.3084 12.5373C16.2476 12.5625 16.1924 12.5994 16.146 12.646L13.5 15.293L12.854 14.646C12.7601 14.5521 12.6328 14.4994 12.5 14.4994C12.3672 14.4994 12.2399 14.5521 12.146 14.646C12.0521 14.7399 11.9994 14.8672 11.9994 15C11.9994 15.1328 12.0521 15.2601 12.146 15.354L13.146 16.354C13.1924 16.4005 13.2476 16.4375 13.3084 16.4627C13.3691 16.4879 13.4342 16.5009 13.5 16.5009C13.5658 16.5009 13.6309 16.4879 13.6916 16.4627C13.7524 16.4375 13.8076 16.4005 13.854 16.354L16.854 13.354C16.9006 13.3075 16.9375 13.2524 16.9627 13.1916C16.9879 13.1309 17.0009 13.0658 17.0009 13C17.0009 12.9342 16.9879 12.8691 16.9627 12.8084C16.9375 12.7476 16.9006 12.6924 16.854 12.646Z"
        fill="black"
      />
    </svg>
  );
};
const ReviewIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.14286 15.1023H15M13.2857 5.67378L14.1429 6.53092M14.5714 3.53092C14.7403 3.69974 14.8743 3.90018 14.9657 4.12079C15.0571 4.3414 15.1041 4.57785 15.1041 4.81663C15.1041 5.05542 15.0571 5.29187 14.9657 5.51248C14.8743 5.73309 14.7403 5.93352 14.5714 6.10235L6.42857 14.2452L3 15.1023L3.85714 11.7218L12.0034 3.53435C12.3245 3.2117 12.7552 3.02157 13.2099 3.00173C13.6647 2.98188 14.1103 3.13375 14.4583 3.42721L14.5714 3.53092Z"
        stroke="#007DCA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const GoBackIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6667 9.33332L12 16L18.6667 22.6667"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MenuCloseIcons = ({ colors, width, height }) => {
  return (
    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M18.3596 18.36L5.63965 5.64001"
    //     stroke={colors}
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="bevel"
    //   />
    //   <path
    //     d="M18.3596 5.64001L5.63965 18.36"
    //     stroke={colors}
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="bevel"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path
        d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z"
        fill="black"
      />
    </svg>
  );
};
const CreditCardNumber = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M1.25 16.25C1.25 16.4158 1.31585 16.5747 1.43306 16.6919C1.55027 16.8092 1.70924 16.875 1.875 16.875H18.125C18.2908 16.875 18.4497 16.8092 18.5669 16.6919C18.6842 16.5747 18.75 16.4158 18.75 16.25V8.67188H1.25V16.25ZM3.82812 10.8594C3.82812 10.7765 3.86105 10.697 3.91965 10.6384C3.97826 10.5798 4.05774 10.5469 4.14062 10.5469H7.73438C7.81726 10.5469 7.89674 10.5798 7.95535 10.6384C8.01395 10.697 8.04688 10.7765 8.04688 10.8594V13.3594C8.04688 13.4423 8.01395 13.5217 7.95535 13.5803C7.89674 13.639 7.81726 13.6719 7.73438 13.6719H4.14062C4.05774 13.6719 3.97826 13.639 3.91965 13.5803C3.86105 13.5217 3.82812 13.4423 3.82812 13.3594V10.8594ZM18.125 3.125H1.875C1.70924 3.125 1.55027 3.19085 1.43306 3.30806C1.31585 3.42527 1.25 3.58424 1.25 3.75V6.32812H18.75V3.75C18.75 3.58424 18.6842 3.42527 18.5669 3.30806C18.4497 3.19085 18.2908 3.125 18.125 3.125Z"
        fill="#B5B5B5"
      />
    </svg>
  );
};
const SuccessIconsForMail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
    >
      <path
        d="M32.375 1.15625L10.8687 24.8068L4.625 20.0777H1.15625L10.8687 35.8438L35.8438 1.15625H32.375Z"
        fill="#007DCA"
      />
    </svg>
  );
};
const SuccessIconsForMailGreen = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M24.3562 1.05688L8.30673 18.7065L3.64721 15.1774H1.05859L8.30673 26.9431L26.9448 1.05688H24.3562Z"
        fill="#12C724"
      />
    </svg>
  );
};
const UserMailIcon = ({ }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1922_12387)">
        <path
          d="M16.6665 9.99984C16.6663 8.51391 16.1698 7.07062 15.2556 5.89916C14.3414 4.72771 13.0621 3.89524 11.6208 3.53395C10.1794 3.17266 8.65871 3.30326 7.30007 3.90501C5.94144 4.50676 4.82278 5.54516 4.12174 6.85533C3.4207 8.1655 3.17747 9.67232 3.43066 11.1365C3.68386 12.6007 4.41897 13.9384 5.51926 14.937C6.61955 15.9357 8.02195 16.5382 9.50376 16.6487C10.9856 16.7593 12.4618 16.3717 13.6982 15.5473L14.6232 16.934C13.255 17.8488 11.6456 18.3358 9.99984 18.3332C5.39734 18.3332 1.6665 14.6023 1.6665 9.99984C1.6665 5.39734 5.39734 1.6665 9.99984 1.6665C14.6023 1.6665 18.3332 5.39734 18.3332 9.99984V11.2498C18.3333 11.8738 18.1332 12.4813 17.7625 12.9832C17.3918 13.4851 16.8699 13.8549 16.2735 14.0382C15.677 14.2215 15.0375 14.2087 14.4489 14.0018C13.8603 13.7948 13.3536 13.4045 13.0032 12.8882C12.447 13.4665 11.7356 13.8719 10.9546 14.0558C10.1736 14.2396 9.35606 14.194 8.60031 13.9245C7.84455 13.6549 7.1827 13.1729 6.69426 12.5363C6.20582 11.8998 5.91157 11.1357 5.84687 10.3359C5.78217 9.53616 5.94977 8.73472 6.32952 8.0279C6.70928 7.32108 7.28505 6.73894 7.98764 6.35142C8.69024 5.96391 9.48979 5.7875 10.2902 5.84339C11.0906 5.89928 11.8579 6.1851 12.4998 6.6665H14.1665V11.2498C14.1665 11.5814 14.2982 11.8993 14.5326 12.1337C14.767 12.3681 15.085 12.4998 15.4165 12.4998C15.748 12.4998 16.066 12.3681 16.3004 12.1337C16.5348 11.8993 16.6665 11.5814 16.6665 11.2498V9.99984ZM9.99984 7.49984C9.3368 7.49984 8.70091 7.76323 8.23207 8.23207C7.76323 8.70091 7.49984 9.3368 7.49984 9.99984C7.49984 10.6629 7.76323 11.2988 8.23207 11.7676C8.70091 12.2364 9.3368 12.4998 9.99984 12.4998C10.6629 12.4998 11.2988 12.2364 11.7676 11.7676C12.2364 11.2988 12.4998 10.6629 12.4998 9.99984C12.4998 9.3368 12.2364 8.70091 11.7676 8.23207C11.2988 7.76323 10.6629 7.49984 9.99984 7.49984Z"
          fill="#D2D2D2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1922_12387">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const FreeStar = ({ width, height, colors }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0503 4.97151C12.0083 4.83832 11.9275 4.72072 11.8182 4.63385C11.7089 4.54697 11.5761 4.49479 11.4369 4.48401L8.4174 4.22299C8.39914 4.2212 8.38171 4.21449 8.36695 4.20358C8.3522 4.19267 8.34068 4.17797 8.33361 4.16104L7.15396 1.34979C7.09933 1.22154 7.0082 1.11219 6.89191 1.03532C6.77562 0.958461 6.6393 0.91748 6.4999 0.91748C6.3605 0.91748 6.22418 0.958461 6.10789 1.03532C5.9916 1.11219 5.90047 1.22154 5.84584 1.34979L4.66619 4.16104C4.65912 4.17797 4.6476 4.19267 4.63284 4.20358C4.61809 4.21449 4.60066 4.2212 4.5824 4.22299L1.56295 4.48401C1.42373 4.49479 1.29092 4.54697 1.1816 4.63385C1.07228 4.72072 0.991448 4.83832 0.949508 4.97151C0.90509 5.10488 0.90121 5.24843 0.938359 5.38402C0.975508 5.5196 1.05202 5.64112 1.15822 5.73323L3.44896 7.73147C3.46299 7.74393 3.47341 7.75993 3.47912 7.7778C3.48484 7.79567 3.48565 7.81474 3.48146 7.83303L2.79287 10.8042C2.76077 10.941 2.76993 11.0843 2.81918 11.2159C2.86844 11.3475 2.95559 11.4615 3.06963 11.5436C3.18189 11.6264 3.31641 11.6737 3.45581 11.6793C3.59521 11.6849 3.7331 11.6486 3.85166 11.5751L6.44709 10.0009C6.46234 9.99144 6.47993 9.98644 6.49787 9.98644C6.51581 9.98644 6.53339 9.99144 6.54865 10.0009L9.14408 11.5751C9.26387 11.6484 9.4027 11.6847 9.54306 11.6792C9.68341 11.6737 9.81899 11.6267 9.93269 11.5443C10.0464 11.4618 10.1331 11.3475 10.1819 11.2158C10.2307 11.0841 10.2394 10.9409 10.2069 10.8042L9.52037 7.83202C9.51618 7.81373 9.51699 7.79465 9.52271 7.77678C9.52842 7.75891 9.53884 7.74291 9.55287 7.73045L11.8436 5.73221C11.9493 5.63995 12.0253 5.51849 12.062 5.38313C12.0988 5.24777 12.0947 5.10455 12.0503 4.97151ZM11.4409 5.27213L9.15017 7.27037C9.05257 7.3553 8.97999 7.46526 8.94025 7.58839C8.90052 7.71152 8.89515 7.84316 8.9247 7.96912L9.61127 10.9414C9.61634 10.9613 9.61522 10.9824 9.60806 11.0017C9.60089 11.021 9.58802 11.0377 9.57115 11.0495C9.55588 11.0617 9.53711 11.0688 9.51756 11.0696C9.49802 11.0704 9.47872 11.065 9.46248 11.0541L6.86705 9.47987C6.75639 9.41261 6.62939 9.37704 6.4999 9.37704C6.37041 9.37704 6.2434 9.41261 6.13275 9.47987L3.53732 11.0541C3.52108 11.065 3.50178 11.0704 3.48224 11.0696C3.46269 11.0688 3.44392 11.0617 3.42865 11.0495C3.41178 11.0377 3.39891 11.021 3.39174 11.0017C3.38458 10.9824 3.38346 10.9613 3.38853 10.9414L4.07509 7.96912C4.10465 7.84316 4.09928 7.71152 4.05954 7.58839C4.01981 7.46526 3.94723 7.3553 3.84963 7.27037L1.55888 5.27213C1.54322 5.25881 1.53196 5.24104 1.52661 5.22118C1.52126 5.20133 1.52207 5.18031 1.52892 5.16092C1.53405 5.14161 1.54517 5.12443 1.56068 5.11183C1.57619 5.09924 1.5953 5.09189 1.61525 5.09084L4.63521 4.82983C4.7645 4.81881 4.8883 4.77262 4.99321 4.69627C5.09813 4.61991 5.18014 4.5163 5.23037 4.39666L6.41002 1.58541C6.41822 1.56797 6.43122 1.55321 6.44749 1.54288C6.46377 1.53254 6.48265 1.52706 6.50193 1.52706C6.52121 1.52706 6.54009 1.53254 6.55637 1.54288C6.57264 1.55321 6.58564 1.56797 6.59384 1.58541L7.76943 4.39666C7.8195 4.51602 7.9012 4.61944 8.00572 4.69577C8.11025 4.7721 8.23363 4.81846 8.36256 4.82983L11.3825 5.09084C11.4025 5.09189 11.4216 5.09924 11.4371 5.11183C11.4526 5.12443 11.4637 5.14161 11.4688 5.16092C11.4759 5.18011 11.4771 5.201 11.4721 5.22085C11.4671 5.24069 11.4562 5.25857 11.4409 5.27213Z"
        fill={colors}
      />
    </svg>
  );
};
const AddComment = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clirule="evenodd"
        d="M1.95437 1.87073C2.07876 1.76267 2.23239 1.69391 2.39585 1.67315C2.5593 1.65238 2.72525 1.68054 2.8727 1.75406L17.8727 9.25406C18.0114 9.32317 18.128 9.42958 18.2096 9.56133C18.2911 9.69308 18.3343 9.84495 18.3343 9.99989C18.3343 10.1548 18.2911 10.3067 18.2096 10.4385C18.128 10.5702 18.0114 10.6766 17.8727 10.7457L2.8727 18.2457C2.72526 18.3195 2.55924 18.3479 2.39566 18.3273C2.23208 18.3067 2.07828 18.238 1.95374 18.13C1.8292 18.0219 1.7395 17.8794 1.696 17.7203C1.6525 17.5613 1.65715 17.3929 1.70937 17.2366L3.84437 10.8332H8.33354C8.55455 10.8332 8.76651 10.7454 8.92279 10.5891C9.07907 10.4329 9.16687 10.2209 9.16687 9.99989C9.16687 9.77888 9.07907 9.56692 8.92279 9.41064C8.76651 9.25436 8.55455 9.16656 8.33354 9.16656H3.84437L1.70854 2.76323C1.65659 2.6069 1.65214 2.43869 1.69574 2.27984C1.73935 2.12098 1.82989 1.97862 1.95437 1.87073Z"
        fill="#F5F5F5"
      />
    </svg>
  );
};
const CommentStarIcon = ({ colors }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6L13.434 8.77725L16.5 9.22275L14.25 11.25L15 14.25L12 12.5625L9 14.25L9.75 11.25L7.5 9.22275L10.65 8.77725L12 6Z"
        fill="#007DCA"
      />
      <path
        d="M13.302 22.5L12 21.75L15 16.5H19.5C19.6971 16.5003 19.8923 16.4617 20.0744 16.3864C20.2565 16.3111 20.422 16.2007 20.5613 16.0613C20.7007 15.922 20.8111 15.7565 20.8864 15.5744C20.9617 15.3923 21.0003 15.1971 21 15V6C21.0003 5.80293 20.9617 5.60775 20.8864 5.42562C20.8111 5.2435 20.7007 5.07803 20.5613 4.93868C20.422 4.79933 20.2565 4.68885 20.0744 4.61358C19.8923 4.5383 19.6971 4.4997 19.5 4.5H4.5C4.30293 4.4997 4.10775 4.5383 3.92562 4.61358C3.7435 4.68885 3.57803 4.79933 3.43868 4.93868C3.29933 5.07803 3.18885 5.2435 3.11358 5.42562C3.0383 5.60775 2.9997 5.80293 3 6V15C2.9997 15.1971 3.0383 15.3923 3.11358 15.5744C3.18885 15.7565 3.29933 15.922 3.43868 16.0613C3.57803 16.2007 3.7435 16.3111 3.92562 16.3864C4.10775 16.4617 4.30293 16.5003 4.5 16.5H11.25V18H4.5C3.70435 18 2.94129 17.6839 2.37868 17.1213C1.81607 16.5587 1.5 15.7956 1.5 15V6C1.4999 5.60601 1.57743 5.21585 1.72816 4.85183C1.87889 4.48781 2.09986 4.15706 2.37846 3.87846C2.65706 3.59986 2.98781 3.37889 3.35183 3.22816C3.71585 3.07743 4.10601 2.9999 4.5 3H19.5C19.894 2.9999 20.2841 3.07743 20.6482 3.22816C21.0122 3.37889 21.3429 3.59986 21.6215 3.87846C21.9001 4.15706 22.1211 4.48781 22.2718 4.85183C22.4226 5.21585 22.5001 5.60601 22.5 6V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H15.8738L13.302 22.5Z"
        fill={colors}
      />
    </svg>
  );
};

const UnderSection = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6.75C10.2426 6.75 11.25 5.74264 11.25 4.5C11.25 3.25736 10.2426 2.25 9 2.25C7.75736 2.25 6.75 3.25736 6.75 4.5C6.75 5.74264 7.75736 6.75 9 6.75Z"
        stroke="#151515"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12H3C2.17157 12 1.5 12.6716 1.5 13.5V14.25C1.5 15.0784 2.17157 15.75 3 15.75H6C6.82843 15.75 7.5 15.0784 7.5 14.25V13.5C7.5 12.6716 6.82843 12 6 12Z"
        stroke="#151515"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12H12C11.1716 12 10.5 12.6716 10.5 13.5V14.25C10.5 15.0784 11.1716 15.75 12 15.75H15C15.8284 15.75 16.5 15.0784 16.5 14.25V13.5C16.5 12.6716 15.8284 12 15 12Z"
        stroke="#151515"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 12V10.5C4.5 10.1022 4.65804 9.72064 4.93934 9.43934C5.22064 9.15804 5.60218 9 6 9H12C12.3978 9 12.7794 9.15804 13.0607 9.43934C13.342 9.72064 13.5 10.1022 13.5 10.5V12"
        stroke="#151515"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.75V9"
        stroke="#151515"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const DeliveryStoreIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.1115 6.46787L14.6115 2.34287C14.5008 2.28195 14.3764 2.25 14.25 2.25C14.1236 2.25 13.9993 2.28195 13.8885 2.34287L6.38851 6.46787C6.27092 6.53261 6.17286 6.62773 6.10457 6.7433C6.03627 6.85886 6.00024 6.99064 6.00024 7.12487C6.00024 7.25911 6.03627 7.39088 6.10457 7.50645C6.17286 7.62201 6.27092 7.71713 6.38851 7.78187L13.5 11.6931V19.7324L11.223 18.4799L10.5 19.7931L13.8885 21.6569C13.9992 21.7179 14.1236 21.75 14.25 21.75C14.3764 21.75 14.5008 21.7179 14.6115 21.6569L22.1115 17.5319C22.2291 17.4672 22.3273 17.3721 22.3956 17.2565C22.4639 17.1409 22.5 17.0091 22.5 16.8749V7.12487C22.5 6.99061 22.4639 6.85882 22.3956 6.74325C22.3273 6.62769 22.2291 6.53258 22.1115 6.46787ZM14.25 3.85637L20.1938 7.12487L14.25 10.3934L8.30626 7.12487L14.25 3.85637ZM21 16.4316L15 19.7316V11.6924L21 8.39237V16.4316Z"
        fill="#2C2C2C"
      />
      <path
        d="M7.5 12H1.5V10.5H7.5V12ZM9 18H3V16.5H9V18ZM10.5 15H4.5V13.5H10.5V15Z"
        fill="#2C2C2C"
      />
    </svg>
  );
};
const ByBrandIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.83301 8.9502V11.6169"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 7.5V13.0667"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.167 8.9502V11.6169"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.50033 18.3332H12.5003C16.667 18.3332 18.3337 16.6665 18.3337 12.4998V7.49984C18.3337 3.33317 16.667 1.6665 12.5003 1.6665H7.50033C3.33366 1.6665 1.66699 3.33317 1.66699 7.49984V12.4998C1.66699 16.6665 3.33366 18.3332 7.50033 18.3332Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ManWomanGen = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="22"
      viewBox="0 0 16 22"
      fill="none"
    >
      <path
        d="M5.56582 20.9997C5.56582 21.3587 5.85684 21.6497 6.21582 21.6497C6.57481 21.6497 6.86582 21.3587 6.86582 20.9997L5.56582 20.9997ZM5.56582 15.2271L5.56582 20.9997L6.86582 20.9997L6.86582 15.2271L5.56582 15.2271Z"
        fill="#DD006A"
      />
      <path
        d="M8.60645 18.1138L3.82487 18.1138"
        stroke="#DD006A"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M15.6442 2.07136C15.6839 1.71352 15.4278 1.39139 15.0721 1.35186L9.27501 0.707757C8.91928 0.668231 8.59867 0.926276 8.55891 1.28412C8.51915 1.64196 8.7753 1.96409 9.13103 2.00361L14.284 2.57615L13.708 7.75957C13.6683 8.11741 13.9244 8.43953 14.2802 8.47906C14.6359 8.51859 14.9565 8.26054 14.9963 7.9027L15.6442 2.07136ZM10.9241 6.11472L15.4046 2.50855L14.5955 1.49103L10.115 5.0972L10.9241 6.11472Z"
        fill="#008FCD"
      />
      <path
        d="M11.7821 9.93538C11.7821 13.034 9.28639 15.5391 6.21605 15.5391C3.1457 15.5391 0.65 13.034 0.65 9.93538C0.65 6.83681 3.1457 4.33164 6.21605 4.33164C9.28639 4.33164 11.7821 6.83681 11.7821 9.93538Z"
        stroke="url(#paint0_linear_3887_16536)"
        strokeWidth="1.3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3887_16536"
          x1="10.5"
          y1="6"
          x2="6.21604"
          y2="16.1891"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#008FCD" />
          <stop offset="1" stopColor="#DD006A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
// ---------------------------------------------
const AutummBoyIcons = () => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.75"
        y="12.0171"
        width="2.70833"
        height="5.41667"
        transform="rotate(30 4.75 12.0171)"
        fill="#E17A02"
      />
      <rect
        x="9.42871"
        y="13.3706"
        width="2.70833"
        height="5.41667"
        transform="rotate(-30 9.42871 13.3706)"
        fill="#E17A02"
      />
      <rect
        x="0.266602"
        y="6.73242"
        width="2.70833"
        height="5.41667"
        transform="rotate(-60 0.266602 6.73242)"
        fill="#E17A02"
      />
      <rect
        x="14.3906"
        y="4.38721"
        width="2.70833"
        height="5.41667"
        transform="rotate(60 14.3906 4.38721)"
        fill="#E17A02"
      />
      <rect
        x="2.58301"
        y="17.0415"
        width="2.70833"
        height="4.33333"
        transform="rotate(-60 2.58301 17.0415)"
        fill="#E17A02"
      />
      <rect
        x="12.8359"
        y="14.5503"
        width="2.70833"
        height="4.33333"
        transform="rotate(60 12.8359 14.5503)"
        fill="#E17A02"
      />
      <path
        d="M4.20801 6.75H11.7913V10.2708V12.0312L10.7913 12.7917L9.89551 13.7917H7.99967H6.10384L5.20801 12.7917L4.20801 12.0312V10.2708V6.75Z"
        fill="#FDA135"
      />
      <path
        d="M4.20801 10.5415H11.7913V12.1665L10.1663 13.7915H5.83301L4.20801 12.1665V10.5415Z"
        fill="#FFE8CC"
      />
      <rect
        x="5.29199"
        y="0.791504"
        width="5.41667"
        height="5.41667"
        rx="2.70833"
        fill="#FEB867"
      />
    </svg>
  );
};
const SpringBoyIcons = () => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.75"
        y="12.0171"
        width="2.70833"
        height="5.41667"
        transform="rotate(30 4.75 12.0171)"
        fill="#008F0E"
      />
      <rect
        x="9.42871"
        y="13.3706"
        width="2.70833"
        height="5.41667"
        transform="rotate(-30 9.42871 13.3706)"
        fill="#008F0E"
      />
      <rect
        x="0.266602"
        y="6.73242"
        width="2.70833"
        height="5.41667"
        transform="rotate(-60 0.266602 6.73242)"
        fill="#008F0E"
      />
      <rect
        x="14.3906"
        y="4.38721"
        width="2.70833"
        height="5.41667"
        transform="rotate(60 14.3906 4.38721)"
        fill="#008F0E"
      />
      <rect
        x="2.58301"
        y="17.0415"
        width="2.70833"
        height="4.33333"
        transform="rotate(-60 2.58301 17.0415)"
        fill="#008F0E"
      />
      <rect
        x="12.8359"
        y="14.5503"
        width="2.70833"
        height="4.33333"
        transform="rotate(60 12.8359 14.5503)"
        fill="#008F0E"
      />
      <path
        d="M4.20801 6.75H11.7913V10.2708V12.0312L10.7913 12.7917L9.89551 13.7917H7.99967H6.10384L5.20801 12.7917L4.20801 12.0312V10.2708V6.75Z"
        fill="#00B812"
      />
      <path
        d="M4.20801 10.5415H11.7913V12.1665L10.1663 13.7915H5.83301L4.20801 12.1665V10.5415Z"
        fill="#CCFFD1"
      />
      <rect
        x="5.29199"
        y="0.791504"
        width="5.41667"
        height="5.41667"
        rx="2.70833"
        fill="#00CC14"
      />
    </svg>
  );
};
const SummerBoyIcons = () => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.75"
        y="12.0171"
        width="2.70833"
        height="5.41667"
        transform="rotate(30 4.75 12.0171)"
        fill="#FBC02D"
      />
      <rect
        x="9.42871"
        y="13.3706"
        width="2.70833"
        height="5.41667"
        transform="rotate(-30 9.42871 13.3706)"
        fill="#FBC02D"
      />
      <rect
        x="0.266602"
        y="6.73242"
        width="2.70833"
        height="5.41667"
        transform="rotate(-60 0.266602 6.73242)"
        fill="#FBC02D"
      />
      <rect
        x="14.3906"
        y="4.38721"
        width="2.70833"
        height="5.41667"
        transform="rotate(60 14.3906 4.38721)"
        fill="#FBC02D"
      />
      <rect
        x="2.58301"
        y="17.0415"
        width="2.70833"
        height="4.33333"
        transform="rotate(-60 2.58301 17.0415)"
        fill="#FBC02D"
      />
      <rect
        x="12.8359"
        y="14.5503"
        width="2.70833"
        height="4.33333"
        transform="rotate(60 12.8359 14.5503)"
        fill="#FBC02D"
      />
      <path
        d="M4.20801 6.75H11.7913V10.2708V12.0312L10.7913 12.7917L9.89551 13.7917H7.99967H6.10384L5.20801 12.7917L4.20801 12.0312V10.2708V6.75Z"
        fill="#FCD269"
      />
      <path
        d="M4.20801 10.5415H11.7913V12.1665L10.1663 13.7915H5.83301L4.20801 12.1665V10.5415Z"
        fill="#FEF0CD"
      />
      <rect
        x="5.29199"
        y="0.791504"
        width="5.41667"
        height="5.41667"
        rx="2.70833"
        fill="#FCD573"
      />
    </svg>
  );
};
const WinterBoyIcons = () => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.75"
        y="12.0171"
        width="2.70833"
        height="5.41667"
        transform="rotate(30 4.75 12.0171)"
        fill="#1E88E5"
      />
      <rect
        x="9.42871"
        y="13.3706"
        width="2.70833"
        height="5.41667"
        transform="rotate(-30 9.42871 13.3706)"
        fill="#1E88E5"
      />
      <rect
        x="0.266602"
        y="6.73242"
        width="2.70833"
        height="5.41667"
        transform="rotate(-60 0.266602 6.73242)"
        fill="#1E88E5"
      />
      <rect
        x="14.3906"
        y="4.38721"
        width="2.70833"
        height="5.41667"
        transform="rotate(60 14.3906 4.38721)"
        fill="#1E88E5"
      />
      <rect
        x="2.58301"
        y="17.0415"
        width="2.70833"
        height="4.33333"
        transform="rotate(-60 2.58301 17.0415)"
        fill="#1E88E5"
      />
      <rect
        x="12.8359"
        y="14.5503"
        width="2.70833"
        height="4.33333"
        transform="rotate(60 12.8359 14.5503)"
        fill="#1E88E5"
      />
      <path
        d="M4.20801 6.75H11.7913V10.2708V12.0312L10.7913 12.7917L9.89551 13.7917H7.99967H6.10384L5.20801 12.7917L4.20801 12.0312V10.2708V6.75Z"
        fill="#64B5F6"
      />
      <path
        d="M4.20801 10.5415H11.7913V12.1665L10.1663 13.7915H5.83301L4.20801 12.1665V10.5415Z"
        fill="#CCE8FF"
      />
      <rect
        x="5.29199"
        y="0.791504"
        width="5.41667"
        height="5.41667"
        rx="2.70833"
        fill="#90CAF9"
      />
    </svg>
  );
};
const ManWomGenBlack = ({ colors }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M17.8752 2.0625H14.4377C14.2554 2.0625 14.0805 2.13493 13.9516 2.26386C13.8226 2.3928 13.7502 2.56766 13.7502 2.75C13.7502 2.93234 13.8226 3.1072 13.9516 3.23614C14.0805 3.36507 14.2554 3.4375 14.4377 3.4375H16.2157L14.0544 5.59883C13.4198 5.0074 12.6543 4.57447 11.8204 4.33541C10.9865 4.09635 10.1078 4.05793 9.25625 4.2233C8.40466 4.38867 7.60427 4.75313 6.92044 5.28691C6.23662 5.82069 5.68875 6.50866 5.32159 7.29462C4.95443 8.08059 4.7784 8.94225 4.80786 9.80925C4.83732 10.6762 5.07145 11.524 5.49112 12.2832C5.91079 13.0424 6.50409 13.6916 7.22258 14.1777C7.94107 14.6639 8.76435 14.9731 9.6252 15.0803V16.5H7.5627C7.38037 16.5 7.2055 16.5724 7.07657 16.7014C6.94763 16.8303 6.8752 17.0052 6.8752 17.1875C6.8752 17.3698 6.94763 17.5447 7.07657 17.6736C7.2055 17.8026 7.38037 17.875 7.5627 17.875H9.6252V19.9375C9.6252 20.1198 9.69763 20.2947 9.82657 20.4236C9.9555 20.5526 10.1304 20.625 10.3127 20.625C10.495 20.625 10.6699 20.5526 10.7988 20.4236C10.9278 20.2947 11.0002 20.1198 11.0002 19.9375V17.875H13.0627C13.245 17.875 13.4199 17.8026 13.5488 17.6736C13.6778 17.5447 13.7502 17.3698 13.7502 17.1875C13.7502 17.0052 13.6778 16.8303 13.5488 16.7014C13.4199 16.5724 13.245 16.5 13.0627 16.5H11.0002V15.0803C11.9217 14.9652 12.799 14.6183 13.5501 14.0721C14.3012 13.5259 14.9015 12.7982 15.295 11.957C15.6885 11.1157 15.8623 10.1885 15.8001 9.26189C15.738 8.33529 15.4419 7.43956 14.9396 6.65844L17.1877 4.40945V6.1875C17.1877 6.36984 17.2601 6.5447 17.3891 6.67364C17.518 6.80257 17.6929 6.875 17.8752 6.875C18.0575 6.875 18.2324 6.80257 18.3613 6.67364C18.4903 6.5447 18.5627 6.36984 18.5627 6.1875V2.75C18.5627 2.56766 18.4903 2.3928 18.3613 2.26386C18.2324 2.13493 18.0575 2.0625 17.8752 2.0625ZM10.3127 13.75C9.49685 13.75 8.69933 13.5081 8.02097 13.0548C7.34262 12.6016 6.81391 11.9573 6.5017 11.2036C6.18949 10.4498 6.1078 9.62042 6.26696 8.82025C6.42613 8.02008 6.81899 7.28508 7.39589 6.70818C7.97278 6.13129 8.70778 5.73843 9.50795 5.57926C10.3081 5.4201 11.1375 5.50179 11.8913 5.814C12.645 6.12621 13.2893 6.65492 13.7425 7.33327C14.1958 8.01163 14.4377 8.80915 14.4377 9.625C14.4366 10.7187 14.0016 11.7672 13.2283 12.5406C12.4549 13.3139 11.4064 13.7489 10.3127 13.75Z"
        fill={colors}
      />
    </svg>
  );
};
const PlusAddCectorIcons = ({ colors }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.91667 9.91667V16.3333C9.91667 16.5764 9.82009 16.8096 9.64818 16.9815C9.47627 17.1534 9.24312 17.25 9 17.25C8.75688 17.25 8.52373 17.1534 8.35182 16.9815C8.17991 16.8096 8.08333 16.5764 8.08333 16.3333V9.91667H1.66667C1.42355 9.91667 1.19039 9.82009 1.01849 9.64818C0.846577 9.47627 0.75 9.24312 0.75 9C0.75 8.75688 0.846577 8.52373 1.01849 8.35182C1.19039 8.17991 1.42355 8.08333 1.66667 8.08333H8.08333V1.66667C8.08333 1.42355 8.17991 1.19039 8.35182 1.01849C8.52373 0.846577 8.75688 0.75 9 0.75C9.24312 0.75 9.47627 0.846577 9.64818 1.01849C9.82009 1.19039 9.91667 1.42355 9.91667 1.66667V8.08333H16.3333C16.5764 8.08333 16.8096 8.17991 16.9815 8.35182C17.1534 8.52373 17.25 8.75688 17.25 9C17.25 9.24312 17.1534 9.47627 16.9815 9.64818C16.8096 9.82009 16.5764 9.91667 16.3333 9.91667H9.91667Z"
        fill={colors}
      />
    </svg>
  );
};

const ShowMoreBackIcon = ({ colors, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_2291_34733)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.07599 5.617C3.15174 5.43431 3.27995 5.27819 3.44442 5.16837C3.60889 5.05854 3.80223 4.99995 3.99999 5H14C14.9192 5 15.8295 5.18106 16.6788 5.53284C17.5281 5.88463 18.2997 6.40024 18.9497 7.05025C19.5998 7.70026 20.1154 8.47194 20.4672 9.32122C20.8189 10.1705 21 11.0807 21 12C21 12.9193 20.8189 13.8295 20.4672 14.6788C20.1154 15.5281 19.5998 16.2997 18.9497 16.9497C18.2997 17.5998 17.5281 18.1154 16.6788 18.4672C15.8295 18.8189 14.9192 19 14 19H4.99999C4.73478 19 4.48042 18.8946 4.29289 18.7071C4.10535 18.5196 3.99999 18.2652 3.99999 18C3.99999 17.7348 4.10535 17.4804 4.29289 17.2929C4.48042 17.1054 4.73478 17 4.99999 17H14C15.3261 17 16.5978 16.4732 17.5355 15.5355C18.4732 14.5979 19 13.3261 19 12C19 10.6739 18.4732 9.40215 17.5355 8.46447C16.5978 7.52678 15.3261 7 14 7H6.41399L8.20699 8.793C8.38915 8.9816 8.48995 9.2342 8.48767 9.4964C8.48539 9.7586 8.38022 10.0094 8.19481 10.1948C8.0094 10.3802 7.75859 10.4854 7.4964 10.4877C7.2342 10.49 6.9816 10.3892 6.79299 10.207L3.29299 6.707C3.15306 6.56716 3.05775 6.38895 3.01913 6.19492C2.9805 6.0009 3.00029 5.79977 3.07599 5.617Z"
          fill={colors}
        />
      </g>
      <defs>
        <clipPath id="clip0_2291_34733">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Star6Icon = () => {
  return (
    <svg
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.312 3.56L6.456 4.616L8.424 6.848L7.032 8.048L5.112 5.528L3.216 8.024L1.848 6.824L3.816 4.592L0.984 3.536L1.704 1.856L4.32 3.104L4.248 0.175999H6.024L5.952 3.128L8.592 1.856L9.312 3.56Z"
        fill="#FA4F4F"
      />
    </svg>
  );
};

const DeleteIcon = ({ width }) => {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83331 17.5C5.37498 17.5 4.98248 17.3367 4.65581 17.01C4.32915 16.6833 4.16609 16.2911 4.16665 15.8333V5H3.33331V3.33333H7.49998V2.5H12.5V3.33333H16.6666V5H15.8333V15.8333C15.8333 16.2917 15.67 16.6842 15.3433 17.0108C15.0166 17.3375 14.6244 17.5006 14.1666 17.5H5.83331ZM7.49998 14.1667H9.16665V6.66667H7.49998V14.1667ZM10.8333 14.1667H12.5V6.66667H10.8333V14.1667Z"
        fill="currentColor"
      />
    </svg>
  );
};

const HeartIcon = () => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.41337 12.8733C8.18671 12.9533 7.81337 12.9533 7.58671 12.8733C5.65337 12.2133 1.33337 9.45998 1.33337 4.79332C1.33337 2.73332 2.99337 1.06665 5.04004 1.06665C6.25337 1.06665 7.32671 1.65332 8.00004 2.55998C8.67337 1.65332 9.75337 1.06665 10.96 1.06665C13.0067 1.06665 14.6667 2.73332 14.6667 4.79332C14.6667 9.45998 10.3467 12.2133 8.41337 12.8733Z"
        stroke="black"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CategoryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M11.25 12.9166C11.25 11.3452 11.25 10.5596 11.7382 10.0714C12.2263 9.58325 13.012 9.58325 14.5833 9.58325C16.1547 9.58325 16.9404 9.58325 17.4285 10.0714C17.9167 10.5596 17.9167 11.3452 17.9167 12.9166V14.5833C17.9167 16.1546 17.9167 16.9403 17.4285 17.4284C16.9404 17.9166 16.1547 17.9166 14.5833 17.9166C13.012 17.9166 12.2263 17.9166 11.7382 17.4284C11.25 16.9403 11.25 16.1546 11.25 14.5833V12.9166Z"
        stroke="#303030"
        strokeWidth="1.5"
      />
      <path
        d="M1.66675 7.08325C1.66675 8.6546 1.66675 9.44027 2.1549 9.92843C2.64306 10.4166 3.42873 10.4166 5.00008 10.4166C6.57143 10.4166 7.3571 10.4166 7.84526 9.92843C8.33341 9.44027 8.33341 8.6546 8.33341 7.08325V5.41658C8.33341 3.84524 8.33341 3.05956 7.84526 2.57141C7.3571 2.08325 6.57143 2.08325 5.00008 2.08325C3.42873 2.08325 2.64306 2.08325 2.1549 2.57141C1.66675 3.05956 1.66675 3.84524 1.66675 5.41658V7.08325Z"
        stroke="#303030"
        strokeWidth="1.5"
      />
      <path
        d="M11.25 4.58325C11.25 3.80668 11.25 3.4184 11.3769 3.11211C11.546 2.70373 11.8705 2.37928 12.2789 2.21012C12.5851 2.08325 12.9734 2.08325 13.75 2.08325H15.4167C16.1932 2.08325 16.5815 2.08325 16.8878 2.21012C17.2962 2.37928 17.6206 2.70373 17.7898 3.11211C17.9167 3.4184 17.9167 3.80668 17.9167 4.58325C17.9167 5.35982 17.9167 5.74811 17.7898 6.05439C17.6206 6.46277 17.2962 6.78723 16.8878 6.95638C16.5815 7.08325 16.1932 7.08325 15.4167 7.08325H13.75C12.9734 7.08325 12.5851 7.08325 12.2789 6.95638C11.8705 6.78723 11.546 6.46277 11.3769 6.05439C11.25 5.74811 11.25 5.35982 11.25 4.58325Z"
        stroke="#303030"
        strokeWidth="1.5"
      />
      <path
        d="M1.66675 15.4167C1.66675 16.1933 1.66675 16.5816 1.79362 16.8879C1.96277 17.2963 2.28723 17.6207 2.69561 17.7899C3.00189 17.9167 3.39018 17.9167 4.16675 17.9167H5.83341C6.60998 17.9167 6.99827 17.9167 7.30455 17.7899C7.71293 17.6207 8.03739 17.2963 8.20655 16.8879C8.33341 16.5816 8.33341 16.1933 8.33341 15.4167C8.33341 14.6402 8.33341 14.2519 8.20655 13.9456C8.03739 13.5372 7.71293 13.2128 7.30455 13.0436C6.99827 12.9167 6.60998 12.9167 5.83341 12.9167H4.16675C3.39018 12.9167 3.00189 12.9167 2.69561 13.0436C2.28723 13.2128 1.96277 13.5372 1.79362 13.9456C1.66675 14.2519 1.66675 14.6402 1.66675 15.4167Z"
        stroke="#303030"
        strokeWidth="1.5"
      />
    </svg>
  );
};

const TypeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M18.75 9.375H10.625V1.25H9.375V9.375H1.25V10.625H9.375V18.75H10.625V10.625H18.75V9.375Z"
        fill="black"
      />
      <path
        d="M15.9913 12.5L16.875 13.3838L14.6338 15.625L16.875 17.8663L15.9913 18.75L12.8663 15.625L15.9913 12.5ZM6.875 18.75H1.875C1.76851 18.7499 1.66379 18.7227 1.5708 18.6708C1.4778 18.6189 1.3996 18.5441 1.34363 18.4535C1.28766 18.3629 1.25576 18.2595 1.25097 18.1531C1.24618 18.0467 1.26865 17.9409 1.31625 17.8456L3.81625 12.8456C3.87392 12.7488 3.95577 12.6685 4.05377 12.6128C4.15178 12.5571 4.26258 12.5278 4.37531 12.5278C4.48805 12.5278 4.59885 12.5571 4.69686 12.6128C4.79486 12.6685 4.87671 12.7488 4.93438 12.8456L7.43438 17.8456C7.482 17.9409 7.50447 18.0468 7.49965 18.1533C7.49483 18.2597 7.46288 18.3632 7.40683 18.4538C7.35079 18.5444 7.2725 18.6192 7.17942 18.671C7.08634 18.7229 6.98155 18.7501 6.875 18.75ZM2.88625 17.5H5.86375L4.375 14.5225L2.88625 17.5ZM17.5 7.5H13.75C13.4186 7.49967 13.1008 7.36787 12.8665 7.13352C12.6321 6.89917 12.5003 6.58142 12.5 6.25V2.5C12.5003 2.16858 12.6321 1.85083 12.8665 1.61648C13.1008 1.38213 13.4186 1.25033 13.75 1.25H17.5C17.8314 1.25033 18.1492 1.38213 18.3835 1.61648C18.6179 1.85083 18.7497 2.16858 18.75 2.5V6.25C18.7497 6.58142 18.6179 6.89917 18.3835 7.13352C18.1492 7.36787 17.8314 7.49967 17.5 7.5ZM13.75 2.5V6.25H17.5006L17.5 2.5H13.75ZM4.375 7.5C3.75693 7.5 3.15275 7.31672 2.63884 6.97334C2.12494 6.62996 1.7244 6.14191 1.48788 5.57089C1.25135 4.99987 1.18947 4.37154 1.31005 3.76534C1.43063 3.15915 1.72825 2.60233 2.16529 2.16529C2.60233 1.72825 3.15915 1.43063 3.76534 1.31005C4.37154 1.18947 4.99987 1.25135 5.57089 1.48788C6.14191 1.7244 6.62996 2.12494 6.97334 2.63884C7.31672 3.15275 7.5 3.75693 7.5 4.375C7.49901 5.2035 7.16945 5.99778 6.58361 6.58361C5.99778 7.16945 5.2035 7.49901 4.375 7.5ZM4.375 2.5C4.00416 2.5 3.64165 2.60997 3.33331 2.816C3.02496 3.02202 2.78464 3.31486 2.64273 3.65747C2.50081 4.00008 2.46368 4.37708 2.53603 4.7408C2.60838 5.10451 2.78695 5.4386 3.04918 5.70083C3.3114 5.96305 3.64549 6.14163 4.00921 6.21397C4.37292 6.28632 4.74992 6.24919 5.09253 6.10728C5.43514 5.96536 5.72798 5.72504 5.93401 5.4167C6.14003 5.10835 6.25 4.74584 6.25 4.375C6.24951 3.87787 6.0518 3.40125 5.70028 3.04972C5.34876 2.6982 4.87213 2.5005 4.375 2.5Z"
        fill="black"
      />
    </svg>
  );
};

const DeliveryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <path d="M22.1115 6.46787L14.6115 2.34287C14.5008 2.28195 14.3764 2.25 14.25 2.25C14.1236 2.25 13.9993 2.28195 13.8885 2.34287L6.38851 6.46787C6.27092 6.53261 6.17286 6.62773 6.10457 6.7433C6.03627 6.85886 6.00024 6.99064 6.00024 7.12487C6.00024 7.25911 6.03627 7.39088 6.10457 7.50645C6.17286 7.62201 6.27092 7.71713 6.38851 7.78187L13.5 11.6931V19.7324L11.223 18.4799L10.5 19.7931L13.8885 21.6569C13.9992 21.7179 14.1236 21.75 14.25 21.75C14.3764 21.75 14.5008 21.7179 14.6115 21.6569L22.1115 17.5319C22.2291 17.4672 22.3273 17.3721 22.3956 17.2565C22.4639 17.1409 22.5 17.0091 22.5 16.8749V7.12487C22.5 6.99061 22.4639 6.85882 22.3956 6.74325C22.3273 6.62769 22.2291 6.53258 22.1115 6.46787ZM14.25 3.85637L20.1938 7.12487L14.25 10.3934L8.30626 7.12487L14.25 3.85637ZM21 16.4316L15 19.7316V11.6924L21 8.39237V16.4316Z" fill="#2C2C2C" />
      <path d="M7.5 12H1.5V10.5H7.5V12ZM9 18H3V16.5H9V18ZM10.5 15H4.5V13.5H10.5V15Z" fill="#2C2C2C" />
    </svg>
  )
}
const DownArrowAntd = () => {
  return (
    <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
      </path></svg>

  )
}
export {
  DownArrowAntd,
  ActivePersonIcons,
  ActiveHomeIcons,
  ActiveCotegoryIcons,
  ActiveBasketIcons,
  ActiveHeartIcons,
  // ActiveHeartIcons,
  SeasonSquare,
  SircleNext,
  ArrowPrevousNext,
  NoImg,
  HeartIcons,
  HeartLinkIcons,
  StarIcons,
  SaveBasketIcons,
  SaveMarketIcons,
  BasketIcons,
  InputCheckedTrueIcons,
  CheckedStatusIcons,
  ArrowTopIcons,
  LocationIcons,
  LocationColoursIcons,
  UploadIcons,
  HouseStatisticIcons, //Footer
  DashboardStatisticIcons,
  WarningSircleIcons,
  PersonIcons,
  PersonPlusIcons,
  ListCollectionIcons,
  CotegoryIcons,
  CotegoryMenuIcons, //CategoryMenu
  MapSitesIcons,
  MapIcons,
  MapNavMenuIcons,
  MarketIcons,
  PrivateCheckIcons,
  CommentIcons,
  PhoneIcons,
  EmailIcons,
  FooterOriginalIcons,
  MyPurchaseIcons, //my order
  MenuCloseIcons,
  MenuOpenIcons,
  EyesOpenIcons,
  ClothesIcons,
  DollorIcons,
  PlusIcons,
  HomeIcons, //BreadCamp
  ItailIcons, //BreadCamp
  SearchIcons,
  VolumeIcons,
  BrushColorIcons,
  TopBrandsIcon, //Top Brandsicons
  DeliveryIcons,
  TicketDiscountIcons,
  CircleSuccessIcons,
  CircleWarningIcons,
  DeleteIcons,
  PaymeSystemIcons,
  CalendarIcons,
  // product
  ProductArticleIcons,
  ProductSwitchIcons,
  ProductSizeIcons,
  DiscountShapeIcons,
  WomanGenIcons,
  ManGenIcons,
  VideoStoreIcons,
  // maps
  ClockIcons,
  ClothesHangIcons,
  MarkerMapsIcons,
  MaximazeMapsIcons,
  FullScreenMapsIcons,
  //Logout
  LogOutIcons,
  SortIcons,
  FilterIcons,
  ProductShopIcons,
  MenuMore,
  FreeStarIcon,
  SendMessageIcon,
  NoNameIcon,
  ThreeCicleIcon,
  DashboardList,
  DashboardUser,
  StarIcon,
  CopyIcon,
  SettingsIcon,
  CategoryUsersIcon,
  ChapterIcon,
  QualityIcon,
  ReviewIcon,
  GoBackIcon,
  CreditCardNumber,
  UserMailIcon,
  SuccessIconsForMail,
  SuccessIconsForMailGreen,
  FreeStar,
  AddComment,
  CommentStarIcon,
  UnderSection,
  DeliveryStoreIcon,
  ByBrandIcon,
  ChildGenIcon,
  ManWomanGen,
  WinterBoyIcons,
  SummerBoyIcons,
  SpringBoyIcons,
  AutummBoyIcons,
  ManWomGenBlack,
  PlusAddCectorIcons,
  ShowMoreBackIcon,
  Star6Icon,
  DeleteIcon,
  HeartIcon,
  CategoryIcon,
  TypeIcon,
  DeliveryIcon
};

// video PersonIcons
