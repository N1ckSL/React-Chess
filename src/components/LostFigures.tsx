import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map(figure =>
        <div className='lost-figure' key={figure.id}>
          {/* {figure.name}  */}
          {figure.logo && <img className='lost-figure-img' width={25} height={25} src={figure.logo}/>}
        </div>
      )}
    </div>
  );
};

export default LostFigures;
