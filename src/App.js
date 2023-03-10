import { RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Main/Main';
import router from './Routes/Routes';

function App() {
  return (
    <RouterProvider router={router}>
      <Main></Main>
    </RouterProvider>
  );
}

export default App;
