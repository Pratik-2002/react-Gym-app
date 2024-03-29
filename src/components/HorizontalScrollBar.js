import React, {useContext} from 'react';
import { ScrollMenu , VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box , Typography } from '@mui/material';

import BodyPart  from './BodyPart';
import ExerciseCard from './ExerciseCard';

import RightArrowIcon from '../assets/assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return(
      <Typography onClick={() => scrollPrev()} className='right-arrow' >
        <img src={LeftArrowIcon} alt = "left-arrow" />

      </Typography>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return(
      <Typography onClick={() => scrollNext()} className='left-arrow' >
        <img src={RightArrowIcon} alt = "right-arrow" />

      </Typography>
  );
};



const HorizontalScrollBar = ({ data, bodyPart, setBodypart, BodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
        <Box
            key ={item.id || item}
            itemID = {item.id || item}
            title ={item.id || item}
            m="0 40px"
          >
            {BodyParts ? <BodyPart item={item} bodyPart= {bodyPart} setBodypart= {setBodypart} />
            : <ExerciseCard exercise={item} />
          }        
          </Box> 
        )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar;