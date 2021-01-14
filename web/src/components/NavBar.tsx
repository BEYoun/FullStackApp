import React from 'react'
import { Box, Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../../utils/isServer';
interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({ }) => {
    const [{fetching: logoutFetching},logout] = useLogoutMutation();
    const [{ data, fetching }] = useMeQuery({
        pause: isServer(),
    });
    let body = null
    console.log('data :', data);

    // data is loading
    if (fetching) {
        // user not loged
    } else if (!data?.me) {
        body = (
            <>
                <NextLink href="/login">
                    <Link mr="2">login</Link>
                </NextLink>
                <NextLink href="/register">
                    <Link variant="link">register</Link>
                </NextLink>
            </>
        )
    } else {
        body = (
            <Flex>
                <Box mr={2}>
                    {data.me.username}
                </Box>
                <Button
                    onClick={() => {
                        logout();
                    }}
                    variant="link"
                    isLoading={logoutFetching}
                >logout</Button>
            </Flex>
        )
    }
    return (
        <Flex bg='tan' p={4}>
            <Box ml={"auto"}>
                {body}
            </Box>
        </Flex>
        );
}

export default NavBar;