import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  'about me': undefined; 
  skills: undefined;     
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'about me'>;

export type Props = {
  navigation: HomeScreenNavigationProp;
};
