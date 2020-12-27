import React, { useState } from 'react';
import { ifElse, prop } from 'ramda';

const withLoading = ifElse(prop('isLoading'), Loading)

const Content = withLoading(Section)

export default () => {
  const [isLoading] = useState(true);

  return <Content isLoading={isLoading} />
}