import {Stack, Text, chakra, useMediaQuery, Heading} from "@chakra-ui/react";
import * as React from "react";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={['540px', '660px']}
      bgImage={isDesktop ? "/image/Research/Research_bg_1.jpg" : "/image/Research/Research_bg_1_phone.jpg"}
      bgSize={'cover'}
      bgPosition={"center"}
      spacing={0}
      px={'24px'}
    >
      <chakra.img
        position={"absolute"}
        src={isDesktop ? "/image/Research/Research_bg_icon_1.png" : "/image/Research/Research_bg_icon_1_phone.png"}
        alt={'NEST'}
        minH={['540px', '660px']}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Stack spacing={['22px', '44px']}>
        <Heading
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={['24px', '48px']}
          fontWeight={'700'}
          zIndex={1}
          color={'#003434'}
          maxW={['full', '720px']}
        >
          NEST Research
          { !isDesktop ? (<br/>) : ' ' }
          Academy (NRA)
        </Heading>
        <Text
          fontSize={['12px', '17px']}
          fontWeight={'700'}
          textAlign={'center'}
          zIndex={1}
          color={'#003434'}
          maxW={['full', '700px']}
        >
          NEST Research Academy (NRA), initialized by the NEST protocol,
          aims to boost theoretical and applied research in related
          fields such as blockchain,finance, economics, game theory,
          machine learning, computer science,and software engineering and
          helps to spread this knowledge to the public.
        </Text>
      </Stack>
    </Stack>
  )
}

export default Banner