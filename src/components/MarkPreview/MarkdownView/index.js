import { Box } from "@chakra-ui/react"
import ReactMarkdown from 'react-markdown';
import { useSelector } from "react-redux";

const MarkdownView = () => {

    const {mark} = useSelector(state => state.markdown); 

  return (
    <Box bg={'yellow.200'} p={5} px={7} boxShadow='2xl' borderRadius={10} minHeight={'80vh'}>
      <ReactMarkdown children={mark}/>
    </Box>
  )
}

export default MarkdownView
