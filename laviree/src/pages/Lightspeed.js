import React from 'react';
import IntroDiv from '../components/organisms/IntroDiv';
import ItemList from '../components/organisms/ItemList';
import EmbedInsta from '../components/organisms/EmbedInsta';

const Lightspeed = () => {

  return (
    <div className="lightspeed-container">
      <div>
        <IntroDiv />
      </div>
      <div>
        <ItemList />
      </div>
      <div className='flex justify-center'>
        <EmbedInsta />
      </div>
    </div>
  );
};

export default Lightspeed;
