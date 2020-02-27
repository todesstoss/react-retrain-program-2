import React from 'react';
import classNames from 'classnames/bind';

import styles from './Person.module.css';

const cx = classNames.bind(styles);

const Person = ({ chnageName, name, children }) => {
  return (
    <div className={cx('root-item')}>
      <h2 onClick={chnageName}>{name}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Person;
