import styled from 'styled-components/native';
import logo from '../../assets/icons/01_RGB/02_PNG/Spotify_Icon_RGB_White.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 80px;
  height: 80px;
`;

export const TextOne = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 40px;
  margin-top: 100px;
`;
export const TextTwo = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: #fff;
`;
export const ButtonLogIn = styled.TouchableOpacity`
  border: 1px solid #666;
  border-radius: 40px;
  margin-top: 100px;
  height: 60px;
  padding: 0 120px;

  justify-content: center;
  align-items: center;
`;
export const TextLogIn = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;
