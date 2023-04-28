import React, { useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

/** 필터링 된 todo 리스트 : 전체 todo 리스트에서 일부 기준에 따라
 ** 특정 항목이 필터링 된 새 리스트(예: 이미 완료된 항목 필터링)를 생성되어 파생된다.
 */
type FilterState = '0' | '1' | '2';
export const todoListFilterState = atom<FilterState>({
  key: 'todoListFilterState',
  default: '0',
});

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  // const updateFilter: React.ChangeEventHandler<HTMLSelectElement> = ({
  //   target: { value },
  // }) => {
  //   // upcasting always typesafe
  //   setFilter(value as FilterState);
  // };

  const handleChange = (e: SelectChangeEvent) => {
    setFilter(e.target.value as FilterState);
  };

  return (
    <>
      필터조건 : 
      <Select
        value={filter}
        onChange={handleChange}
        defaultValue="0"
        size="small"
        style={{ marginLeft : "10px" }}
      >
        <MenuItem value={"0"}>전체</MenuItem>
        <MenuItem value={"1"}>완료</MenuItem>
        <MenuItem value={"2"}>미완료</MenuItem>
      </Select>
    </>
  );
}
