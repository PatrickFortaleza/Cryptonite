import {
  Alert,
} from 'react-native';

export default function errorAlert ({title, message, error}) {
  if (error !== undefined){
    Alert.alert(error.name, error.message);
  } else if (title !== undefined){
    Alert.alert(title, message);
  } else {
    Alert.alert('Error');
  }
}
