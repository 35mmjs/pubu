import React from 'react';
import { HMR } from '@pwa/preset-react';
import Banner from '../Banner';
import Layer from '../Layer';
import Book from '../Book';
import style from './index.css';
import config from '../../data';
import BookDetail from '../Book/book';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			book: {},
      activeBook: false,
    };
  }

  handleClickBook = (id) => {
		const mock = {
			// {String} 图书 ID
			id: "",

			// {String} 图片 CDN 地址
			cover: '../../assets/thumb/book-cover.gif',

			// {String} 图书名称
			name: '想象力的科学空间',

			// {String} 作者信息
			author: '郭羽/刘波',

			// {Array} 推荐者
			recommender: ['吴晓波', '江南春', '格非', '黄晓明'],

			// {String} 售价 
			price: 41.9, // 当前价格

			// {String} 定价
			pricing: 59.8,

			// {Number} 评分
			score: 9.5,

			// {Number} 评论
			commands: 146,

			// {String} 内容简介
			intro: "年度现象级小说，由郭羽、刘波著的《网络英雄传I:艾尔斯巨岩之约》续作——大型互联网创业小说《网络英雄传(Ⅱ引力场)》，展现了中国互联网公司面对国际竞争中迸发出的商业智慧，面对资本战争时不惧的勇气。",

			// {String} 作者简介
			authorInfo: "",

			// {String} 目录
			catalog: "",

			// {Number} ISBN
			isbn: "9787559421289",

			// {String} 开本
			pageType: "16开 平装",

			// {Number} 页数
			pageNumber: "448",

			// {String} 版本
			version: "2018-06-01 第1版",

			// {String} 出版社
			publish: "江苏文艺",

			// {String} 书架号
			bookshelf: "3043331",

			// {String} 二维码
			qrcode: "",
		}
    this.setState({
			book: mock,
			activeBook: true,
    });
  }

  handleCloseBook = (e) => {
    e.preventDefault()

    this.setState({
      activeBook: false,
    });
  }

  render() {
    return (
      <div className={ style.app }>
        <div className={ style.wrapper }>
          { config.map((channel, ix) => {
            return (
              <div key={ix}>
                <Banner src={channel.banner.src} />
                { channel.layers.map((layer, index) => {
                return (
                  <Layer key={index}>
                    {
                      layer.books.map((book, i) => {
                        return (
                          <Book
                            cover={book.cover}
                            name={book.name}
                            author={book.author}
                            price={book.price}
                            score={book.score}
                            key={i}
                            index={index}
                            handleClickBook={this.handleClickBook}
                          />
                        )
                      })
                    }
                  </Layer>
                )
              })}
              </div>
            )
          })}
        </div>
        {
          this.state.activeBook &&
          <BookDetail onClose={this.handleCloseBook} book={this.state.book} />
        }
      </div>
    );
  }
}

export default HMR(App, module);
