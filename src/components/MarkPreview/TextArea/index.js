import { useEffect } from "react";
import { Box, Textarea } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { changeMark } from "../../../store/slices/markdownSlice";

const TextArea = () => {

    const dispatch = useDispatch();
    const {mark} = useSelector(state => state.markdown);

    const handleChange = (e) => {
        dispatch(changeMark(e.target.value));
    }

    useEffect(() => {
      fetch("mark.md")
        .then((res) => res.text())
        .then((text) => dispatch(changeMark(text)));
    }, [dispatch]);

  return (
    <Box>
      <Textarea value={mark} onChange={handleChange} borderRadius={10} boxShadow='2xl' minHeight={'80vh'} bg={'yellow.200'} p={3} variant={'unstyled'} placeholder='text' />
    </Box>
  )
}

export default TextArea
