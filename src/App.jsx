import router from './routes';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
