import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import { COMPANY } from '../config/site';

const sizeClasses = {
  sm: 'h-12 md:h-14',
  md: 'h-14 md:h-16',
  lg: 'h-20 md:h-24',
};

const Logo = ({ variant = 'dark', size = 'md', className = '' }) => {
  const isLight = variant === 'light';

  return (
    <Link
      to="/"
      className={`inline-flex items-center focus-visible:outline-none ${className}`}
      aria-label={`${COMPANY.name} home`}
    >
      <img
        src={logoImage}
        alt={COMPANY.name}
        className={`${sizeClasses[size] || sizeClasses.md} w-auto object-contain ${
          isLight
            ? 'rounded-sm bg-white/95 px-2 py-1 shadow-sm'
            : ''
        }`}
        width={220}
        height={96}
        decoding="async"
      />
    </Link>
  );
};

export default Logo;
