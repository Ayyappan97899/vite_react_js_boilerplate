/* eslint-disable react/display-name */
import { Suspense } from 'react';

const AppLoadable = (Component) => (props) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component {...props} />
    </Suspense>
  );
};

export default AppLoadable;
