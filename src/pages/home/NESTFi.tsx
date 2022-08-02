import {Button, Stack, chakra, Text, useMediaQuery, Heading} from "@chakra-ui/react"
import * as React from "react";
import BigTitle from "../../components/BigTitle";

const NESTFi = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'NEST Fi'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'full'}
        justify={'center'}
        spacing={['13px', '16px']}
        bgImage={isDesktop ? "/image/Home/Home_bg_2.jpg" : "/image/Home/Home_bg_2_phone.jpg"}
        bgSize={'cover'}
        bgPosition={"center"}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Home/Home_bg_icon_2.png" : "/image/Home/Home_bg_icon_2_phone.png"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={"/image/Home/icon_1.png"} zIndex={1} h={['55px', '110px']}/>
        <Heading
          fontSize={['17px', '24px']}
          fontWeight={'semibold'}
          color={'#003232'}
          zIndex={1}
        >
          NEST Financial Market
        </Heading>
        <Text
          zIndex={1}
          fontSize={['12px', '15px']}
          fontWeight={'semibold'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          Get NEST token here and buy futures,
          { isDesktop ? ' ' : <br/> }
          options or play DeFi games to win NEST.
        </Text>
        <Stack pt={'16px'}>
          <Button
            minW={'160px'}
            minH={['44px', '34px']}
            onClick={() => {
              window.open('https://finance.nestprotocol.org/#/win', '_blank')
            }}
          >
            Launch App
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default NESTFi