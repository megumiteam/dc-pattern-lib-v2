import React from 'react';
import Browser from '../browser';

type Props = {
  className?: string;
  imgClassName?: string;
  alt?: string;
  src?: string;
  href?: string;
  browser?: boolean;
};

const ScreenshotImg = ({ src = 'https://placehold.it/1200x900', alt, imgClassName }: Props) => (
  <img className={`w-100 ${imgClassName}`} src={src} alt={alt} />
);

const Screenshot = ({
  className, browser, src, href,
}: Props) => {
  if (browser && href) {
    return (
      <a rel="noopener noreferrer" target="_blank" href={href}>
        <Browser className={className}>
          <ScreenshotImg src={src} />
        </Browser>
      </a>
    );
  }
  if (browser) {
    return (
      <Browser className={className}>
        <ScreenshotImg src={src} />
      </Browser>
    );
  }

  return <ScreenshotImg src={src} />;
};

export default Screenshot;
