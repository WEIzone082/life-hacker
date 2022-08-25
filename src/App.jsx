import React from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "./firebaseConfig"

import Index from "./pages/Index"
import NewProject from "./pages/NewProject";
import EnterProject from "./pages/EnterProject";
import "./assets/index.sass"

// here I used router v6 ,no switch ,only Routes
import { Routes, Route } from "react-router-dom";

function App() {

    const fbint = async() =>{
        const projStore = firebase.firestore()
        const res = await projStore.collection('counters').get();
        res.docs.map(doc =>{ console.log(doc.data())})
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        fbint()
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Index></Index>}/>
                <Route path="/new-project" element={<NewProject/>}/>
                <Route path="/enter-project" element={<EnterProject/>}/>
            </Routes>
        </div>
    );
}

export default App;