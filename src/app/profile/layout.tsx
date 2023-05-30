import UserDetails from "@/components/UserDetails";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserDetails />
      {children}
    </>
  );
};

export default ProfileLayout;
