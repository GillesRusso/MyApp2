
import {Text, View, Button} from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Calendar"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Go to Pedometer"
          onPress={() => navigation.push('MyPedometer')}
        />
        <Button
          title="Go to ToDoList"
          onPress={() => navigation.push('MyToDoList')}
        />
      </View>
    );
  }
  