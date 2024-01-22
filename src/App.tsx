import DataFetchingMethods from "./components/DataFetchingMethods";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";


const App = () => {
  return (
    <div /* className="flex items-center justify-center h-full flex-col" */>
      <Routes>
        <Route path='/products' element={<DataFetchingMethods />}/>
        <Route path='/products/:id' element={<SingleProduct />}/>
      </Routes>
    </div>
  );
};

export default App;
