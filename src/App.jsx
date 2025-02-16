import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import HomePage from "./pages/HomePage"

const App = () => {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HomePage />
    </MantineProvider>
  )
}

export default App
