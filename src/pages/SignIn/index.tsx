import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Logo />

        <TextOne>Millions of songs.</TextOne>
        <TextTwo>Free on Spotify.</TextTwo>

        <ButtonLogIn onPress={() => navigation.navigate('Main')}>
          <TextLogIn>LOG IN</TextLogIn>
        </ButtonLogIn>
      </Container>
    </Background>
  );
};

export default SignIn;
