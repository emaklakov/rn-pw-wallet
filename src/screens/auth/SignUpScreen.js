import React, { useContext } from 'react';
import { UserContext } from '../../context/user/userContext';
import { StyleSheet } from 'react-native';
import {
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon
} from 'native-base';

export const SignUpScreen = ({}) => {
  const { signupUser, loading, error } = useContext(UserContext);

  const signUp = () => {
    signupUser('1', '1', '1');
  };

  return (
    <Content padder style={styles.content}>
      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Password Confirm</Label>
          <Input />
        </Item>
        <Button block onPress={signUp} style={styles.login}>
          <Icon name='ios-person-add' />
          <Text>Sign Up</Text>
        </Button>
      </Form>
    </Content>
  );
};

SignUpScreen.navigationOptions = {
  headerTitle: 'Sign Up'
};

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  login: {
    marginTop: 45
  }
});
