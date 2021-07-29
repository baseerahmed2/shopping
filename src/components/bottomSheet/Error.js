import React from 'react'
import { View, Text } from 'react-native'

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const Error = () => {
    
  const sheetRef = React.useRef(null);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'rgb(11,21,90)',
        padding: 16,
        height: 50,
      }}
    >
      <Text style={{textAlign:'center', color:'#fff', letterSpacing:1, fontSize:14}}>Swipe down to close</Text>
    </View>
  );

    return (

        <BottomSheet
        style={{}}
        ref={sheetRef}
        snapPoints={[20, 50, 0]}
        borderRadius={0}
        renderContent={renderContent}
      />
    )
}

export default Error
