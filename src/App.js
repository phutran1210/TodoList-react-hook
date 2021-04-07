import "./App.css";
import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { v4 } from "uuid";
import { useCallback, useEffect, useState } from "react";

const TODO_APP_STORAGE_KEY = 'TODO_APP'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((event) => {
    setTextInput(event.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (event) => {
      // Thêm text input vào todo List
      // Thư viện uuid giúp ta tạo ra một id duy nhất
      setTodoList([...todoList, { id: v4(), name: textInput, isComplete: false }]);
      setTextInput("")
    },
    [textInput, todoList]
  );

  const onCheckBtnClick = useCallback((id)=>{
    setTodoList(prevState => prevState.map(item => item.id === id ? {...item,isComplete:true} : item))
  },[])

  useEffect(()=>{
    const storegedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY)
    if(storegedTodoList){
      setTodoList(JSON.parse(storegedTodoList))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(TODO_APP_STORAGE_KEY,  JSON.stringify(todoList))
  },[todoList]) // khi truyền một arr [] rỗng nó hoạt động như một componentDidMout
  // khi giá trị của todoList thay đổi ta lưu giá trị của nó vào localStorage



  return (
    <div className="App">
      <h3>Todo List</h3>
      <Textfield
        name="add-todo"
        placeholder="Todo Somthings"
        elemAfterInput={
          <Button appearance="primary" isDisabled={!textInput} onClick={onAddBtnClick}>
            Add
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}/>
    </div>
  );
}

export default App;
