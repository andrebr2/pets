import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Category from 'pages/Category';
import Initial from 'pages/Initial';
import Supplier from 'pages/Supplier';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Initial />}/>
        <Route path="/category">
          <Route path="" element={<Category />} />
        </Route>
        <Route path="/supplier">
          <Route path="" element={<Supplier />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;