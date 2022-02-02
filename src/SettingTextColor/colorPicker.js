import React from 'react';
import '../style.scss';

export class ColorPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'blue', 'green'],
    };
  }

  render() {
    var ele = this.state.colors.map((item) => {
      return (
        <span
          class={item}
          onClick={() => {
            this.props.changeColor(item);
          }}
        ></span>
      );
    });

    return (
      <div className="color-picker w-45">
        <p>Color Picker: </p>
        {ele}
      </div>
    );
  }
}
