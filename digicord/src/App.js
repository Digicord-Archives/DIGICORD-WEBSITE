import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/Public/Index";
import UserDashboard from "./pages/UserDashboard/pages/Index/Index.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
            <Route path="/" element={<Index />} />
            <Route path="user/*" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
