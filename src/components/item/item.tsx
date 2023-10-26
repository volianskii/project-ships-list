import React from 'react';
import { Vehicle } from '../../../types/items';

type ItemProps = {
  vehicle: Vehicle;
  setActive: (status: boolean) => void;
  setDescription: (description: string) => void;
}

const Item = ({ vehicle, setActive, setDescription }: ItemProps): JSX.Element => {
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
        <p><span>Class:</span> {vehicle.type.title}</p>
        <p><span>Nation:</span> {vehicle.nation.title}</p>
        <button onClick={() => { setActive(true); setDescription(vehicle.description) }}>Description</button>
      </div>
    </div>
  )
}

export default Item;
