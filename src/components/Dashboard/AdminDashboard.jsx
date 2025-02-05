import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard=(props)=>{
    return(
        <div className="bg-black p-4">        
            <Header changeUser={props.changeUser}/>
            <CreateTask/>
            <AllTask/>
        </div>

    );
}

export default AdminDashboard;