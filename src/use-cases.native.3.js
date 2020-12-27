import React, { useState } from 'react';

const withLoading = (WrappedComponent) => {
  return ({ isLoading }) => {
    if (isLoading) {
      return <Loading />
    }

    return <WrappedComponent />
  }
}

const Content = withLoading(Section)

export default App = () => {
  const [isLoading] = useState(true);

  return <Content isLoading={isLoading} />
}