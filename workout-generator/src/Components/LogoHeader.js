import React from 'react';
import { Header, Segment } from 'semantic-ui-react';

const HIITheader = () => {
  return (
    <Segment style={{borderRadius: '0px', height: "60px"}}>
      <Header 
        as="h2"
        icon='heartbeat'
        style={{ color: "blueviolet" }}
        content="NU HIIT" />
    </Segment>
  )
} 

export default HIITheader