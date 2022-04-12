import './App.css';
import SideBar from './components/Sidebar/SideBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard/Dashboard';
import { Chart } from './components/chart/Chart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="components d-flex">
        <BrowserRouter>
          <SideBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
