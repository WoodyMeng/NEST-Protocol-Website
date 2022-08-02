import {Button, chakra, HStack, Stack, useMediaQuery} from '@chakra-ui/react'
import * as React from 'react'
import Banner from "./Banner";
import Layout from "@theme/Layout";

const NESTFi = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Layout>
      <Stack spacing={isDesktop ? "80px" : "30px"} pb={isDesktop ? "80px" : "30px"}>
        <Banner/>
        <Stack spacing={'48px'} align={'center'} justify={'start'}>
          <Stack
            align={'center'}
            h={isDesktop ? "440px" : "300px"}
            w={'100%'}
            justify={'start'}
            spacing={isDesktop ? "40px" : "30px"}
            bgImage={isDesktop ? "/image/NEST_Fi/NEST_Fi_bg_2.jpg" : "/image/NEST_Fi/NEST_Fi_bg_2_phone.jpg"}
            bgSize={'cover'}
            bgPosition={"center"}
          >
            <chakra.img
              position={"absolute"}
              src={isDesktop ? "/image/NEST_Fi/NEST_Fi_bg_icon_2.png" : "/image/NEST_Fi/NEST_Fi_bg_icon_2_phone.png"}
              alt={'NEST'}
              h={isDesktop ? "440px" : "300px"}
              objectFit={'cover'}
              overflow={"hidden"}
            />
            <Stack
              position={'absolute'}
              h={isDesktop ? "440px" : "375px"}
              w={'100%'}
              overflow={'hidden'}
              bgImage={"/image/NEST_Fi/iPhone.png"}
              bgRepeat={'no-repeat'}
              bgPosition={'bottom'}
              bgSize={'contain'}
              zIndex={0}
            />
          </Stack>
        </Stack>
        <HStack justify={"center"} pt={isDesktop ? 0 : "110px"}>
          <Button
            className={"button--primary"}
            minW={'160px'}
            minH={isDesktop ? "34px" : "44px"}
            onClick={() => {
              window.open('https://finance.nestprotocol.org/', '_blank')
            }}
          >
            Launch App
          </Button>
        </HStack>
      </Stack>
    </Layout>
  )
}

export default NESTFi
