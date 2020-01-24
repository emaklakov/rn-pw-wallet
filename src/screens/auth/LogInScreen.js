import React from 'react';
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

export const LogInScreen = ({}) => {
  const logIn = () => {};

  return (
    <Content padder style={styles.content}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input />
        </Item>
        <Button block onPress={logIn} style={styles.login}>
          <Icon name='ios-log-in' />
          <Text>Log In</Text>
        </Button>
      </Form>
    </Content>
  );
};

LogInScreen.navigationOptions = {
  headerTitle: 'Log In'
};

const styles = StyleSheet.create({
  content: {
    flex: 1
  },
  login: {
    marginTop: 45
  }
});
