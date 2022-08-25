import React from "react";

import { useParams } from "react-router-dom";

const EnterProject = () => {
    
    const params = useParams()

    return(
        <div className="page page-new-project">
            <h1 className="page-title">{params.projectID}</h1>
            <section className="options">
                <div className="option-btn lg">
                    新增支出
                </div>
                <div className="option-btn lg">
                    我要付錢
                </div>
                <div className="option-btn lg">
                    支出總覽
                </div>
            </section>
        </div>
    )
}

export default EnterProject