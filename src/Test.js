import React, { useState, useEffect } from 'react';

export default class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    const _test = [
      {
        category: 'Sporting Goods',
        price: '$49.99',
        stocked: true,
        name: 'Football'
      },
      {
        category: 'Sporting Goods',
        price: '$9.99',
        stocked: true,
        name: 'Baseball'
      },
      {
        category: 'Sporting Goods',
        price: '$29.99',
        stocked: false,
        name: 'Basketball'
      },
      {
        category: 'Electronics',
        price: '$99.99',
        stocked: true,
        name: 'iPod Touch'
      },
      {
        category: 'Electronics',
        price: '$399.99',
        stocked: false,
        name: 'iPhone 5'
      },
      {
        category: 'Electronics',
        price: '$199.99',
        stocked: true,
        name: 'Nexus 7'
      }
    ];

    this.state = {
      keyword: '',
      isShowProduct: false,
      data: _test,
      categories: ['Sporting Goods', 'Electronics']
    };

    this.showProduct = this.showProduct.bind(this);
    this.changeKeyword = this.changeKeyword.bind(this);
  }

  showProduct() {
    this.setState({
      isShowProduct: !this.state.isShowProduct
    });
  }

  changeKeyword(evt) {
    this.setState({
      keyword: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>TEST REACTJS </h2>
        <div>
          <Search
            keyword={this.state.keyword}
            showProduct={this.showProduct}
            changeKeyword={this.changeKeyword}
            isShowProduct={this.state.isShowProduct}
          />
          <ListView
            categories={this.state.categories}
            data={this.state.data}
            keyword={this.state.keyword}
            isShowProduct={this.state.isShowProduct}
          />
        </div>
      </div>
    );
  }
}

function Search(props) {
  return (
    <div>
      <table>
        <tr>
          <td>
            <input
              type="text"
              onChange={props.changeKeyword}
              placeholder="Search"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="checkbox"
              checked={props.isShowProduct}
              onClick={props.showProduct}
            />{' '}
            Only show product in stocks
          </td>
        </tr>
      </table>
    </div>
  );
}

function ListView(props) {
  var lstData = props.data;
  if (props.keyword != '') {
    lstData = props.data.filter(function(obj) {
      return obj.name.includes(props.keyword);
    });
  }

  if (props.isShowProduct) {
    lstData = lstData.filter(function(obj) {
      return obj.stocked == props.isShowProduct;
    });
  }

  return (
    <div>
      <table>
        <th />
        {lstData && (
          <tbody>
            <tr>
              <td>
                <b>Name</b>
              </td>
              <td>
                <b>Price</b>
              </td>
            </tr>
            <div>
              {props.categories.map(name => {
                <ViewItem category={name} data={lstData} />;
              })}
            </div>
          </tbody>
        )}
      </table>
    </div>
  );
}

function ViewItem(props) {
  var result = props.data.filter(function(obj) {
    return obj.category == props.category;
  });

  return (
    <div>
      <tr>
        <td>
          <b>{props.category}</b>
        </td>
      </tr>
      {result.map(obj => (
        <tr>
          <td>{obj.name}</td>
          <td />
          <td>{obj.price}</td>
        </tr>
      ))}
    </div>
  );
}
