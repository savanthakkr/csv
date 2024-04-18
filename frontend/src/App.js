
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataTable from './components/DataTable';
import FileUpload from './components/FileUpload';
import ExportToExcelButton from './components/Export';
// import FavoriteColor from './components/reacthooks';
import Component1 from './components/reacthooks';

function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/" element={<DataTable />} />
          <Route path='/fileUpload' element={<FileUpload/>} />
          <Route path='/excel' element={<ExportToExcelButton/>} />
          <Route path='/hook' element={<Component1/>} />
        </Routes>
        
    </Router>
  );
}

export default App;
