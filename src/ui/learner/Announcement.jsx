import React from 'react';

import { getOrders } from './data';

class Announcement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    getOrders().then((response) => this.setState(response));
  }

  render() {
    return (
      <main>
        <div className="container-fluid">
          <h1>This is the annoucement</h1>
          <p>Here is the dummy API data about the annoucement.</p>
          {
            this.state.data !== null
            && (this.state.data.map(
              ({
                name, courseId, start, end,
              }) => (
                <p key={courseId}>Course name: <b>{name}</b> ({courseId})
                  <br />
                  <i>Runs from {start} to {end || 'the end of time'}</i>
                </p>
              ),
            ))
          }
        </div>
      </main>
    );
  }
}

export default Announcement;
