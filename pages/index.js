import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Box, Grid, Container, Stack, Typography, Button, SpeedDial, SpeedDialAction, Skeleton} from '@mui/material'
import TopNavigationBar from '@/components/NavBar'
import { Roboto } from 'next/font/google';
import imageOne from '../public/Game_Controls.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import dynamic from 'next/dynamic'

const DynamicSplineScene = dynamic(() => import('../components/SplineScene'), {
  loading: () => <Skeleton animation="wave" 
                           sx= {
                                  {
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                  }
                               } 
                           variant="rectangular" 
                           width={'100%'} 
                           height={'100%'} />,
  ssr: false,
})

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Head>
        <title> 3D Game - Cat Room</title>
        <meta name="description" content="A 3D room with a cat in it" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNavigationBar />
      <Grid 
            container 
            spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }} 
            sx={{height: '100vh', marginTop: isOpen ? '0px !important' : '', overflow: isOpen ? 'hidden': ''}}>
        <Grid item xs={12} sm={12} md={5} sx={{display:  isOpen ? 'none' : 'flex'}}> 
           <Box sx={{padding: '6rem 2rem 0rem 2rem', display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
            <Typography 
                        className={`title ${roboto.className}`} 
                        variant='h2' 
                        component='h1' 
                        gutterBottom
            >
                 A 3D Room With Game Controls
             </Typography>
             <Typography className={`subTitle ${roboto.className}`} variant='h5' component='h2' gutterBottom>
                 The 3D game was created in spline and is hosted with vercel on a site built with React, Next.js and Material UI.
             </Typography>
             <Stack direction="row" spacing={2} sx={{padding: '2rem 0rem 0rem 0rem'}}>
                 <Button onClick={handleClick} className='purpleButton' variant='contained' size='large'> Play Game </Button>
                 
             </Stack>
             <Box className='imageContainer'> 
             <Image
                  src={imageOne}
                  alt={'Game controls image (wasd + space:  up, left, down, right, jump) for 3D game'}
                  className={`responsiveImage w-full h-auto`}
                  sizes="100vw"
                  width="0"
                  height="0"
                  quality={100}
                  placeholder='blur' /> 
              </Box>
             </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={isOpen ? 12 : 7} sx={{height: '100vh'}}>
          <Container sx={{
                         width: '100%', 
                         height: '100%', 
                         minHeight: {xs: '660px', md: '720px'},
                         maxHeight: '100vw',
                         maxWidth: '100vw !important', 
                         padding: isOpen ? '2.5rem 0rem 0rem 0rem !important' : '6rem 2rem 1rem 2rem'
                        }}>
              {isOpen ? 
                <SpeedDial 
                    ariaLabel='Speed dial UI menu for 3D game'
                    sx={{ position: 'fixed', left: '2rem', top: '36rem'}}
                    icon={<PowerSettingsNewIcon />}
                    direction='right'
                    onClick={handleClose}
                >
                
                </SpeedDial>
                : ''}
              
          <DynamicSplineScene isOpen={isOpen}/> 
             
          </Container>
        </Grid>
      </Grid>
    </>
  )
}
