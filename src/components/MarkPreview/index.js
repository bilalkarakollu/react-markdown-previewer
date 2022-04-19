import React from 'react'
import { SimpleGrid } from '@chakra-ui/react';
import MarkdownView from './MarkdownView';
import TextArea from './TextArea';

const MarkPreview = () => {
    return (
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} mb={10}>
            <TextArea />
            <MarkdownView />
        </SimpleGrid>
    )
}

export default MarkPreview
