import { StyleSheet} from 'react-native';


import styled from 'styled-components/native';

export const Logo = styled.Image`
      justify-content:center;
      align-items:center;
      flex:1;
      width:100%;
      height:100%;
      position:absolute;
`;

export const Campo = styled.TextInput`
      height:40px;
      border-color:gray;
      border-width:1px;
      background:white;
      text-align:center;
      border-radius:10px;
      margin-bottom:10px;
`;

export const TextoLogin = styled.Text`
    color:white;
    font-weight:bold;
    font-size:25px;
    margin-bottom:5px;
`;

export const BoasVindas = styled.Text`
    color:white;
    font-size:20px;
    font-style:italic;
`;

export const Botao = styled.TouchableOpacity`
    height:42px;
    background:#00A4FF;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    margin-top:10px;
`;

export const TextoBotao = styled.Text`
    color:white;
    font-weight:bold;
    font-size:16px;
`;


 