import './App.css';
import Navigation from './components/Navigation/Navigation';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>

                <AppRoutes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
