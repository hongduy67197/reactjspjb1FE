import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './pages/CreateOrder';

import CreateOrder from './pages/CreateOrder';
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/createorder" element={<CreateOrder />}></Route>
            </Routes>
        </div>
    );
}

export default App;
