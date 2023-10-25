import React from 'react';
import { Vehicle } from '../../../types/items';

type ItemProps = {
  vehicle: Vehicle;
}

const Item = ({ vehicle }: ItemProps): JSX.Element => {
  return (
    <div className='item-container'>
      <div className='class-level-container'>
        <img src={vehicle.type.icons.default} alt="type-icon" />
        <p>{vehicle.level}</p>
      </div>
      <div className='image-container'>
        <img src={vehicle.icons.medium} alt="ship-picture" />
      </div>
      <div className='title-container'>
        <p>{vehicle.title}</p>
      </div>
      <div className='additional-info'>
        <p>Class: {vehicle.type.title}</p>
        <p>Nation: {vehicle.nation.title}</p>
        <p>{vehicle.description}</p>
      </div>
    </div>
  )
}

export default Item;
