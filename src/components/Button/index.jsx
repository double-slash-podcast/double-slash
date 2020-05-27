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
const Button = ({
  children,
  onClick,
  type = 'button',
  mode = 'light',
  disabled = false,
  outline = false,
}) => {
  return (
    <button
      className={`${S.button} ${S[mode]} ${outline ? S.outline : ''} ${
        disabled ? S.disabled : ''
      }`}
      typeof={type}
      disabled={disabled}
      onClick={disabled === false ? onClick : () => true}
    >
      {children}
    </button>
  );
};

export default Button;
