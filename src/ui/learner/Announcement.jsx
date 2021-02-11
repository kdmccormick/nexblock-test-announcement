import React from 'react';
import { Modal } from '@edx/paragon';

import { getOrders } from './data';

class Announcement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
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

  componentDidMount() {
    getOrders().then((response) => this.setState(response));
  }

  render() {
    const { data, open } = this.state
    let modal;
    if (data) {
      modal = <Modal open={open} title={data.title} body={data.body} onClose={() => {}} />
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
