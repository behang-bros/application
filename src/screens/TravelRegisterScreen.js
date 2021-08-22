import React from 'react';
import {StyleSheet, StatusBar, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';



const Screen01 = ({navigation}) => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StatusBar barStyle="light-content" backgroundColor="#fff" />
    <View>
      <Text style={styles.title}>관심있는 여행지를{'\n'}선택해주세요</Text>
    </View>
    <View style={styles.buttonWrapper}>
      <TouchableOpacity activeOpacity={0.8}>
        <Text
          onPress={() => {
            console.log('press');
            navigation.navigate('Screen02');
          }}>
          제주도
        </Text>
      </TouchableOpacity>
    </View>
    <View style={{marginTop: 100}}>
      <Text style={{textAlign: 'center'}}>
        더 많은 여행을{'\n'}기대해주세요.
      </Text>
    </View>
  </SafeAreaView>
);

const Screen02 = ({navigation}) => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <StatusBar barStyle="light-content" backgroundColor="#fff" />
    <View>
      <Text style={styles.title}>어디서 출발하시나요?</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
      <Button
        title="김포"
        onPress={() => {
        }}
      />
      <Button
        title="김해"
        onPress={() => {
        }}
      />
    </View>
    <View style={{marginTop: 100}}>
    </View>
  </SafeAreaView>
);

const Stack = createNativeStackNavigator();

const TravelRegisterScreen = () => (
  <SafeAreaProvider>
    <NavigationContainer
      independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Screen01"}>
        <Stack.Screen name="Screen01" component={Screen01} />
        <Stack.Screen name="Screen02" component={Screen02} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 8,
  }
});

export default TravelRegisterScreen;