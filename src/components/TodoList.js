import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, onCheckBtnClick }) {
  return (
    <>
      {todoList.map((item, index) => {
        return <Todo key={index} item={item} onCheckBtnClick={()=>onCheckBtnClick(item.id)}/>;
      })}
    </>
  );
}
