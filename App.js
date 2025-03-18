import * as React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './src/navigation'
import theme from './src/theme'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  )
}
