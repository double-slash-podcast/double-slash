import React, {useState, useEffect} from 'react';
import S from './styles.module.css';

const SwitchMode = ({name, defaultState, onChange}) => {
  const [state, changeState] = useState(false);
  useEffect(() => changeState(defaultState), [defaultState]);
  return (
    <label htmlFor={name} className={S.container}>
      <input
        id={name}
        onChange={() => {
          onChange(!state);
          changeState(!state);
        }}
        checked={state}
        type="checkbox"
      />
      <span
        className={S.switch}
        role="switch"
        aria-label={name}
        aria-checked={state === true ? 'true' : 'false'}
      >
        <span className={S.shadow} />
      </span>
    </label>
  );
};

SwitchMode.defaultProps = {
  name: 'switchbox',
  defaultState: false,
  onChange: () => false,
};

export default SwitchMode;
