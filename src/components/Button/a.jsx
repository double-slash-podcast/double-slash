import * as React from 'react';

import S from './styles.module.css';

/**
  onClick?: (e: any) => void;
  disabled?: boolean;
  outline?: boolean;
  type?: string;
  mode?:
    | 'primary'
    | 'default'
    | 'success'
    | 'warning'
    | 'danger'
    | 'link'
    | 'light';
*/
const A = ({
  children,
  onClick,
  mode = 'light',
  disabled = false,
  outline = false,
  href = '',
  target = false,
}) => {
  return (
    <a
      href={href}
      target={target}
      className={`${S.button} ${S.a} ${S[mode]} ${outline ? S.outline : ''} ${
        disabled ? S.disabled : ''
      }`}
      onClick={disabled === false ? onClick : () => true}
    >
      {children}
    </a>
  );
};

export default A;
