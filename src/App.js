import './App.css';
import UsersList from "./components/Users";
import Resources from "./components/Resources";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
function App() {

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Users</Link>
                    </li>
                    <li>
                        <Link to='/resources'>Resources</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<UsersList />} />
                <Route path="resources/*" element={<Resources />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
