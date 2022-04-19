import { Box, Container, Text } from '@chakra-ui/react';
import MarkdownView from './components/MarkPreview';

const App = () => {
  return (
    <Container maxW={'container.lg'}>
      <Text py={5} textAlign={'center'} fontSize={'2xl'} fontWeight={'bold'}>Markdown Previewer</Text>
      <MarkdownView />
    </Container>
  )
}

export default App;
