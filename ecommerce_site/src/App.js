import './App.css';
import AppRouter from './AppRouter';
import AppProvider from './ProductContext/AppProvider';
import UserProvider from './ProductContext/UserProvider';
import PageHeader from './components/PageHeader';


function App() {
  return (
    <AppProvider>
      <UserProvider>
        <div className="App">
          <PageHeader />
          <AppRouter />
        </div>
      </UserProvider>
    </AppProvider>
  );
}

export default App;
