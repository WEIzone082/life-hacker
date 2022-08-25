import React from "react";

import Index from "./pages/Index"
import NewProject from "./pages/NewProject";
import SelectProject from "./pages/SelectProject";
import EnterProject from "./pages/EnterProject";
import "./assets/index.sass"

// here I used router v6 ,no switch ,only Routes
import { Routes, Route } from "react-router-dom";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Index></Index>}/>
                <Route path="/new-project" element={<NewProject />} />
                <Route path="/select-project" element={ <SelectProject/> } />
                <Route path="/project/:projectID" element={<EnterProject/>}/>
            </Routes>
        </div>
    );
}

export default App;