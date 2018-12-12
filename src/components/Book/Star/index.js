import React from 'react';
import classNames from 'classnames';
import style from './index.css';

export default class Star extends React.Component {
  render() {
    const { value } = this.props;

    const starCls = classNames({
      [style.star]: true,
      [style.starhalf]: value === 1,
      [style.starfull]: value === 2,
    });

    return <div className={starCls} />;
  }
}
