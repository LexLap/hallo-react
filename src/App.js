import ChartContainer from './components/Chart/ChartContainer';
import TableContainer from './components/Table/TableContainer';
import './styles/App.scss';

function App() {
  return (
    <div className="app-container">
      <h1>Jobs popularity</h1>
      <ChartContainer />
      <h1>Average salary</h1>
      <TableContainer />
    </div>
  );
}

export default App;
