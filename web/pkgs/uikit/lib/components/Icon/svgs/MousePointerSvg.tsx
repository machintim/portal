import { memo } from 'react';

const MousePointerSvg = ({ ...props }) => {
  const { title, ...rest } = props;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...rest}
    >
      {title && <title>{title}</title>}
      <path d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z' />
      <path d='M13 13l6 6' />
    </svg>
  );
};

export default memo(MousePointerSvg);
