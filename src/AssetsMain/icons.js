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
const HeartIcons = () => {
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
const ArrowTopIcons = () => {
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
        stroke="black"
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
const CotegoryIcons = () => {
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
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.75 7.5H14.25C15.75 7.5 16.5 6.75 16.5 5.25V3.75C16.5 2.25 15.75 1.5 14.25 1.5H12.75C11.25 1.5 10.5 2.25 10.5 3.75V5.25C10.5 6.75 11.25 7.5 12.75 7.5Z"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.75 16.5H14.25C15.75 16.5 16.5 15.75 16.5 14.25V12.75C16.5 11.25 15.75 10.5 14.25 10.5H12.75C11.25 10.5 10.5 11.25 10.5 12.75V14.25C10.5 15.75 11.25 16.5 12.75 16.5Z"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.75 16.5H5.25C6.75 16.5 7.5 15.75 7.5 14.25V12.75C7.5 11.25 6.75 10.5 5.25 10.5H3.75C2.25 10.5 1.5 11.25 1.5 12.75V14.25C1.5 15.75 2.25 16.5 3.75 16.5Z"
        stroke="black"
        stroke-width="1.5"
        stroke-miterlimit="10"
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
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12.75C7.7475 12.75 7.125 13.3725 7.125 14.625V16.5H10.875V14.625C10.875 13.3725 10.2525 12.75 9 12.75Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const MapIcons = () => {
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
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 1.66667L11.625 18.3333"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.60832 10.1833L1.66663 12.5"
        stroke="black"
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

export {
  SeasonSquare,
  SircleNext,
  NoImg,
  HeartIcons,
  StarIcons,
  SaveBasketIcons,
  BasketIcons,
  InputCheckedTrueIcons,
  ArrowTopIcons,
  LocationIcons,
  UploadIcons,
  HouseStatisticIcons,
  WarningSircleIcons,
  PersonIcons,
  PersonPlusIcons,
  ListCollectionIcons,
  CotegoryIcons,
  MapSitesIcons,
  MapIcons,
  MarketIcons,
  PrivateCheckIcons,
  CommentIcons,
  PhoneIcons,
  FooterOriginalIcons,
  MyPurchaseIcons, //my order
  MenuCloseIcons,
  EyesOpenIcons,
  ClothesIcons,
  DollorIcons,
  PlusIcons,
  HomeIcons,
};
