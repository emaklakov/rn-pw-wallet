import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/user/userContext';
import { StyleSheet, View } from 'react-native';
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
import { AppLoader } from '../../components/AppLoader';

export const LogInScreen = ({}) => {
  const { loginUser, loading, error } = useContext(UserContext);
  const [email, setEmail] = useState('evgeniy.maklakov@gmail.com');
  const [password, setPassword] = useState('Alisa1310Pw3');
  const logIn = () => {
    loginUser(email, password);
  };

  if (loading) {
    return <AppLoader />;
  }

  return (
    <Content padder style={styles.content}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input value={email} onChangeText={setEmail} />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input value={password} onChangeText={setPassword} />
        </Item>
        <Button block onPress={logIn} style={styles.login}>
          <Icon name='ios-log-in' />
          <Text>Log In</Text>
        </Button>
      </Form>
      <View style={styles.errorContent}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
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
  },
  errorContent: {
    marginTop: 25
  },
  errorText: {
    fontSize: 20,
    color: 'red'
  }
});
