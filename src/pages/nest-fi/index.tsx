import {Button, chakra, HStack, Stack, useMediaQuery} from '@chakra-ui/react'
import * as React from 'react'
import Banner from "./Banner";
import iPhone from "../../assets/image/NEST_Fi/iPhone.png";
import NESTFI_bg_2 from '../../assets/image/NEST_Fi/NEST_Fi_bg_2.jpg'
import NESTFI_bg_icon_2 from '../../assets/image/NEST_Fi/NEST_Fi_bg_icon_2.png'
import NESTFI_bg_2_phone from '../../assets/image/NEST_Fi/NEST_Fi_bg_2_phone.jpg'
import NESTFI_bg_icon_2_phone from '../../assets/image/NEST_Fi/NEST_Fi_bg_icon_2_phone.png'
import Layout from "@theme/Layout";

const NESTFi = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Layout>
      <Stack spacing={['30px', '80px']} pb={['30px', '80px']}>
        <Banner/>
        <Stack spacing={'48px'} align={'center'} justify={'start'}>
          <Stack
            align={'center'}
            h={['300px', '440px']}
            w={'full'}
            justify={'start'}
            spacing={['30px', '40px']}
            bgImage={isDesktop ? NESTFI_bg_2 : NESTFI_bg_2_phone}
            bgSize={'cover'}
            bgPosition={"center"}
          >
            <chakra.img
              position={"absolute"}
              src={isDesktop ? NESTFI_bg_icon_2 : NESTFI_bg_icon_2_phone}
              alt={'NEST'}
              h={['300px', '440px']}
              objectFit={'cover'}
              overflow={"hidden"}
            />
            <Stack
              position={'absolute'}
              h={['375px', '440px']}
              w={'full'}
              overflow={'hidden'}
              bgImage={iPhone}
              bgRepeat={'no-repeat'}
              bgPosition={'bottom'}
              bgSize={'contain'}
              zIndex={0}
            />
          </Stack>
        </Stack>
        <HStack justify={"center"} pt={['110px', 0]}>
          <Button
            minW={'160px'}
            minH={['44px', '34px']}
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
