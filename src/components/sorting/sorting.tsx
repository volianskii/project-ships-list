import React, { ChangeEvent } from "react";
import { LEVELS, NATIONS, TYPES } from '../../mocks/mocks';

type SortingProps = {
  onChangeLevel: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeType: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeNation: (event: ChangeEvent<HTMLSelectElement>) => void;
  currentSortLevel: number;
  currentSortNation: string;
  currentSortType: string;
}
/* currencyList: string[];
  selectedCurrency: string;
  onChangeCurrency: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
  amount: number; */
const Sorting = ({ onChangeLevel, onChangeType, onChangeNation, currentSortLevel, currentSortNation, currentSortType }: SortingProps): JSX.Element => {
  return (
    <div className="sorting-container">
      <select name="level" value={currentSortLevel} id="" onChange={onChangeLevel}>
        {LEVELS.map((level) => {
          return (
            <option value={level}>{level}</option>
          )
        })}
      </select>
      <select name="nation" value={currentSortNation} id="" onChange={onChangeNation}>
        {NATIONS.map((nation) => {
          return (
            <option value={nation}>{nation}</option>
          )
        })}
      </select>
      <select name="class" value={currentSortType} id="" onChange={onChangeType}>
        {TYPES.map((type) => {
          return (
            <option value={type}>{type}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Sorting;

{/* <select value={selectedCurrency} onChange={onChangeCurrency}>
{currencyList.map((option, index) => {
  const keyValue = `option-${index}`;
  return (
    <option value={option} key={keyValue}> : {option}</option>
  )
})}
</select> */}