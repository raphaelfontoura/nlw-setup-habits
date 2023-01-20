import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function Loading() {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E'}}>
      <ActivityIndicator color='#7C3AED' />
    </View>
  )
}
