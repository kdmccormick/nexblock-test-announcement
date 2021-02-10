import React, { useState } from 'react';

import { getOrders } from './data';

export const Announcement = () => {
  const [data, setData] = useState(null);
  getOrders(setData);

  return (
    <main>
      <div className="container-fluid">
        <h1>This is the annoucement</h1>
        <p>Here is the dummy API data about the annoucement.</p>
        {
          data !== null
          && (data.map(
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
};

export default Announcement;
