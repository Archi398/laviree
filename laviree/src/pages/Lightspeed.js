import React from 'react';
import IntroDiv from '../components/organisms/IntroDiv';
import ItemList from '../components/organisms/ItemList';

const Lightspeed = () => {

  return (
    <div className="lightspeed-container">
      <div>
        <IntroDiv />
      </div>
      <div>
        <ItemList />
      </div>
    </div>
  );
};

export default Lightspeed;
