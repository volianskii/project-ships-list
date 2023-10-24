import React, { useEffect, useState } from "react"
import { useQuery } from '@apollo/client';
import Item from '../item/item';
import { Vehicle } from '../../../types/items';
import { getShipsQuery } from '../../query/getShipsQuery';

type ItemsListProps = {
  sortLevel: number;
  sortType: string;
  sortNation: string;
}

const ItemsList = ({ sortLevel, sortType, sortNation }: ItemsListProps): JSX.Element => {
  const { data, loading } = useQuery(getShipsQuery);
  const [shipList, setList] = useState<Vehicle[]>([]);
  console.log(shipList);
  const sortedByLevel = shipList.filter((ship) => ship.level === sortLevel);
  console.log(sortedByLevel);
  const sortedByNation = sortedByLevel.filter((ship) => ship.nation.title === sortNation);
  console.log(sortedByNation);
  const sortedByType = sortedByNation.filter((ship) => ship.type.title === sortType);

  useEffect(() => {
    if (!loading) {
      setList(data.vehicles)
    }
  }, [data])

  return (
    <div className="grid-container">
      {sortedByType.map((vehicle, index) => {
        let keyValue = `ship - ${index}`;
        return (
          <Item vehicle={vehicle} key={keyValue} />
        );
      })}
    </div>
  )
}

export default ItemsList;
