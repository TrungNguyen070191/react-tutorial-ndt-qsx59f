import React from 'react';
import '../style.scss';

export class SizeChangeComponent extends React.Component {
  render() {
    return (
      <div className="size-change w-45">
        <p>Size Change:</p>
        <span
          onClick={() => {
            this.props.changeSize(this.props.selectedSize + 1);
          }}
        >
          UP
        </span>
        <span
          onClick={() => {
            this.props.changeSize(this.props.selectedSize - 1);
          }}
        >
          DOWN
        </span>
      </div>
    );
  }
}
