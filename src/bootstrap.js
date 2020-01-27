import * as Font from 'expo-font';

export async function bootstrap() {
  await Font.loadAsync({
    Roboto: require('../assets/fonts/Roboto.ttf'),
    Roboto_medium: require('../assets/fonts/Roboto_medium.ttf'),
    Roboto_bold: require('../assets/fonts/Roboto_bold.ttf')
  });
}
