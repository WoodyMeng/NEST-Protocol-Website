import {chakra, Heading, Link, SimpleGrid, Stack, useMediaQuery, VStack} from "@chakra-ui/react";
import * as React from "react";
import BigTitle from "@site/src/components/BigTitle";

const LatestNews = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Stack spacing={'48px'} align={'center'}>
      <BigTitle title={"The Latest from NEST"} />
      <Stack
        px={isDesktop ? "48px" : "24px"}
        align={'center'}
        minH={'440px'}
        justify={'center'}
        spacing={'16px'}
      >
        <SimpleGrid columns={isDesktop ? 3 : 1} spacing={isDesktop ? "44px" : '22px'} pb={'27px'}>
          {[
            {
              label: `Coinbase Announces Planned Listing of Tokens, Adds $NEST to ‘Experimental Asset’ Label`,
              bg: "/image/Home/News_card_bg.png",
              logo: "/image/Home/News_card_icon.png",
              desc: `Leading United States-based cryptocurrency exchange`,
              link: 'https://cryptonews.net/news/market/9582857'
            },
            {
              label: 'NEST Protocol: A New Paradigm of Game Theoretic Oracle',
              bg: "/image/Home/News_card_bg_1.png",
              logo: "/image/Home/News_card_icon_1.png",
              desc: 'Blockchain innovation defined the major part of the last decade,with cryptocurrency disrupting.',
              link: 'https://nest-protocol-82041.medium.com/nest-protocol-a-new-paradigm-of-game-theoretic-oracle-187c1f853128'
            },
            {
              label: 'NEST’s RSS FEED INTEGRATED WITH CRYPTO.COM PRICE PAGE',
              bg: "/image/Home/News_card_bg_2.png",
              logo: "/image/Home/News_card_icon_2.png",
              desc: 'Through Crypto.com’s NEST Price Page, you can now directly access NEST’s RSS news feed.',
              link: 'https://nest-protocol-82041.medium.com/nests-rss-feed-integrated-with-crypto-com-price-page-9323828d28d9'
            },
            {
              label: 'NEST Protocol partners with UTU.ONE to seek and create more opportunities in DAO governance',
              bg: "/image/Home/News_card_bg_3.png",
              logo: "/image/Home/News_card_icon_3.png",
              desc: 'NEST Protocol is delighted to announce a strategic.',
              link: 'https://nest-protocol-82041.medium.com/nest-protocol-partners-with-utu-one-to-seek-and-create-more-opportunities-in-dao-governance-1ab02d072d7d'
            },
            {
              label: 'Comments on Vitalik’s Twitter',
              bg: "/image/Home/News_card_bg_1.png",
              logo: "/image/News/News_card_icon_4.png",
              desc: 'Introduction Vitalik, the founder of Ethereum, delivered something interesting on Twitter at the beginning of 2022.',
              link: 'https://nest-protocol-82041.medium.com/comments-on-vitaliks-twitter-227c9198b85c'
            },
            {
              label: 'James Talks | \nThree major genres in the blockchain jungle',
              bg: "/image/Home/News_card_bg_2.png",
              logo: "/image/News/News_card_icon_5.png",
              desc: 'The blockchain world is also like the corner of the country with genres of thought.',
              link: 'https://nest-protocol-82041.medium.com/james-talks-three-major-genres-in-the-blockchain-jungle-dcf075824204'
            }
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
                h={'160px'}
              >
                <chakra.img src={item.logo} _hover={{transform: 'scale(1.05)'}}/>
              </Stack>
              <VStack
                w={'100%'}
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
                  w={'100%'}
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
    </Stack>
  )
}

export default LatestNews