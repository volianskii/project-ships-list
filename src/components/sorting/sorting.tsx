import React, { ChangeEvent } from "react";
import { LEVELS, NATIONS, TYPES } from '../../mocks/mocks';

type SortingProps = {
  onChangeLevel: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeType: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeNation: (event: ChangeEvent<HTMLSelectElement>) => void;
  currentSortLevel: string;
  currentSortNation: string;
  currentSortType: string;
}

const Sorting = ({ onChangeLevel, onChangeType, onChangeNation, currentSortLevel, currentSortNation, currentSortType }: SortingProps): JSX.Element => {
  return (
    <div className="sorting-container">
      <div>
        <label htmlFor="level">Level: </label>
        <select id="level" name="level" value={currentSortLevel} onChange={onChangeLevel}>
          <option hidden>Выбор уровня</option>
          {LEVELS.map((level) => {
            return (
              <option value={level}>{level}</option>
            )
          })}
        </select>
      </div>
      <div>
        <label htmlFor="level">Nation: </label>
        <select name="nation" value={currentSortNation} onChange={onChangeNation}>
          {NATIONS.map((nation) => {
            return (
              <option value={nation}>{nation}</option>
            )
          })}
        </select>
      </div>
      <div>
        <label htmlFor="level">Type: </label>
        <select name="class" value={currentSortType} onChange={onChangeType}>
          {TYPES.map((type) => {
            return (
              <option value={type}>{type}</option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default Sorting;
