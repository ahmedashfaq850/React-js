import DataFetchingMethods from "./components/DataFetchingMethods";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import CircleClickGame from "./components/CircleClickGame";
import ColorGenerator from "./components/ColorGenerator";
import OtpScreen from "./components/OtpScreen";
import Toastify from "./components/Toastify";
import ReactSignal from "./components/ReactSignal";
import MultiSelect from "./components/MultiSelect";
import StepperForm from "./components/StepperForm";
import DataFetchUsingQuery from "./components/UseQuery/DataFetchUsingQuery";
import ReactUseForm from "./components/ReactUseForm";
import ReactYUPForm from "./components/ReactYUPForm";

const App = () => {
  return (
    <div
      className="h-full" /* className="flex items-center justify-center h-full flex-col" */
    >
      <Routes>
        <Route path="/Circlegame" element={<CircleClickGame />} />
        <Route path="/products" element={<DataFetchingMethods />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/colorgenerator" element={<ColorGenerator />} />
        <Route path="/optscreen" element={<OtpScreen />} />
        <Route path="/toastify" element={<Toastify />} />
        <Route path="/react-signal" element={<ReactSignal />} />
        <Route path="/multi-select" element={<MultiSelect />} />
        <Route path="/Stepper-form" element={<StepperForm />} />
        <Route path="/fetch-query" element={<DataFetchUsingQuery />} />
        <Route path="/react-hook-form" element={<ReactUseForm />} />
        <Route path="/react-yup-form" element={<ReactYUPForm />} />
      </Routes>
    </div>
  );
};

export default App;
