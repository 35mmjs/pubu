import React from 'react';
import classNames from 'classnames';
import Score from '../Score';
import style from './index.css';

class Single extends React.Component {
  render() {
    const { book, theme, mulity } = this.props;

    const wrapperCls = classNames({
      [style.wrapper]: true,
      [style.wrapper_lightBlue]: theme === 'lightBlue',
      [style.wrapper_mulity]: mulity,
    });

    const infoCls = classNames({
      [style.info]: true,
      [style.info_small]: mulity,
    });

    const authorCls = classNames({
      [style.info_author]: true,
      [style.info_author_small]: mulity,
    })

    const introCls = classNames({
      [style.intro]: true,
      [style.intro_lightBlue]: theme === 'lightBlue',
      [style.intro_hidden]: mulity,
    });

    return (
      <div className={wrapperCls}>
        <div className={style.cover}>
          <img src={book.cover} />
        </div>
        <div className={infoCls}>
          <h2 className={style.info_title}>
            {book.name}
          </h2>
          <p className={authorCls}>
            作者：{book.author}
          </p>
          <p className={style.info_price}>
            售价：<span>{book.price}</span> 元
          </p>
          <p className={style.info_pricing}>
            定价：{book.pricing} 元
          </p>
        </div>
        <Score value={book.score} mulity />
        <div className={introCls}>
          {book.recommender.map(u => u)} 等 {book.recommender.length} 位行业大咖诚意推荐
        </div>
      </div>
    )
  }
}

export default Single;
