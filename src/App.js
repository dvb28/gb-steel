import './App.css';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/routes';
import Header from './component/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                {publicRoute.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
