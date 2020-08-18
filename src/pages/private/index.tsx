import React from 'react';


export default (props: any) => {
  console.log('props', props);
  return (
    <div style={{ padding: 20 }}>
      {props.children}
      <p>This is private layout</p>
    </div>
  );
};