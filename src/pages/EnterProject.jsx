import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initActions } from "../store/store";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EnterProject = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const activity = useSelector((state) => state.initial.activityData);

    useEffect(() => {
        dispatch(initActions.setActivity(params.projectID));
    }, []);

    return (
        <div className="page page-new-project">
            <h1 className="page-title">
                {activity ? activity.activity.projectID : "還在跑"}
            </h1>
            <section className="options">
                <div className="option-btn lg">新增支出</div>
                <div className="option-btn lg">我要付錢</div>
                <div className="option-btn lg">支出總覽</div>
            </section>
        </div>
    );
};

export default EnterProject;
