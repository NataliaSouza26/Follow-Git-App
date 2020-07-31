import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const ElevationScroll = (props: ElevationScrollProps) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
type ElevationScrollProps = {

    window?: () => Window;
    children: React.ReactElement;
};

export default ElevationScroll; 