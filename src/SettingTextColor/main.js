import React from 'react';
import '../style.scss';
import { ColorPickerComponent } from './colorPicker.js';
import { SizeChangeComponent } from './sizeChange.js';
import { ResultComponent } from './result.js';

export default class MainSettingTextColorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: 'red',
      selectedSize: 12,
    };
  }

  changeColor = (color) => {
    this.setState({
      selectedColor: color,
    });
  };

  changeSize = (size) => {
    this.setState({
      selectedSize: size,
    });
  };

  render() {
    return (
      <div className="setting-text-color">
        <div className="top">
          <ColorPickerComponent
            selectedColor={this.state.selectedColor}
            changeColor={(color) => {
              this.changeColor(color);
            }}
          />
          <SizeChangeComponent
            selectedSize={this.state.selectedSize}
            changeSize={(size) => {
              this.changeSize(size);
            }}
          />
        </div>
        <div className="main">
          <div>
            <b>COLOR:</b> {this.state.selectedColor} - <b>FONTSIZE:</b>
            {this.state.selectedSize}px
          </div>
          <ResultComponent
            selectedColor={this.state.selectedColor}
            selectedSize={this.state.selectedSize}
          />
        </div>
      </div>
    );
  }
}
