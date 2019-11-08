import styled from 'styled-components';
import { Button } from 'reactstrap';
import { TextInput } from '../../helpers/formField';

export const Button = styled.button`
  max-width: 150px;
  margin: 20px 0;
  padding: 9px 18px;
  border-style: none;
  border-radius: 5px;
  background-color: #08c;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 17px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
`;

export const UserButton = styled(Button)`
  font-size: 1.5em;
  text-align: center;
  padding: 20px;
  color: yellow;
  background-color: blue;
  margin-bottom: 10px;
`;

export const EditButton = styled(Button)`
  font-size: 1.5em;
  text-align: center;
  padding: 20px;
  color: yellow;
  background-color: blue;
  margin-right: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(TextInput)`
  width: 300px;
  height: 35px;
  border: ${props => props.border || '1px solid #ccc'};
  background-color: #fff;
  padding: 5px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;
