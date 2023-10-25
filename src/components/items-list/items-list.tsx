import React, { useEffect, useState } from "react"
import { useQuery } from '@apollo/client';
import Item from '../item/item';
import { Vehicle } from '../../../types/items';
import { getShipsQuery } from '../../query/getShipsQuery';

type ItemsListProps = {
  sortLevel: string;
  sortType: string;
  sortNation: string;
}

const ItemsList = ({ sortLevel, sortType, sortNation }: ItemsListProps): JSX.Element => {
  const { data, loading } = useQuery(getShipsQuery);
  const [shipList, setList] = useState<Vehicle[]>([]);
  console.log(shipList);
  const sortedByLevel = sortLevel !== 'All' ? shipList.filter((ship) => ship.level === Number(sortLevel)) : shipList;
  console.log(sortedByLevel);
  const sortedByNation = sortNation !== 'All' ? sortedByLevel.filter((ship) => ship.nation.title === sortNation) : sortedByLevel;
  console.log(sortedByNation);
  const sortedByType = sortType !== 'All' ? sortedByNation.filter((ship) => ship.type.title === sortType) : sortedByNation;

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
