import React, { useEffect, useState } from "react"
import { useQuery } from '@apollo/client';
import Item from '../item/item';
import { Vehicle } from '../../../types/items';
import { getShipsQuery } from '../../query/getShipsQuery';
import EmptyList from '../empty-list/empty-list';

type ItemsListProps = {
  sortLevel: string;
  sortType: string;
  sortNation: string;
  setActive: (status: boolean) => void;
  setDescription: (description: string) => void;
}

const ItemsList = ({ sortLevel, sortType, sortNation, setActive, setDescription }: ItemsListProps): JSX.Element => {
  const { data, loading } = useQuery(getShipsQuery);
  const [shipList, setList] = useState<Vehicle[]>([]);
  const sortedByLevel = sortLevel !== 'All' ? shipList.filter((ship) => ship.level === Number(sortLevel)) : shipList;
  const sortedByNation = sortNation !== 'All' ? sortedByLevel.filter((ship) => ship.nation.title === sortNation) : sortedByLevel;
  const sortedByType = sortType !== 'All' ? sortedByNation.filter((ship) => ship.type.title === sortType) : sortedByNation;

  useEffect(() => {
    if (!loading) {
      setList(data.vehicles)
    }
  }, [data])

  return (
    sortedByType.length === 0 ? <EmptyList /> :
      <div className="grid-container">
        {sortedByType.map((vehicle, index) => {
          let keyValue = `ship - ${index}`;
          return (
            <Item vehicle={vehicle} setActive={setActive} setDescription={setDescription} key={keyValue} />
          );
        })}
      </div>
  )
}

export default ItemsList;
