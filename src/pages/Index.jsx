import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import 'firebase/compat/firestore';

const Index = () => {
        
    return (
        <div className="page page-index">
            <h1 className="page-title">暴力收錢機</h1>
            <section className="options">
                <div className="option-btn lg">
                    <Link to={"/select-project"}>進入活動</Link>
                </div>
                <div className="option-btn lg">
                    <Link to={"/new-project"}>新增活動</Link>
                </div>
            </section>
        </div>
    );
};

export default Index;
