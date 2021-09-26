import { Suspense, lazy } from 'react';
import { Spin } from 'antd';

const loadable = (importFunc, { fallback } = { fallback: <Spin /> }) => {
  const LazyComponent = lazy(() => importFunc);
  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
