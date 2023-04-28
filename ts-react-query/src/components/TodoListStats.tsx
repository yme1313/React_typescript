import React from "react";
import { todoListState } from "../containers/TodoListContainer";
import { selector, useRecoilValue } from "recoil";
import styled from "styled-components";

export const todoListStatsState = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    };
  }
});
/**
 * Todo list statistics: derived from the complete todo list
 * by calculating useful attributes of the list,
 * such as the total number of items in the list,
 * the number of completed items, and the percentage of items that are completed.
 */
export default function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <List>
      <li>총 갯수 : {totalNum}</li>
      <li>완료 갯수 : {totalCompletedNum}</li>
      <li>미완료 갯수 : {totalUncompletedNum}</li>
      <li>완료율 : {formattedPercentCompleted}%</li>
    </List>
  );
}

const List = styled.ul`
& > li {
  list-style : none;
  text-align : left;
  padding-left : 8%;
}
`