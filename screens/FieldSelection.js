import * as React from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default function FieldSelection() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>MAP:</Text>
            <TouchableWithoutFeedback>
                <Image
                    source={require('../assets/map1.png')} 
                    style={{ width: 200, height: 400 }}
                />
            </TouchableWithoutFeedback>
            <Text>UFO</Text>
        </View>
    );
}
