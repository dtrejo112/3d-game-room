import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';
import { Roboto } from 'next/font/google';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

const roboto = Roboto({
  weight: ['100', '300', '400','500', '700', '900'],
  subsets: ['latin'],
});
export default function TopNavigationBar({props}) {
  return (
  
      <AppBar color='default' elevation={1} sx={{padding: '0rem 6rem 0rem 6rem'}}>
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'center'}}>
          <VideogameAssetIcon fontSize='large' sx={{ mr: 1,  display: {xs: 'none' ,sm: 'none', md: 'block'} }} />
          <Typography 
              className={`${roboto.className}`} 
              variant="h6" 
              component="a" 
              sx={{ flexGrow: 1, fontWeight: '700',overflow: 'visible'}} 
              href="/"
              noWrap>
                 3D Room Game Controls
          </Typography>
         <Box sx={{ flexGrow: 1, display: { sm: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {/* <Link href='#about' style={{textDecoration: 'none'}}> 
                <Button
                  className={`navBtn ${roboto.className}`}
                >
                  Home
                </Button>
              </Link> */}
          </Box>

        </Toolbar>

      </AppBar>
   
  );
}