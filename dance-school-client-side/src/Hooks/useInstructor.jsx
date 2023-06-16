import React, { useContext } from "react";
import useAxiosSecure from "./useAxiousSecure";
import { useQuery } from "@tanstack/react-query";
import { authProvider } from "../Provider/Provider";

const useInstructor = () => {
  const { user } = useContext(authProvider);
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data.instructor;
    },
  });
  return [isInstructor,isInstructorLoading]
};

export default useInstructor;
