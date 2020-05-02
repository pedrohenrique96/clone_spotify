import React from 'react';
import Background from '../../components/Background';
import {
  Container,
  Logo,
  TextOne,
  TextTwo,
  ButtonLogIn,
  TextLogIn,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Background>
      <Container>
        <Logo />

        <TextOne>Millions of songs.</TextOne>
        <TextTwo>Free on Spotify.</TextTwo>

        <ButtonLogIn>
          <TextLogIn>LOG IN</TextLogIn>
        </ButtonLogIn>
      </Container>
    </Background>
  );
};

export default SignIn;
