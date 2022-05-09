import React from 'react';
import styled from 'styled-components';
import { ContentTwo } from '../components/Content/ContentTwo';
import { aboutOne, aboutThree, aboutTwo } from '../data/AboutData';


function AboutPage() {
    return (
      <>
      <ContentTwo {...aboutOne}/>
      <ContentTwo {...aboutTwo}/>
      <ContentTwo {...aboutThree}/>
      </>
    )
}

export default AboutPage;
