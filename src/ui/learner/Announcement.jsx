import React from 'react';
import { Modal } from '@edx/paragon';

class Announcement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.openModal = this.openModal.bind(this);
    this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

    this.state = { open: true };
  }

  componentDidMount() {
    getOrders().then((response) => this.setState(response));
  }

  resetModalWrapperState() {
    this.setState({ open: false });
  }

  openModal() {
    this.setState({ open: true });
  }

  render() {
    const { data } = this.state;
    const data = this.props.instanceData;
    let modal;
    if (data) {
      modal = <Modal open={open} title={data.title} body={data.body} onClose={() => {}} />;
    }
    return (
      <>
        <div className="container-fluid">
          {modal}
        </div>
      </>
    );
  }
}

export default Announcement;
