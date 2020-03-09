import * as React from 'react';

const IconsMap = () => (
  <svg width="20" id="IconWhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
    <path
      d="M6,0A4.1,4.1,0,0,0,1.9,4.1a5.8,5.8,0,0,0,.4,1.8l3.6,6,3.8-6a5.8,5.8,0,0,0,.4-1.8A4.1,4.1,0,0,0,6,0M6,6A2,2,0,0,1,4.1,4.1,2,2,0,0,1,6,2.2,2,2,0,0,1,7.9,4.1,2,2,0,0,1,6,6"
      style={{ fill: '#451D39' }}
    />
  </svg>
);

const IconsGlobe = () => (
  <svg width="26" id="IconGlobe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13">
    <path
      d="M1.8,4.7h2.4C4.1,5.5,4.1,6.2,4.2,7H1.8C1.7,6.7,1.6,6.3,1.6,5.9C1.6,5.4,1.7,5.1,1.8,4.7z M4.3,4.1H2 c0.3-0.7,0.7-1.3,1.4-1.8C4,1.8,4.6,1.5,5.4,1.3C4.9,2.1,4.5,3,4.3,4.1z M4.3,7.6c0.2,1.1,0.6,2,1.1,2.7C4.6,10.2,4,9.9,3.4,9.4 C2.7,8.9,2.3,8.3,2,7.6H4.3z M7.6,4.7c0.1,0.8,0.1,1.6,0,2.4H4.8c-0.1-0.8-0.1-1.6,0-2.4H7.6z M7.6,4.1H4.9C5,3.5,5.2,3,5.4,2.6 c0.2-0.5,0.5-1,0.8-1.3h0C6.6,1.6,6.9,2,7.1,2.6C7.3,3,7.4,3.5,7.6,4.1z M4.9,7.6h2.6c-0.1,0.5-0.3,1-0.5,1.5 c-0.2,0.5-0.5,1-0.8,1.3h0c-0.3-0.3-0.6-0.8-0.8-1.3C5.2,8.7,5,8.2,4.9,7.6z M8.1,4.1C7.9,3,7.6,2.1,7.1,1.3 c0.8,0.1,1.4,0.5,2.1,0.9c0.6,0.5,1.1,1.1,1.4,1.8H8.1z M8.1,7.6h2.3c-0.3,0.7-0.7,1.3-1.4,1.8c-0.6,0.5-1.3,0.8-2.1,0.9 C7.6,9.6,7.9,8.7,8.1,7.6z M8.2,4.7c0.1,0.8,0.1,1.6,0,2.4h2.4c0.1-0.4,0.1-0.8,0.1-1.2c0-0.4,0-0.8-0.1-1.2H8.2z"
      style={{ fill: '#451D39' }}
    />
  </svg>
);

const IconsTeams = () => (
  <svg width="18" id="IconGlobe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
    <path d="M8,3.3V7.8H3.6a3.9,3.9,0,0,0,3.9,3.4A4,4,0,0,0,8,3.3Z" style={{ fill: '#451D39' }} />
    <rect width="6" height="6" style={{ fill: '#451D39' }} />
  </svg>
);

const IconsAccount = () => (
  <svg width="25" id="IconGlobe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
    <path
      d="M6,1.1A2.3,2.3,0,0,0,3.7,3.4,2.3,2.3,0,0,0,6,5.7,2.3,2.3,0,0,0,8.3,3.4,2.3,2.3,0,0,0,6,1.1"
      style={{ fill: '#451D39' }}
    />
    <path
      d="M2.5,9.7A5.5,5.5,0,0,0,6,10.9,6.2,6.2,0,0,0,9.5,9.7,3.6,3.6,0,0,0,6,6.3,3.6,3.6,0,0,0,2.5,9.7Z"
      style={{ fill: '#451D39' }}
    />
  </svg>
);

const IconSvg = ({ iconStyle }: { iconStyle: string }) => {
  switch (iconStyle) {
    case 'icon-globe':
      return <IconsGlobe />;
    case 'icon-teams':
      return <IconsTeams />;
    case 'icon-account':
      return <IconsAccount />;
    default:
      return <IconsMap />;
  }
};

type Props = { iconStyle: string; className?: string };
const Icon = ({ iconStyle, className = '' }: Props) => (
  <div className={`logo--shifter logo-${iconStyle} ${className || 'icon-color'}`}>
    <IconSvg iconStyle={iconStyle} />
  </div>
);

export default Icon;
