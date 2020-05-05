import React from 'react';
import ariana from '../../assets/images/ariana.jpeg';
import alok from '../../assets/images/alok.jpg';
import drake from '../../assets/images/drake.jpg';

import { Container, Image, Name, Content } from './styles';

interface StyledImage {
  circle: boolean;
}

const Box: React.FC<StyledImage> = ({ circle }) => {
  return (
    <Container>
      <Content>
        <Image source={ariana} circle={circle} />
        <Name>Ariana</Name>
      </Content>
      <Content>
        <Image source={alok} circle={circle} />
        <Name>Alok</Name>
      </Content>
      <Content>
        <Image source={drake} circle={circle} />
        <Name>Drake</Name>
      </Content>
      <Content>
        <Image source={ariana} circle={circle} />
        <Name>Ariana</Name>
      </Content>
      <Content>
        <Image source={alok} circle={circle} />
        <Name>Alok</Name>
      </Content>
      <Content>
        <Image source={drake} circle={circle} />
        <Name>Drake</Name>
      </Content>
      <Content>
        <Image source={ariana} circle={circle} />
        <Name>Ariana</Name>
      </Content>
      <Content>
        <Image source={alok} circle={circle} />
        <Name>Alok</Name>
      </Content>
      <Content>
        <Image source={drake} circle={circle} />
        <Name>Drake</Name>
      </Content>
    </Container>
  );
};

/* eslint react/prop-types: 0 */

export default Box;
