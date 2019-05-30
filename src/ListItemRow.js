// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'reactstrap';
import DashboardCard from './DashboardCard';

type Props = {
  children: React.Node | React.Node[],
  target?: string,
  history: {
    push: Function,
  },
};
class ListItemRow extends React.Component<Props> {
  static defaultProps = {
    target: '',
  };

  onClick = () => {
    const { target, history } = this.props;
    if (!target) return;
    history.push(target);
  };

  render() {
    return (
      <DashboardCard>
        <Table responsive onClick={this.onClick} style={{ cursor: 'pointer' }}>
          <tbody>{this.props.children}</tbody>
        </Table>
      </DashboardCard>
    );
  }
}

export default withRouter(ListItemRow);
