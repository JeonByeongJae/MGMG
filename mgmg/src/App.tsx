import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BasePage } from "./pages/Base/BasePage";
import { SearchSingleData } from "./pages/SearchSingleData/SearchSingleData";
import { SearchAsCode } from "./pages/AddWithCode/AddWithCode";
import { AddWithDecklist } from "./pages/AddWithDecklist/AddWithDecklist";
import "./App.scss";

export default function App(): JSX.Element {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<BasePage />} />
        <Route path="/single" element={<SearchSingleData />} />
        <Route path="/code" element={<SearchAsCode />} />
        <Route path="/decklist" element={<AddWithDecklist />} />
      </Routes>
    </BrowserRouter>
  );
}
