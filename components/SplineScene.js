import React, { Suspense } from 'react';
import { Skeleton } from '@mui/material';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineScene({isOpen}) {
    return (
        <Suspense fallback={<Skeleton
            sx={{ bgcolor: '#808080'}}
            variant="rectangular"
            width={'100%'}
            height={'100%'}
          />}> 
            <Spline 
                className={ isOpen ? 'splineOpen' : 'spline'}
                scene="https://prod.spline.design/93uYArLT1jhthCdH/scene.splinecode"
                 />
        </Suspense>
    );
}
