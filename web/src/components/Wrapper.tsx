import { Box } from '@chakra-ui/react';
import React from 'react'

interface WrapperProps {
    variant?: 'small'|'regualr'
}

const Wrapper: React.FC<WrapperProps> = ({children, variant='regualr'}) =>{
    return (
        <Box mt={8} mx='auto' maxW={variant==='regualr' ? "800px":"400px"} w="100%">
            {children}
        </Box>
        );
}

export default Wrapper;