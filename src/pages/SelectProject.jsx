import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

import { fetchActivities } from "../store/actions";
import { Link } from "react-router-dom";

const SelectProject = ()=>{
    const dispatch = useDispatch()
    const activities = useSelector((state)=>state.initial.activities)

    useEffect(() => {
        dispatch(fetchActivities());
    }, [dispatch]);

    const printActivities = ()=>{
        console.log(activities);
    }

    return(
        <div className="page page-new-project">
            <h1 className="page-title" onClick={printActivities}>選擇活動</h1>
            <section className="options">
                {
                    activities && activities.map((ele) => (
                        <div className="option-btn lg">
                            <Link to={`/project/${ele.activity.id}`}>
                                {ele.activity.name}
                            </Link>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default SelectProject