import {Stack, Text, chakra, useMediaQuery, Heading} from "@chakra-ui/react";
import * as React from "react";

const Banner = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack
      align={'center'}
      h={'full'}
      justify={'center'}
      minH={isDesktop ? "660px" : "540px"}
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
        minH={isDesktop ? "660px" : "540px"}
        objectFit={'cover'}
        overflow={"hidden"}
      />
      <Stack spacing={isDesktop ? "44px" : "22px"}>
        <Heading
          whiteSpace={'break-spaces'}
          textAlign={'center'}
          fontSize={isDesktop ? "48px" : "24px"}
          fontWeight={'700'}
          zIndex={1}
          color={'#003434'}
          maxW={isDesktop ? "720px" : "100%"}
        >
          NEST Research
          { !isDesktop ? (<br/>) : ' ' }
          Academy (NRA)
        </Heading>
        <Text
          fontSize={ isDesktop ? "17px" : "12px"}
          fontWeight={'700'}
          textAlign={'center'}
          zIndex={1}
          color={'#003434'}
          maxW={isDesktop ? "700px" : "100%"}
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