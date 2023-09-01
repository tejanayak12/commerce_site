import './App.css';
import AppRouter from './AppRouter';
import AppProvider from './ProductContext/AppProvider';
import PageHeader from './components/PageHeader';


function App() {
  return (
    <AppProvider>
      <div className="App">
        <PageHeader />
        <AppRouter />
      </div>
    </AppProvider>
  );
}

export default App;
