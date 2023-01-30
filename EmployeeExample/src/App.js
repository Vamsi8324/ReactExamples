import logo from './logo.svg';
import './App.css';
import Employee from './component/Employee'
import ListEmployees from './component/ListEmployees';
import {empArr,deptArr} from './service/data'

function App() {
  return (
    <div className="App">
      <Employee data={empArr}/>
      <ListEmployees srcArr={empArr}/>
      
    </div>
  );
}

export default App;
