import './style/headerstyle.css';

import DashboardComponent from './DashboardComponent';
import HeaderBar from './HeaderBar';
import SearchBar from './SearchBar';
function App() {
    return (
        <>
            <HeaderBar />
            <SearchBar/>
            <DashboardComponent />
        </>
    );
}

export default App;