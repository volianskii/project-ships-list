import React from 'react';
import { Vehicle } from '../../../types/items';

type ItemProps = {
  vehicle: Vehicle;
}

const Item = ({ vehicle }: ItemProps): JSX.Element => {
  return (
    <div className='item-container'>
      <p>{vehicle.title}</p>
      <p>Class: {vehicle.type.title}</p>
      <img src={vehicle.type.icons.default} alt="type-icon" />
      <p>Nation: {vehicle.nation.title}</p>
      <p>Level: {vehicle.level}</p>
      <img src={vehicle.icons.medium} alt="ship-picture" />
      <p>{vehicle.description}</p>
    </div>
  )
}

export default Item;
