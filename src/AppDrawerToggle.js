// @flow
import React from 'react';

type Props = {
  className?: string,
};
type State = {
  active: boolean,
};

export default class AppDrawerToggle extends React.Component<Props, State> {
  state = {
    active: false,
  };

  static defaultProps = {
    className: 'text-white fa-arrow-left',
  };

  toggle = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  };

  render() {
    const { className } = this.props;
    return (
      <div onClick={this.toggle} role="button" tabIndex="0" onKeyPress={this.toggle}>
        <i className={`fas ${className}`} />
+
      </div>
    );
  }
}
