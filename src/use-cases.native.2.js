import React, { useState } from 'react';

const Loading = () => <span>Loading...</span>;

const Section = () => <p>Hello world!</p>;

export default App = () => {
  const [isLoading] = useState(true);

  if (isLoading) {
    return <Loading />;
  }

  return <Section />;
}