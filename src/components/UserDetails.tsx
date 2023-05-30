import React from "react";

const UserDetails = () => {
  return (
    <div className="max-w-[20%] bg-black text-white rounded p-5 flex flex-col items-start mt-5 gap-4">
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-medium">Name</h2>
        <p className="text-sm">Khubaib</p>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-medium">ID</h2>
        <p className="text-sm">543211594</p>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-medium">Email</h2>
        <p className="text-sm">khubaib@gmail.com</p>
      </div>
    </div>
  );
};

export default UserDetails;
