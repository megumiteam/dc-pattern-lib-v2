// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Row, Col } from 'reactstrap';
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

  constructor(props: Props) {
    super(props);
    this.style = props.target ? { cursor: 'pointer' } : {};
  }

  onClick = () => {
    const { target, history } = this.props;
    if (!target) return;
    history.push(target);
  };

  render() {
    return (
      <Row className="mb-gutter">
        <Col>
          <DashboardCard>
            <Table responsive onClick={this.onClick} style={this.style}>
              <tbody>{this.props.children}</tbody>
            </Table>
          </DashboardCard>
        </Col>
      </Row>
    );
  }
}

export default withRouter(ListItemRow);
