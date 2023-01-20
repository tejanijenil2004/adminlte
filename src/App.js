import logo from './logo.svg';
import './App.css';
import Home from './componets/Home';
import Login from './componets/Login';
import Form from './componets/Form';
import Table from './componets/Table';
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/form" element={<Form />} />
        <Route path="/home/table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;