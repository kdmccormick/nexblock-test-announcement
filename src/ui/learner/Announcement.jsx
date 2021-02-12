import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@edx/paragon';

class Announcement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.openModal = this.openModal.bind(this);
    this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

    this.state = { open: true };
  }

  resetModalWrapperState() {
    this.setState({ open: false });
  }

  openModal() {
    this.setState({ open: true });
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

Announcement.propTypes = {
  instanceData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

Announcement.defaultProps = {
  instanceData: { title: 'Loading...', body: '' },
};

export default Announcement;
