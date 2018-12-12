import React from 'react';
import style from './index.css';

export default class Layer extends React.Component {
  render() {
    const { src, children } = this.props;
    return (
      <div className={style.layer} >
      {children}
      </div>
    )
  }
}
