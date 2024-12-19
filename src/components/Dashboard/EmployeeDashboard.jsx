import React from "react";
import Header from "../other/Header";
import TaskNumbers from "../other/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard=(props)=>{
    return(
        <div className="bg-black p-4 h-screen">
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskNumbers data={props.data}/>
            <TaskList data={props.data}/>
        </div>

    );
}

export default EmployeeDashboard;