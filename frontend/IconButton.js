import * as React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {EntypoArrowBoldRight, EntypoCalculator} from 'react-entypo';
const MyComponent = () => {
    return (
        <View>
            <Text>asd</Text>
            <Button>
                <EntypoCalculator className="my-calc-icon" />
            </Button>
        </View>
    )
    }

export default MyComponent;