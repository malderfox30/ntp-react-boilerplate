import { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import routes from './Routes';

const Routes = () => {
  useEffect(() => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      setTimeout(() => {
        // fade out
        ele.classList.add('available');
      }, 500);
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = '';
      }, 1500);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes()}
          {/* <NotFoundPage /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;