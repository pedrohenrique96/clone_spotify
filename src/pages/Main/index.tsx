import React from 'react';
import { ScrollView } from 'react-native';
import Background from '../../components/Background';
import Box from '../../components/Box';

import { Container, Content, TextIntruduce } from './styles';

const Main: React.FC = () => {
  return (
    <Background>
      <Container>
        <ScrollView>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle />
          </Content>
          <Content>
            <TextIntruduce>Recently played</TextIntruduce>
            <Box circle={false} />
          </Content>
        </ScrollView>
      </Container>
    </Background>
  );
};

export default Main;
