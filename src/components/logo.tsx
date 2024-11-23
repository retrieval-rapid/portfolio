import classNames from 'classnames';

export interface LogoProps {
  size?: 'small' | 'default' | 'large' | 'medium-large' | 'extra-large';
  className?: string;
}

export function Logo({ size = 'default', className }: LogoProps) {
  return (
    <img
      className={classNames(
        'w-full object-contain',
        {
          'h-[50px]': size === 'default',
          'h-[40px]': size === 'small',
          'h-[60px]': size === 'large',
          'h-[80px]': size === 'medium-large',
          'h-[100px]': size === 'extra-large',
        },
        className
      )}
      alt="Brand Logo"
      src="/assets/logo.png"
    />
  );
}
