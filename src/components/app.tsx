import { useState } from 'react';
import '../style/style.scss';
import ItemsList from './items-list/items-list';
import Sorting from './sorting/sorting';

export const App = () => {
  const [sortNation, setSortNation] = useState('All');
  const [sortType, setSortType] = useState('All');
  const [sortLevel, setSortLevel] = useState('All');
  console.log(sortLevel);
  console.log(sortType);
  console.log(sortNation);
  return (
    <div>
      <Sorting
        onChangeLevel={(event) => setSortLevel(event.target.value)}
        currentSortLevel={sortLevel}
        onChangeNation={(event) => setSortNation(event.target.value)}
        currentSortNation={sortNation}
        onChangeType={(event) => setSortType(event.target.value)}
        currentSortType={sortType} />
      <ItemsList sortLevel={sortLevel} sortType={sortType} sortNation={sortNation} />
    </div>
  )
}
