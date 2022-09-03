import React, { useState } from 'react';
import './Switch.css';

function Switch({isActive, onChange}) {
  const [checked, setValue] = useState(!!isActive);

  const handlerSwitch = () => {
    const value = !checked;
    setValue(value);

    if (typeof onChange === 'function') {
      onChange({value: value});
    }
  };

  return (
    <div className={checked ? `switch switch_on`: "switch"}>
      <div className="switch__content">
        <div className="switch__bg" onClick={handlerSwitch} />
        <div className="switch__handle" onClick={handlerSwitch} />
      </div>
      <p className="switch__text">
        Короткометражки
      </p>
    </div>
  );
};

export default Switch;