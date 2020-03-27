import React, { Component } from 'react'
import { FloatingButton } from 'preqin'

const App = () => {
  return (
    <div>
      <FloatingButton 
        onClick={() => console.log('Helooooooooo')}
        color="red"
      />
    </div>
  );
}

export default React.memo(App);
