import styled from 'styled-components/native';

interface StyledImage {
  circle: boolean;
}

export const Container = styled.ScrollView.attrs({
  horizontal: true,
})``;
export const Content = styled.View`
  margin-right: 15px;
`;
export const Image = styled.Image<StyledImage>`
  height: 130px;
  width: 130px;
  border-radius: ${props => (props.circle ? '65px' : '4px')};
`;
export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: #fff;
`;
