import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Home from './Home';
import PipelineBuilder from './PipelineBuilder';
import QueryFilter from './QueryFilter';
import './index.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pipelinebuilder" element={<PipelineBuilder />} />
        <Route path="/queryfilter" element={<QueryFilter />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
