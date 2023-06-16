import { useContext } from "react";
import { authProvider } from "../Provider/Provider";
import useAxiosSecure from "./useAxiousSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin=()=>{
const {user}= useContext(authProvider)
const [axiosSecure]= useAxiosSecure();
const {data:isAdmin,isLoading:isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        return res.data.admin;
      }
    
})
return [isAdmin,isAdminLoading]
}
export default useAdmin;