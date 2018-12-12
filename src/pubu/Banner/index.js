import React from 'react';
import style from './index.css';

export default class Banner extends React.Component {
  render() {
    const { src } = this.props;
    return (
      <div className={style.banner} >
        <img src={src} />
      </div>
    )
  }
}
