import React from "react";

const Header=(props)=>{
    const logoutUser=()=>{
        localStorage.setItem('loggedInUser','');
        props.changeUser('')
        //window.location.reload
    }
    return(
      <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="text-lg font-medium">
        <span>Hello </span><br></br>
        <span className="text-2xl font-bold">username</span> 
        <span className="ml-1">👋</span>
      </div>
      
      <button
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
        onClick={logoutUser}
        >
        Log Out
      </button>
    </header>
    );
}

export default Header;