import React, { useContext, useState, useEffect } from 'react';
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
  const { loginUser, loading, error, clearError } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    clearError();
  }, []);

  const logIn = () => {
    loginUser(email, password);
  };

  if (loading) {
    return <AppLoader />;
  }

  return (
    <Content
      padder
      contentContainerStyle={{ justifyContent: 'center', flex: 1 }}
    >
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
            autoCompleteType='email'
            keyboardType='email-address'
          />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </Item>
        {email && password ? (
          <Button block onPress={logIn} style={styles.login}>
            <Icon name='ios-log-in' />
            <Text>Log In</Text>
          </Button>
        ) : (
          <Button block disabled style={styles.login}>
            <Icon name='ios-log-in' />
            <Text>Log In</Text>
          </Button>
        )}
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
