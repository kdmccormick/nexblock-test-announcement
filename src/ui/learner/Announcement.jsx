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

  openModal() {
    this.setState({ open: true });
  }

  resetModalWrapperState() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
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
