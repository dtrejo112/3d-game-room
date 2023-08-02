import Spline from '@splinetool/react-spline';

export default function SplineScene({isOpen}) {

    return (    
            <Spline 
                className={ isOpen ? 'splineOpen' : 'spline'}
                scene="https://prod.spline.design/93uYArLT1jhthCdH/scene.splinecode"
                 />
    );
}
