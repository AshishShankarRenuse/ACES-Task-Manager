import React, { useContext, useState } from "react";
import NewTask from "../TaskList/NewTask";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask=()=>{

  const [userData,setUserData]=useContext(AuthContext)

  const [taskTitle,setTaskTitle]= useState(''); 
  const [taskDescription,setTaskDescrition]= useState(''); 
  const [assignTo,setAssignTo]= useState(''); 
  const [taskDate,setTaskDate]= useState(''); 
  const [taskCategory,setTaskCategory]= useState('');
  
  const [newTask,setNewTask]=useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    
    setNewTask({taskTitle,taskDescription,assignTo,taskDate,taskCategory,active:false,NewTask:true,completed:false,failed:false})

    const data=userData
    console.log(data)

    data.forEach(function(elem){
        if(assignTo == elem.FirstName){
            elem.Tasks.push(newTask);
            console.log(elem)
            elem.TaskSummary.newTask = elem.TaskSummary.newTask+1;
        }
    })

    setUserData(data)
    
    setTaskTitle("")
    setAssignTo("")
    setTaskDescrition("")
    setTaskDate("")
    setTaskCategory("")
  }


    return(
    <div className="mt-10 bg-[#1c1c1c] p-8 rounded-lg">
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="taskTitle" className="text-white">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value);
              }}
              type="text"
              id="taskTitle"
              placeholder="Make A UI Design"
              className="bg-black text-white bg-transparent border-[1px] border-black-400 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="assignedTo" className="text-white">Assign to</label>
            <input
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value);
              }}
              type="text"
              id="assignedTo"
              placeholder="Employee Name"
              className="bg-black-700 text-white bg-transparent border-[1px] border-gray-400 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-white">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e)=>{
                setTaskDescrition(e.target.value);
              }}
              id="description"
              className="bg-gray-700 text-white bg-transparent border-[1px] border-gray-400 rounded-md p-2 w-full h-24"
            />
          </div>
          <div>
            <label htmlFor="dueDate" className="text-white">Date</label>
            <input
              value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value);
              }}
              type="date"
              id="dueDate"
              className="bg-gray-700 text-white bg-transparent border-[1px] border-gray-400 rounded-md p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="category" className="text-white">Category</label>
            <input
              value={taskCategory}
              onChange={(e)=>{
                setTaskCategory(e.target.value);
              }}
              type="text"
              id="category"
              placeholder="Design,Dev,etc"
              className="bg-gray-700 text-white bg-transparent border-[1px] border-gray-400 rounded-md p-2 w-full"
            />
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
    );
}

export default CreateTask;