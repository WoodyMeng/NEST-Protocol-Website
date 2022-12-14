import {chakra, Link, SimpleGrid, Stack, useMediaQuery, VStack} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "../../components/BigTitle";
import {ChevronRightIcon} from "@chakra-ui/icons";

const News = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={'News'}/>
      <Stack
        px={isDesktop ? "48px" : "24px"}
        align={'center'}
        minH={'440px'}
        justify={'center'}
        spacing={'16px'}
      >
        <SimpleGrid columns={isDesktop ? 3 : 1} spacing={isDesktop ? "44px" : "22px"} pb={'27px'}>
          {[
            {
              label: `Coinbase Announces Planned Listing of Tokens, Adds $NEST to ‘Experimental Asset’ Label`,
              bg: "/image/Home/News_card_bg.png",
              logo: "/image/Home/News_card_icon.png",
              desc: `Leading United States-based cryptocurrency exchange`,
              link: '/blog/Coinbase-Announces-Planned-Listing-of-Tokens-Adds-$NEST-to-Experimental-Asset-Label'
            },
            {
              label: 'NEST Protocol: A New Paradigm of Game Theoretic Oracle',
              bg: "/image/Home/News_card_bg_1.png",
              logo: "/image/Home/News_card_icon_1.png",
              desc: 'Blockchain innovation defined the major part of the last decade,with cryptocurrency disrupting.',
              link: '/blog/NEST-Protocol-A-New-Paradigm-of-Game-Theoretic-Oracle'
            },
            {
              label: 'NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE PAGE',
              bg: "/image/Home/News_card_bg_2.png",
              logo: "/image/Home/News_card_icon_2.png",
              desc: 'Through Crypto.com’s NEST Price Page, you can now directly access NEST’s RSS news feed.',
              link: '/blog/NEST\'s-RSS-FEED-INTEGRATED-WITH-CRYPTO.COM-PRICE-PAGE'
            },
          ].map(item => (
            <VStack
              key={item.label}
              w={isDesktop ? '308px' : '100%'}
              spacing={0}
              border={'1px solid #EEEEEE'}
              boxShadow={'0px 0px 45px 5px #E5E5E5'}
              borderRadius={'12px'}
              overflow={'hidden'}
              cursor={'pointer'}
              onClick={() => {
                window.open(item.link)
              }}
            >
              <Stack
                bgImage={item.bg}
                bgRepeat={'no-repeat'}
                w={'100%'}
                bgSize={'cover'}
                align={'center'}
                justify={'center'}
                h={isDesktop ? "160px" : "135px"}
              >
                <chakra.img src={item.logo} _hover={{transform: 'scale(1.05)'}} h={isDesktop ? "132px" : "99px"}/>
              </Stack>
              <VStack
                w={'full'}
                px={'44px'}
                py={'44px'}
                spacing={'8px'}
                alignItems={isDesktop ? 'center' : 'start'}
                justifyContent={'start'}
              >
                <Link
                  isExternal
                  href={item.link}
                  style={{textDecoration: 'none'}}
                  fontSize={isDesktop ? "15px" : "12px"}
                  color={'#003232'}
                  fontWeight={'700'}
                  textAlign={'start'}
                  w={'full'}
                  whiteSpace={'break-spaces'}
                >
                  {item.label}
                </Link>
                <Link
                  isExternal
                  href={item.link}
                  style={{textDecoration: 'none'}}
                  fontSize={isDesktop ? "15px" : "12px"}
                  fontWeight={'600'}
                  color={'#7d7d7d'}
                >
                  {item.desc}
                </Link>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Stack>
      <Link color={'#00A0E9'} fontWeight={'600'} fontSize={'15px'} cursor={"pointer"} href={'/news'}>
        More news<ChevronRightIcon/>
      </Link>
    </Stack>
  )
}

export default News