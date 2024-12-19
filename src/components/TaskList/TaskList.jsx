import React from "react";
import AcceptTask from "./AcceptTask";
import Completetask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList=({data})=>{
    //console.log(data);
    return(
    <div id="tasklist" className="h-[45%] p-4 mt-10 overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full">
        {data.Tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <Completetask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
        })}
    </div>
   
    );

}

export default TaskList;