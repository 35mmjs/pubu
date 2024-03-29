import React from 'react';
import classNames from 'classnames';
import getStarValues from '../../util/getStarValues';
import Star from './Star';
import style from './index.css';

export default class Book extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    const { handleClickBook } =  this.props;
    if (handleClickBook) {
      handleClickBook('id');
    }
  }

  render() {
    const { type, cover, name, author, price, score, index } = this.props;

    const bookCls = classNames({
      [style.book]: true,
      [style.booknth]: index % 2 === 0,
    });
     
    return (
      <div className={bookCls}>
        <a className={style.book_cover} onClick={this.onClick}>
          <img src={cover} />
        </a>
        <div className={style.book_info}>
          <h2 className={style.book_info_name}>《{name}》</h2>
          <p className={style.book_info_author}>作者：{author}</p>
          <p className={style.book_info_price}>售价：<span className={style.book_info_price_value}>{price}</span> 元</p>
          <div className={style.book_info_score}>
            <div className={style.book_info_stars}>
              { getStarValues().map((value, i) => <Star value={value} key={i} />) }
            </div>
            <div className={style.book_info_score_value}>
              {score}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
