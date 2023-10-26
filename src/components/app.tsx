import { useState } from 'react';
import '../style/style.scss';
import ItemsList from './items-list/items-list';
import Sorting from './sorting/sorting';
import Modal from './modal/modal';

export const App = () => {
  const [sortNation, setSortNation] = useState('All');
  const [sortType, setSortType] = useState('All');
  const [sortLevel, setSortLevel] = useState('All');
  const [modalActive, setModalActive] = useState(false);
  const [modalDescription, setModalDescription] = useState<string>('');

  return (
    <div className='main-container'>
      <Sorting
        onChangeLevel={(event) => setSortLevel(event.target.value)}
        currentSortLevel={sortLevel}
        onChangeNation={(event) => setSortNation(event.target.value)}
        currentSortNation={sortNation}
        onChangeType={(event) => setSortType(event.target.value)}
        currentSortType={sortType} />
      <ItemsList sortLevel={sortLevel} sortType={sortType} sortNation={sortNation} setActive={setModalActive} setDescription={setModalDescription} />
      <Modal active={modalActive} description={modalDescription} setActive={setModalActive} />
    </div>
  )
}
