import {Button, HStack, Stack, Text, useMediaQuery, chakra, Heading} from "@chakra-ui/react";
import * as React from "react";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'44px'}>
      <Stack
        align={'center'}
        justify={'center'}
        h={isDesktop ? "615px" : "540px"}
        bgImage={isDesktop ? "/image/Home/Home_bg_1.jpg" : "/image/Home/Home_bg_1_phone.jpg"}
        bgSize={'cover'}
        bgPosition={"center"}
        spacing={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Home/Home_bg_icon_1.png" : "/image/Home/Home_bg_icon_1_phone.png"}
          alt={'NEST'}
          h={['540px', '615px']}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <Heading
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={isDesktop ? "40px" : "24px"}
          fontWeight={'700'}
          zIndex={1}
          color={'#003434'}
        >
          What is NEST
        </Heading>

        { isDesktop ? (
          <Text
            fontWeight={"700"}
            fontSize={isDesktop ? "25px" : "12px"}
            textAlign={"center"}
            color={'#003434'}
            zIndex={1}
          >
            NEST is a blockchain-based probability virtual machine (PVM) system
            <br/>
            with web3 applications of DeFi, GameFi, NFT built on it.
            <br/>
            Swap, hedge, earn and even game with the NEST network
            <br/>
            to gain excess returns.
          </Text>
        ) : (
          <Stack>
            <Text
              fontWeight={"700"}
              fontSize={isDesktop ? "25px" : "12px"}
              textAlign={"center"}
              color={'#003434'}
              zIndex={1}
              px={'24px'}
            >
              NEST is a blockchain-based probability virtual machine (PVM) system
              with web3 applications of DeFi, GameFi, NFT built on it.
              Swap, hedge, earn and even game with the NEST network
              to gain excess returns.
            </Text>
            <HStack justify={"center"} pt={'50px'}>
              <Button
                className={"button--primary"}
                minW={'160px'}
                minH={isDesktop ? "34px" : "44px"}
              >
                App
              </Button>
            </HStack>
          </Stack>
        ) }
      </Stack>
    </Stack>
  )
}

export default Banner