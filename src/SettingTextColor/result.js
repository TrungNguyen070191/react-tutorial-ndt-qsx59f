import React from 'react';
import '../style.scss';

export class ResultComponent extends React.Component {
  changeStyle = () => {
    return {
      fontSize: this.props.selectedSize + 'px',
    };
  };

  render() {
    return (
      <div>
        <input
          style={this.changeStyle()}
          className={this.props.selectedColor}
          type="text"
          placeholder="Noi dung Setting"
        />
      </div>
    );
  }
}
