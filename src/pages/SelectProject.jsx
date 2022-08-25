import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchActivities } from "../store/actions";
import { Link } from "react-router-dom";

const SelectProject = () => {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.initial.activities);

    useEffect(() => {
        dispatch(fetchActivities());
    }, [dispatch]);

    return (
        <div className="page page-new-project">
            <h1 className="page-title">選擇活動</h1>
            <section className="options">
                {activities &&
                    activities.map((ele) => (
                        <div className="option-btn lg">
                            <Link to={`/project/${ele.activity.id}`}>
                                {ele.activity.name}
                            </Link>
                        </div>
                    ))}

                {!activities && <h2 className="white">正在跑</h2>}
            </section>
        </div>
    );
};

export default SelectProject;
