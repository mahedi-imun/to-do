
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import ToDoApp from './components/ToDoApp/ToDoApp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequireAuth>
          <ToDoApp></ToDoApp>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
