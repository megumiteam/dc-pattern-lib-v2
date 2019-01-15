import React, { Component, Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { UncontrolledTooltip, Input } from "reactstrap";

class CopyDemo extends React.Component {
  state = {
    value: "",
    copied: false
  };

  render() {
    return (
      <div>
        {/* <Input value="amimoto-user" /> */}

        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}>
          <span><Input value="amimoto-user" /></span>
        </CopyToClipboard>

        {this.state.copied ? (
          <span style={{ color: "red" }}>Copied.</span>
        ) : null}
      </div>
    );
  }
}

export default CopyDemo;
