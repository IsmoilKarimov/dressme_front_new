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
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const StarIcons = () => {
  return (
    <svg
      width="20"
      height="20"
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
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99988 18.6667H13.9999C16.6799 18.6667 17.1599 17.5934 17.2999 16.2867L17.7999 12.2867C17.9799 10.66 17.5132 9.33337 14.6666 9.33337H9.33322C6.48655 9.33337 6.01988 10.66 6.19988 12.2867L6.69988 16.2867C6.83988 17.5934 7.31988 18.6667 9.99988 18.6667Z"
          stroke="black"
          stroke-width="1.2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.3306 12H14.3366"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.66268 12H9.66867"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect x="1" y="13" width="10" height="10" rx="5" fill="#FCFCFC" />
        <path
          d="M4 18H8"
          stroke="black"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6 20V16"
          stroke="black"
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.16669 7.99999L7.05335 9.88666L10.8334 6.11333"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
      />
      <path
        d="M3.01667 7.07484C4.65833 -0.141827 15.35 -0.133494 16.9833 7.08317C17.9417 11.3165 15.3083 14.8998 13 17.1165C11.325 18.7332 8.675 18.7332 6.99167 17.1165C4.69167 14.8998 2.05833 11.3082 3.01667 7.07484Z"
        stroke="black"
        stroke-width="1.5"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 1.6665L11.6667 3.33317"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.83333 10C2.5 10 2.5 11.4917 2.5 13.3333V14.1667C2.5 16.4667 2.5 18.3333 6.66667 18.3333H13.3333C16.6667 18.3333 17.5 16.4667 17.5 14.1667V13.3333C17.5 11.4917 17.5 10 14.1667 10C13.3333 10 13.1 10.175 12.6667 10.5L11.8167 11.4C10.8333 12.45 9.16667 12.45 8.175 11.4L7.33333 10.5C6.9 10.175 6.66667 10 5.83333 10Z"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.16699 9.99987V8.3332C4.16699 6.6582 4.16699 5.27487 6.66699 5.0332"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.833 9.99987V8.3332C15.833 6.6582 15.833 5.27487 13.333 5.0332"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.75 9.5835L10.25 13.0835L8.91667 11.0835L6.25 13.7502"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0833 9.5835H13.75V11.2502"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0833 7.9165H13.75V9.58317"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.49999 18.3332H12.5C16.6667 18.3332 18.3333 16.6665 18.3333 12.4998V7.49984C18.3333 3.33317 16.6667 1.6665 12.5 1.6665H7.49999C3.33332 1.6665 1.66666 3.33317 1.66666 7.49984V12.4998C1.66666 16.6665 3.33332 18.3332 7.49999 18.3332Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 6.6665V10.8332"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99542 13.3335H10.0029"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.2305 12.6719C5.02717 12.6719 2.29133 13.156 2.29133 15.096C2.29133 17.036 5.0105 17.5377 8.2305 17.5377C11.4347 17.5377 14.1697 17.0527 14.1697 15.1135C14.1697 13.1744 11.4513 12.6719 8.2305 12.6719Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.2305 9.90484C10.333 9.90484 12.0372 8.20067 12.0372 6.09817C12.0372 3.99567 10.333 2.2915 8.2305 2.2915C6.12883 2.2915 4.42464 3.99567 4.42464 6.09817C4.41717 8.19317 6.10883 9.89734 8.20467 9.90484H8.2305Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.0031 7.22412V10.5658"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.708 8.89502H14.2997"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const PersonIcons = ({ colors }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9847 15.3462C8.11713 15.3462 4.81427 15.931 4.81427 18.2729C4.81427 20.6148 8.09617 21.2205 11.9847 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9847 15.3462Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9847 12.0059C14.5228 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5228 2.81445 11.9847 2.81445C9.44664 2.81445 7.38852 4.8716 7.38852 7.40969C7.37997 9.93922 9.42378 11.9973 11.9524 12.0059H11.9847Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0968 10.0308H7.08017"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.37608 6.55029H7.08025"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.2572 2.2915C13.2572 2.2915 6.85967 2.29484 6.84967 2.29484C4.54967 2.309 3.1255 3.82234 3.1255 6.13067V13.794C3.1255 16.114 4.5605 17.6332 6.8805 17.6332C6.8805 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.75 16.5H14.25C15.75 16.5 16.5 15.75 16.5 14.25V12.75C16.5 11.25 15.75 10.5 14.25 10.5H12.75C11.25 10.5 10.5 11.25 10.5 12.75V14.25C10.5 15.75 11.25 16.5 12.75 16.5Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const CotegoryMenuIcons = ({ colors }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6667 1.66699H3.33332C2.41285 1.66699 1.66666 2.41318 1.66666 3.33366V16.667C1.66666 17.5875 2.41285 18.3337 3.33332 18.3337H16.6667C17.5871 18.3337 18.3333 17.5875 18.3333 16.667V3.33366C18.3333 2.41318 17.5871 1.66699 16.6667 1.66699Z"
        stroke={colors}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66666 5.83398H18.3333"
        stroke={colors}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66666 10H18.3333"
        stroke={colors}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.66666 14.167H18.3333"
        stroke={colors}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.13333 3.3335V14.1668"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1083 5.5166V16.6666"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.99999 9C10.3725 9 11.385 7.8825 11.25 6.51L10.755 1.5H7.25249L6.74999 6.51C6.61499 7.8825 7.62749 9 8.99999 9Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.7325 9C15.2475 9 16.3575 7.77 16.2075 6.2625L15.9975 4.2C15.7275 2.25 14.9775 1.5 13.0125 1.5H10.725L11.25 6.7575C11.3775 7.995 12.495 9 13.7325 9Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.23003 9C5.46753 9 6.58503 7.995 6.70503 6.7575L6.87003 5.1L7.23003 1.5H4.94253C2.97753 1.5 2.22753 2.25 1.95753 4.2L1.75503 6.2625C1.60503 7.77 2.71503 9 4.23003 9Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12.75C7.7475 12.75 7.125 13.3725 7.125 14.625V16.5H10.875V14.625C10.875 13.3725 10.2525 12.75 9 12.75Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 1.66667L11.625 18.3333"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.60832 10.1833L1.66663 12.5"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.91875 10.3865L9.3275 11.7952L13.09 8.03271"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3304 9.16667H13.3379"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99624 9.16667H10.0037"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.66209 9.16667H6.66957"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const PhoneIcons = () => {
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
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 12.15H9.285"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 4.5H10.5C12 4.5 12 3.75 12 3C12 1.5 11.25 1.5 10.5 1.5H7.5C6.75 1.5 6 1.5 6 3C6 4.5 6.75 4.5 7.5 4.5Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 3.015C14.4975 3.15 15.75 4.0725 15.75 7.5V12C15.75 15 15 16.5 11.25 16.5H6.75C3 16.5 2.25 15 2.25 12V7.5C2.25 4.08 3.5025 3.15 6 3.015"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const MenuCloseIcons = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3596 18.36L5.63965 5.64001"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
      <path
        d="M18.3596 5.64001L5.63965 18.36"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="bevel"
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
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3 12H21"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3 17H21"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5166 3.75H13.7499C14.2666 3.75 14.7249 3.76667 15.1333 3.825C17.3249 4.06667 17.9166 5.1 17.9166 7.91667V12.0833C17.9166 14.9 17.3249 15.9333 15.1333 16.175C14.7249 16.2333 14.2666 16.25 13.7499 16.25H12.5166"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 1.66667V18.3333"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.2451 10H9.25258"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.91209 10H5.91957"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const ClothesIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_843_5301)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.66678 2.67504V7.67504C1.66547 7.70855 1.67543 7.74154 1.69507 7.76873C1.71471 7.79592 1.74289 7.81575 1.77512 7.82504L4.05845 8.65837C4.08996 8.67135 4.117 8.69324 4.13625 8.72137C4.15549 8.7495 4.16611 8.78263 4.16678 8.81671V16.6667C4.16678 17.1087 4.34238 17.5327 4.65494 17.8452C4.9675 18.1578 5.39142 18.3334 5.83345 18.3334H14.1668C14.6088 18.3334 15.0327 18.1578 15.3453 17.8452C15.6579 17.5327 15.8335 17.1087 15.8335 16.6667V8.80004C15.8343 8.76384 15.8458 8.7287 15.8665 8.69904C15.8873 8.66938 15.9164 8.64653 15.9501 8.63337L18.2251 7.80004C18.2523 7.79272 18.2769 7.7779 18.296 7.75726C18.3152 7.73663 18.3282 7.71103 18.3334 7.68337V2.68337C18.3339 2.64318 18.3198 2.60417 18.2938 2.57355C18.2678 2.54292 18.2315 2.52273 18.1918 2.51671L13.4584 1.66671C13.4212 1.66146 13.3833 1.66835 13.3502 1.68636C13.3172 1.70437 13.2909 1.73255 13.2751 1.76671L12.3834 3.65837C12.1693 4.10929 11.8317 4.49029 11.4099 4.75724C10.9881 5.02419 10.4993 5.16616 10.0001 5.16671V5.16671C9.50093 5.16616 9.01211 5.02419 8.5903 4.75724C8.16849 4.49029 7.83095 4.10929 7.61678 3.65837L6.72512 1.77504C6.71073 1.73933 6.68497 1.70936 6.65182 1.68978C6.61868 1.67019 6.58 1.66208 6.54178 1.66671L1.80845 2.50004C1.76723 2.50621 1.72982 2.52761 1.7036 2.56C1.67738 2.59239 1.66424 2.63344 1.66678 2.67504V2.67504Z"
          stroke="#151515"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
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
const DollorIcons = () => {
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
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 5.5V16.5"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 20.1667C16.0626 20.1667 20.1666 16.0626 20.1666 11C20.1666 5.93738 16.0626 1.83333 11 1.83333C5.93737 1.83333 1.83331 5.93738 1.83331 11C1.83331 16.0626 5.93737 20.1667 11 20.1667Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15V12.5"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.39166 2.35053L2.61666 6.97553C1.96666 7.49219 1.55 8.58386 1.69166 9.40053L2.8 16.0339C3 17.2172 4.13333 18.1755 5.33333 18.1755H14.6667C15.8583 18.1755 17 17.2089 17.2 16.0339L18.3083 9.40053C18.4417 8.58386 18.025 7.49219 17.3833 6.97553L11.6083 2.35886C10.7167 1.64219 9.275 1.64219 8.39166 2.35053Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const BasketIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25 6.39167V5.58333C6.25 3.70833 7.75833 1.86667 9.63333 1.69167C11.8667 1.475 13.75 3.23333 13.75 5.425V6.575"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.49998 18.3333H12.5C15.85 18.3333 16.45 16.9917 16.625 15.3583L17.25 10.3583C17.475 8.325 16.8916 6.66666 13.3333 6.66666H6.66664C3.10831 6.66666 2.52498 8.325 2.74998 10.3583L3.37498 15.3583C3.54998 16.9917 4.14998 18.3333 7.49998 18.3333Z"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9129 10H12.9204"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.07872 10H7.0862"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0153 15.4043L17.9519 18.3333"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.29339 8.00011C1.29083 9.12729 1.24053 10.6647 1.93788 11.2394C2.58834 11.7755 3.04614 11.6373 4.23368 11.7245C5.42207 11.8125 7.93014 15.3058 9.86363 14.2008C10.8611 13.4165 10.9352 11.7722 10.9352 8.00011C10.9352 4.22804 10.8611 2.58372 9.86363 1.79938C7.93014 0.693574 5.42207 4.18775 4.23368 4.27572C3.04614 4.36287 2.58834 4.22475 1.93788 4.7608C1.24053 5.33549 1.29083 6.87292 1.29339 8.00011Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9523 2.41199C19.2898 5.77709 19.2975 10.2159 16.9523 13.5876"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.6578 4.62152C15.8599 6.72132 15.8599 9.28563 14.6578 11.3789"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const BrushColorIcons = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1379_14327)">
        <path
          d="M7.91668 16.25V15H3.75001C3.29168 15 2.87501 14.8167 2.57501 14.5084C2.26668 14.2084 2.08334 13.7917 2.08334 13.3334C2.08334 12.475 2.75001 11.7584 3.59168 11.675C3.64168 11.6667 3.69168 11.6667 3.75001 11.6667H16.25C16.3083 11.6667 16.3583 11.6667 16.4083 11.675C16.8083 11.7084 17.1583 11.8834 17.425 12.1584C17.7667 12.4917 17.95 12.9667 17.9083 13.4834C17.8333 14.3584 17.0417 15 16.1583 15H12.0833V16.25C12.0833 17.4 11.15 18.3334 10 18.3334C8.85001 18.3334 7.91668 17.4 7.91668 16.25Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.8083 4.41669L16.4083 11.675C16.3583 11.6667 16.3083 11.6667 16.25 11.6667H3.75001C3.69168 11.6667 3.64168 11.6667 3.59168 11.675L3.19168 4.41669C3.04168 2.94169 4.20001 1.66669 5.67501 1.66669H14.325C15.8 1.66669 16.9583 2.94169 16.8083 4.41669Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.65833 1.66669V5.83335"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 1.66669V3.33335"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
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
const TopBrandsIcon = () => {
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
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 7.5V13.0667"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.1667 8.95001V11.6167"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.49999 18.3334H12.5C16.6667 18.3334 18.3333 16.6667 18.3333 12.5V7.50002C18.3333 3.33335 16.6667 1.66669 12.5 1.66669H7.49999C3.33332 1.66669 1.66666 3.33335 1.66666 7.50002V12.5C1.66666 16.6667 3.33332 18.3334 7.49999 18.3334Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 11.6666V14.1666C18.3333 15.55 17.2167 16.6666 15.8333 16.6666H15C15 15.75 14.25 15 13.3333 15C12.4167 15 11.6667 15.75 11.6667 16.6666H8.33332C8.33332 15.75 7.58332 15 6.66666 15C5.74999 15 4.99999 15.75 4.99999 16.6666H4.16666C2.78332 16.6666 1.66666 15.55 1.66666 14.1666V11.6666H10.8333C11.75 11.6666 12.5 10.9166 12.5 9.99996V4.16663H14.0333C14.6333 4.16663 15.1833 4.49163 15.4833 5.0083L16.9083 7.49996H15.8333C15.375 7.49996 15 7.87496 15 8.33329V10.8333C15 11.2916 15.375 11.6666 15.8333 11.6666H18.3333Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.66667 18.3333C7.58714 18.3333 8.33333 17.5871 8.33333 16.6667C8.33333 15.7462 7.58714 15 6.66667 15C5.74619 15 5 15.7462 5 16.6667C5 17.5871 5.74619 18.3333 6.66667 18.3333Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3333 18.3333C14.2538 18.3333 15 17.5871 15 16.6667C15 15.7462 14.2538 15 13.3333 15C12.4128 15 11.6667 15.7462 11.6667 16.6667C11.6667 17.5871 12.4128 18.3333 13.3333 18.3333Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 10V11.6667H15.8333C15.375 11.6667 15 11.2917 15 10.8333V8.33333C15 7.875 15.375 7.5 15.8333 7.5H16.9083L18.3333 10Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 9.83301L10 5.83301"
        stroke="#D50000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99636 9.83333H10.0023"
        stroke="#D50000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.99636 6.16634H6.00235"
        stroke="#D50000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 6.66602V10.8327"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99536 13.334H10.0028"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 13.7539H6.66667"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.75 13.7539H12.0833"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.36675 2.91992H14.6251C17.5917 2.91992 18.3334 3.65326 18.3334 6.57826V13.4199C18.3334 16.3449 17.5917 17.0783 14.6334 17.0783H5.36675C2.40841 17.0866 1.66675 16.3533 1.66675 13.4283V6.57826C1.66675 3.65326 2.40841 2.91992 5.36675 2.91992Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3333 1.66602V4.16602"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.91675 7.57422H17.0834"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 7.08268V14.166C17.5 16.666 16.25 18.3327 13.3333 18.3327H6.66667C3.75 18.3327 2.5 16.666 2.5 14.166V7.08268C2.5 4.58268 3.75 2.91602 6.66667 2.91602H13.3333C16.25 2.91602 17.5 4.58268 17.5 7.08268Z"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0788 11.4167H13.0863"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0788 13.9167H13.0863"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99632 11.4167H10.0038"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99632 13.9167H10.0038"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.91185 11.4167H6.91933"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.91185 13.9167H6.91933"
        stroke={colors}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 4.49935V1.29935C16.5 1.26399 16.4859 1.23007 16.4609 1.20507C16.4359 1.18006 16.402 1.16602 16.3666 1.16602H13.1666"
        stroke="black"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1666 12.8333H16.3666C16.402 12.8333 16.4359 12.8193 16.4609 12.7943C16.4859 12.7693 16.5 12.7354 16.5 12.7V9.5"
        stroke="black"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.5 9.5V12.7C1.5 12.7354 1.51405 12.7693 1.53905 12.7943C1.56406 12.8193 1.59797 12.8333 1.63333 12.8333H4.83333"
        stroke="black"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.83337 4.5V9.5"
        stroke="black"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 4.5V9.5"
        stroke="black"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.1666 4.5V9.5"
        stroke="black"
        stroke-width="1.3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const ProductSwitchIcons = () => {
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
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3333 13.7493V16.2493C18.3333 17.4993 17.5 18.3327 16.25 18.3327H5C5.34167 18.3327 5.69167 18.2827 6.01667 18.1743C6.10833 18.141 6.19999 18.1077 6.29166 18.066C6.58332 17.9493 6.86667 17.7827 7.11667 17.566C7.19167 17.5077 7.27501 17.4327 7.35001 17.3577L7.38332 17.3243L13.05 11.666H16.25C17.5 11.666 18.3333 12.4993 18.3333 13.7493Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.00832 18.1839C3.50832 18.0339 3.03333 17.7589 2.64167 17.3589C2.24167 16.9672 1.96665 16.4922 1.81665 15.9922C2.14165 17.0339 2.96665 17.8589 4.00832 18.1839Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3083 9.40845L13.05 11.6668L7.3833 17.3251C7.96663 16.7251 8.33331 15.9001 8.33331 15.0001V6.95012L10.5916 4.6918C11.475 3.80846 12.6583 3.80846 13.5416 4.6918L15.3083 6.45846C16.1916 7.34179 16.1916 8.52512 15.3083 9.40845Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.00002 15.8327C5.46026 15.8327 5.83335 15.4596 5.83335 14.9993C5.83335 14.5391 5.46026 14.166 5.00002 14.166C4.53978 14.166 4.16669 14.5391 4.16669 14.9993C4.16669 15.4596 4.53978 15.8327 5.00002 15.8327Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.3083 4.87435V7.62435C18.3083 9.91602 17.3917 10.8327 15.1 10.8327H14.1417V10.2077C14.1417 7.08268 12.8917 5.83268 9.76666 5.83268H9.14166V4.87435C9.14166 2.58268 10.0583 1.66602 12.35 1.66602H15.1C17.3917 1.66602 18.3083 2.58268 18.3083 4.87435Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 12.5L12.5 7.5"
        stroke="#D50000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0787 12.0833H12.0862"
        stroke="#D50000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.91209 7.91667H7.91957"
        stroke="#D50000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 13.334V18.334"
        stroke="#DD006A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 15.834H7.5"
        stroke="#DD006A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.9166 2.08398L13.3333 6.66732"
        stroke="#0090CD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 2.08398H17.9167V7.50065"
        stroke="#0090CD"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.58325 10.0002V8.7669C7.58325 7.17524 8.70825 6.53357 10.0833 7.32524L11.1499 7.9419L12.2166 8.55857C13.5916 9.35024 13.5916 10.6502 12.2166 11.4419L11.1499 12.0586L10.0833 12.6752C8.70825 13.4669 7.58325 12.8169 7.58325 11.2336V10.0002Z"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0914 12.65L10.5081 11.1083C10.0581 10.8416 9.69141 10.2 9.69141 9.67497V6.2583"
        stroke={colors}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 12.5V17.5H7.5"
        stroke="#4D4D4D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 2.5L11.25 8.75"
        stroke="#4D4D4D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.75 11.25L2.5 17.5"
        stroke="#4D4D4D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 1.66669H14.5833C16.6583 1.66669 18.3333 3.34169 18.3333 5.41669V7.50002"
        stroke="#4D4D4D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.333 13.3333V14.5833C18.333 16.6583 16.658 18.3333 14.583 18.3333H13.333"
        stroke="#4D4D4D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.50033 18.3333H5.41699C3.34199 18.3333 1.66699 16.6583 1.66699 14.5833V12.5"
        stroke="#4D4D4D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.0532 10.945L3.73072 10.945"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.2199 3.66665C15.2716 3.66665 18.5532 6.41665 18.5532 11C18.5532 15.5833 15.2716 18.3333 11.2199 18.3333"
        stroke={colors}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M4.5 9H13.5"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M7.5 12.75H10.5"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
const FilterIcons = ({ colors }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.04345 2C2.46738 2 2 2.47524 2 3.06027V3.6843C2 4.11765 2.16479 4.53439 2.45957 4.84785L5.69007 8.28288L5.69149 8.28072C6.31514 8.91919 6.66604 9.78228 6.66604 10.6822V13.7301C6.66604 13.9338 6.87913 14.0638 7.056 13.9677L8.8957 12.9653C9.17343 12.8136 9.34675 12.5189 9.34675 12.1989V10.6743C9.34675 9.77939 9.69267 8.91991 10.3106 8.28288L13.5411 4.84785C13.8352 4.53439 14 4.11765 14 3.6843V3.06027C14 2.47524 13.5333 2 12.9573 2H3.04345Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 18.0085V10.4502"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.275 2.06706L3.825 4.53373C2.81667 5.09206 1.99167 6.49206 1.99167 7.64206V12.3504C1.99167 13.5004 2.81667 14.9004 3.825 15.4587L8.275 17.9337C9.225 18.4587 10.7833 18.4587 11.7333 17.9337L16.1833 15.4587C17.1917 14.9004 18.0167 13.5004 18.0167 12.3504V7.64206C18.0167 6.49206 17.1917 5.09206 16.1833 4.53373L11.7333 2.05873C10.775 1.53373 9.225 1.53373 8.275 2.06706Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export {
  SeasonSquare,
  SircleNext,
  NoImg,
  HeartIcons,
  HeartLinkIcons,
  StarIcons,
  SaveBasketIcons,
  BasketIcons,
  InputCheckedTrueIcons,
  ArrowTopIcons,
  LocationIcons,
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
};
