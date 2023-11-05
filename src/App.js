import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/styles/themes/default';

import Header from './components/Header';
import ContactsList from './components/ContactsList';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Container>
        <Header />

        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
