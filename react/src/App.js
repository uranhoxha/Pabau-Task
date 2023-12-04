import React from 'react';
import items from './items';

const App = () => {
  return (
   <div className='app'>
        <ListComponent items={items}/>
   </div>
  );
}

export default App;
