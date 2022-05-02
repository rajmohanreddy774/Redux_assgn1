
import './App.css';
import { Todos } from './components/Todos'
import { Counter } from './components/counter'

function App() {
  return (
    <div className="App">
   <h1>Redux Todo</h1>
   <Counter></Counter>
      <Todos></Todos>
    </div>
  );
}

export default App;
