import React from "react";

function Users({getSelectUserIndex,index}) {
  return (
    <div onClick={()=>getSelectUserIndex(index)} className="flex p-2 border-b overflow-hidden cursor-pointer">
      <div className="">
        <img
          className="rounded-full object-cover w-10 h-10"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div className="text-sm ml-2">Haniya shaikh</div>
          <div className="text-sm ml-2">12:00 PM</div>
        </div>
        <div className="ml-2 text-xs">Lorem ipsum lorem...</div>
      </div>
    </div>
  );
}

export default Users;
