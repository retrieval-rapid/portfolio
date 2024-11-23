import Image from 'next/image';
import React, { ReactElement } from 'react';
import classNames from 'classnames';

interface StarProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Star = ({ className }: StarProps) => {
  return (
    <>
      <Image
        src="/assets/stars.png"
        alt="star"
        height={100}
        width={100}
        className={classNames('size-12', className)}
      />
    </>
  );
};

export default Star;
