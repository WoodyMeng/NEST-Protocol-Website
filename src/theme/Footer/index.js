import React from 'react';
import Head from '@docusaurus/Head';
import { Stack, Text, useMediaQuery, chakra, Wrap, WrapItem, VStack, HStack } from "@chakra-ui/react"

const Footer = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
      <>
        <Head>
          <script src="https://crypto.com/price/static/widget/index.js"></script>
        </Head>
        <Stack
            px={['24px', '48px']}
            py={['66px', '88px']}
            w={'full'}
            align={'center'}
            bgImage={isDesktop ? "/image/Footer/Footer_bg.jpg" : "/image/Footer/Footer_bg_phone.jpg"}
            bgSize={'cover'}
            bgPosition={"right"}
            zIndex={'10'}
        >
          <chakra.img
              zIndex={0}
              position={"absolute"}
              src={isDesktop ? "/image/Footer/Footer_bg_icon.png" : "/image/Footer/Footer_bg_icon_phone.png"}
              alt={'NEST'}
              minH={'380px'}
              objectFit={'cover'}
              overflow={"hidden"}
              objectPosition={"center"}
          />
          <Stack maxW={'1440px'} justify={'space-around'} w={'full'}  zIndex={1}>
            <Wrap spacing={['22px', '44px']} fontSize={['12px', '15px']} w={"full"}>
              <WrapItem>
                <Stack px={isDesktop ? '0' : '16px'} spacing={['22px', '44px']} minW={'300px'}>
                  <VStack spacing={'16px'} align={"start"}>
                    <Text fontWeight={"bold"}
                          cursor={"pointer"}
                          onClick={() => {
                            window.open('https://finance.nestprotocol.org/', '_blank')
                          }}
                          color={'#003232'}>Launch App</Text>
                    <Text
                        color={'#7D7D7D'}
                        fontWeight={'semibold'}
                    >Buy futures, options and win NEST</Text>
                  </VStack>
                  <VStack spacing={'16px'} align={"start"}>
                    <Text fontWeight={"bold"} color={'#003232'}
                          cursor={"pointer"} onClick={() => {
                      window.open('/news')
                    }}
                    >NEST News</Text>
                    <Text color={'#7D7D7D'} fontWeight={'semibold'}>Latest news from NEST</Text>
                  </VStack>
                  <VStack spacing={'16px'} align={"start"}>
                    <Text fontWeight={"bold"} color={'#003232'} cursor={"pointer"} onClick={() => {
                      window.open('/nest-research-academy')
                    }}>NEST Research Academy</Text>
                    <Text color={'#7D7D7D'} fontWeight={'semibold'}>Learn about NRA</Text>
                  </VStack>
                </Stack>
              </WrapItem>
              <WrapItem>
                <Stack px={isDesktop ? '0' : '16px'} spacing={['22px', '44px']} minW={'300px'}>
                  <VStack spacing={'16px'} align={"start"}>
                    <Text fontWeight={"bold"} color={'#003232'} cursor={"pointer"} onClick={() => {
                      window.open('/docs/NEST-PVM/Concept')
                    }}>NEST PVM Docs</Text>
                    <Text color={'#7D7D7D'} fontWeight={'semibold'}>Know how to develop on NEST PVM</Text>
                  </VStack>
                  <VStack spacing={'16px'} align={"start"}>
                    <Text fontWeight={"bold"} color={'#003232'} cursor={"pointer"} onClick={() => {
                      window.open('/docs/NEST-Oracle/Concept')
                    }}>NEST Oracle Docs</Text>
                    <Text color={'#7D7D7D'} fontWeight={'semibold'}>Know how to use NEST Oracle</Text>
                  </VStack>
                  { isDesktop && (
                      <HStack spacing={'24px'}>
                        <chakra.img
                            alt={'https://github.com/NEST-Protocol'}
                            src={"/image/Footer/github_icon.svg"}
                            width={'44px'}
                            height={'44px'}
                            cursor={"pointer"}
                            onClick={() => {
                              window.open('https://github.com/NEST-Protocol', '_blank')
                            }}
                        />
                        <chakra.img
                            alt={'https://twitter.com/nest_protocol/'}
                            src={"/image/Footer/twitter_icon.svg"}
                            width={'44px'}
                            height={'44px'}
                            cursor={"pointer"}
                            onClick={() => {
                              window.open('https://twitter.com/nest_protocol/', '_blank')
                            }}
                        />
                        <chakra.img
                            alt={'https://t.me/nest_chat/'}
                            src={"/image/Footer/telegram_icon.svg"}
                            width={'44px'}
                            height={'44px'}
                            cursor={"pointer"}
                            onClick={() => {
                              window.open('https://t.me/nest_chat/', '_blank')
                            }}
                        />
                        <chakra.img
                            alt={'https://nest-protocol-82041.medium.com/'}
                            src={"/image/Footer/medium_icon.svg"}
                            width={'44px'}
                            height={'44px'}
                            cursor={"pointer"}
                            onClick={() => {
                              window.open('https://nest-protocol-82041.medium.com/', '_blank')
                            }}
                        />
                      </HStack>
                  ) }
                </Stack>
              </WrapItem>
              <WrapItem w={'400px'}>
                <Stack spacing={'0px'} zIndex={1} w={"full"}>
                  <Text px={'16px'} fontSize={['12px', '15px']} fontWeight={'bold'} color={'#003232'}>
                    Market price
                  </Text>
                  <chakra.div
                      id="crypto-widget-CoinList"
                      data-transparent="true"
                      data-design="classic"
                      data-coin-ids="2204"
                      w={'full'}
                  ></chakra.div>
                </Stack>
              </WrapItem>
            </Wrap>
          </Stack>
          { !isDesktop && (
              <HStack spacing={'24px'}>
                <chakra.img
                    alt={'https://github.com/NEST-Protocol'}
                    src={"/image/Footer/github_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://github.com/NEST-Protocol', '_blank')
                    }}
                />
                <chakra.img
                    alt={'https://twitter.com/nest_protocol/'}
                    src={"/image/Footer/twitter_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://twitter.com/nest_protocol/', '_blank')
                    }}
                />
                <chakra.img
                    alt={'https://t.me/nest_chat/'}
                    src={"/image/Footer/telegram_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://t.me/nest_chat/', '_blank')
                    }}
                />
                <chakra.img
                    alt={'https://nest-protocol-82041.medium.com/'}
                    src={"/image/Footer/medium_icon.svg"}
                    width={'44px'}
                    height={'44px'}
                    cursor={"pointer"}
                    onClick={() => {
                      window.open('https://nest-protocol-82041.medium.com/', '_blank')
                    }}
                />
              </HStack>
          )}
          <HStack justify={isDesktop ? "end" : "center"} w={"full"} maxW={1440} pt={['22px', 0]}>
            <Text px={'24px'} color={'#7D7D7D'} fontSize={'15px'} fontWeight={'semibold'}>
              ©2022 NEST
            </Text>
          </HStack>
        </Stack>
      </>
  )
}

export default React.memo(Footer);
