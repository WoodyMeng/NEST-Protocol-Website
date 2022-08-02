import {chakra, Link, Stack, Text, useMediaQuery} from "@chakra-ui/react";
import BigTitle from "../../components/BigTitle";
import * as React from "react";

const VacantPositions = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'Vacant Positions'}/>
      <Stack
        align={'center'}
        minH={'440px'}
        w={'100%'}
        justify={'center'}
        spacing={isDesktop ? "16px" : "13px"}
        bgImage={isDesktop ? "/image/Research/Research_bg_5.jpg" : "/image/Research/Research_bg_5_phone.jpg"}
        bgSize={'cover'}
        bgPosition={"center"}
        px={'24px'}
      >
        <chakra.img
          position={"absolute"}
          src={isDesktop ? "/image/Research/Research_bg_icon_3.png" : "/image/Research/Research_bg_icon_3_phone.png"}
          alt={'NEST'}
          minH={'440px'}
          objectFit={'cover'}
          overflow={"hidden"}
        />
        <chakra.img src={"/image/Research/icon_2.png"} zIndex={1}/>
        <Text
          zIndex={1}
          fontSize={ isDesktop ? "15px" : "12px"}
          fontWeight={'600'}
          color={'#003232'}
          whiteSpace={'break-spaces'}
          textAlign={'center'}
        >
          NRA welcomes applicants to researchers of all levels.
          { isDesktop && ( <br/>) }
          NRA evaluates the work of its researchers in a result-oriented manner with flexibility in terms
          { isDesktop && ( <br/>) }
          of working location and hours. The salary is decided case by case.
          { isDesktop && ( <br/>) }
          Those interested, please send your academic CV to
          { isDesktop && ( <br/>) }
          <br/>
          <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} zIndex={1}
                href={'mailto:nra@nestprotocol.org'} isExternal>
            nra@nestprotocol.org
          </Link>
        </Text>
      </Stack>
    </Stack>
  )
}

export default VacantPositions