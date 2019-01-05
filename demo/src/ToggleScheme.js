import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, ButtonGroup } from "reactstrap";

class ToggleScheme extends Component {
  constructor(props) {
    super(props);
    this.state = { rSelected: 'amimoto' };
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {

    var element = ReactDOM.findDOMNode(document.body);
    var scheme = this.state.rSelected;
    element.setAttribute('scheme', scheme);

    return (
      <div>
        <ButtonGroup>
          <Button
            color="blue"
            onClick={() => this.onRadioBtnClick('amimoto')} 
            active={this.state.rSelected === 'amimoto'}>
            Amimoto
          </Button>
          <Button
            color="gradient-magenta"
            onClick={() => this.onRadioBtnClick('shifter')} 
            active={this.state.rSelected === 'shifter'}>
            Shifter
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default ToggleScheme;
