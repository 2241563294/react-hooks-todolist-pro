import { useState, useCallback, useEffect } from 'react';
import './App.scss';
import MyHeader from './components/Header';
import AddInput from './components/AddInput';
import TodoItem from './components/TodoItem';
import CheckModel from './components/Model/CheckModel';
import EditModel from './components/Model/EditModel';

// useEffect 要按顺序执行 
function App() {
  const [isShowInput, setShowInput] = useState(false),
        [todoList, setTodoList] = useState([]),
        [isShowCheckModel, setisShowCheckModel] = useState(false),
        [isShowEditModel, setisShowEditModel] = useState(false),
        [currentData, setcurrentData] = useState({});

  // 第一次加载时读取数据
  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
    setTodoList(todoData);
  }, []);

  // todoLis 变化的话就更新存储
  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoList));
  }, [todoList]);
  
  // 这个函数没必要在父组件更新的时候更新，所以用useCallback缓存，起来不让他跟随父组件更新
  const addItem = useCallback((value) => {
    const itemData = {
      id: new Date().getTime(),
      content: value,
      completed: false
    }
    setTodoList((todoList) => [...todoList, itemData]);
    setShowInput(false);
  }, []);

  // 依赖了todolist
  const openModel = useCallback((id, type = 0) => {
      setcurrentData(() => todoList.find(item => item.id === id));
      if (type === 0)setisShowCheckModel(true);
      else setisShowEditModel(true);
  }, [todoList]);

  const updateData = useCallback((data, id) =>{
    setTodoList(todoList => todoList.map(item => (item.id === id ? data : item)));
    setisShowEditModel(false);
  }, []);

  const handleCompleted = useCallback((id) => {
    setTodoList(todoList => todoList.map(item => {
      if (item.id === id) 
        item.completed = !item.completed;
      return item;
    }));
  }, []);

  const removeItem = useCallback((id) => {
    setTodoList(() => todoList.filter(item => item.id !== id));
  }, [todoList]);

  return (
    <div className="App">
      <MyHeader openInput={() => setShowInput(!isShowInput)} />
      <AddInput addItem={addItem} isShowInput={isShowInput} />
      <ul>{
        todoList.map(item => <TodoItem handleCompleted={handleCompleted} openModel={openModel} removeItem={removeItem} data={item} key={item.id} />)
      }</ul>
      <CheckModel
      data={currentData} 
      isShowCheckModel={isShowCheckModel} 
      closeModel={() => setisShowCheckModel(false)} />
      <EditModel
      data={currentData}  
      isShowEditModel={isShowEditModel}
      handleCompleted={handleCompleted}
      updateData={updateData}/>
    </div>
  );
}

export default App;
