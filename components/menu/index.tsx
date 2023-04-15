import { Box, Button, Link, Text } from '@chakra-ui/react';
import React, { useCallback, useRef, useState } from 'react';
import * as styles from './index.module.scss';

const MENU_LIST = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Demos",
        link: '/demo'
    }
]


const Menu = () => {
    const [isActive, setIsActive] = useState(false);

    const menuRef = useRef();

    const handleSwitchActive = () => {
        setIsActive(!isActive)
    }
    const animateDurationArr = [0.3, 0.3, 0.3];
    const ascDelay = [];
    const descDelay = [];
    animateDurationArr.reduce((pre, cur) => {
        ascDelay.push(pre)
        return pre + cur;
    }, 0);
    animateDurationArr.reverse().reduce((pre, cur) => {
        descDelay.push(pre);
        return pre + cur;
    }, 0)
    descDelay.reverse();

    const genDelay = useCallback((order: number, duration: number) => {
        return (!isActive ? descDelay[order] : ascDelay[order]) + 's';
    }, [isActive])

    const TRANSITION_CODE = 'all 0.3s ease-in-out';

    return <Box>
        <Button
            pos="absolute"
            left="40px"
            top="40px"
            _hover={{
                bg: isActive ? "#fff" : "blackAlpha.900"
            }}
            transition={`${TRANSITION_CODE} ${genDelay(1, 0.3)}`}
            bg={isActive ? "#fff" : "blackAlpha.900"}
            color={isActive ? "#000000" : "#ffffff"}
            padding="8px 24px"
            borderRadius="200px"
            zIndex="99"
            onClick={handleSwitchActive}
        >
            Menu
        </Button>
        <Box
            ref={menuRef}
            pos="absolute"
            left="20px"
            top="20px"
            borderRadius="20px"
            w="350px"
            h="500px"
            transition={`${TRANSITION_CODE} ${genDelay(0, 0.3)}`}
            bg="#000"
            clipPath={isActive ? "inset(0 0 0 0 round 10px)" : "inset(20px 100% 100% 20px round 10px)"}
        >
            <Text as="ul" p="100px 48px 100px" transition={`${TRANSITION_CODE} ${genDelay(2, 0.5)}`} opacity={isActive ? 1 : 0}>
                {
                    MENU_LIST.map((item, index) => {
                        return <li key={index}>
                            <Link href={item.link} color="#fff">{item.label}</Link>
                        </li>
                    })
                }
            </Text>
        </Box>
    </Box >;
};
export default Menu;