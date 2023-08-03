import Spline from '@splinetool/react-spline';
import { SpeedDial } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function SplineScene({isOpen, setIsOpen}) {
    
    const handleClose = () => {
        setIsOpen(false);
      };
    return (   
         <> 
          {isOpen ? 
                <SpeedDial 
                    ariaLabel='Speed dial UI menu for 3D game'
                    sx={{ position: 'absolute', left: '2rem', top: '2rem'}}
                    icon={<PowerSettingsNewIcon />}
                    direction='right'
                    onClick={handleClose}
                >
                
                </SpeedDial>
                : ''}
                    <Spline 
                className={ isOpen ? 'splineOpen' : 'spline'}
                scene="https://prod.spline.design/93uYArLT1jhthCdH/scene.splinecode"
                 />
         </>
        
    );
}
