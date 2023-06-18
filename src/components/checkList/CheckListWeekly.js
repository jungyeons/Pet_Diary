import { Pressable, StyleSheet, View } from 'react-native';
import Text from './DefaultText';

const CheckListWeekly = ({ day, onPress, date, buttonStyle }) => {
  return (
    <View style={styles.container}>
      <Text>{day}</Text>
      <Pressable
        style={[styles.button, buttonStyle]}
        onPressOut={onPress}
      ></Pressable>
      <Text>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 25,
    height: 25,
  },
});

export default CheckListWeekly;
