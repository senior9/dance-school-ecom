import {
  useQuery,
} from "@tanstack/react-query";
import { useContext } from "react";
import { authProvider } from "../Provider/Provider";


const useOrder = () => {
  const { user } = useContext(authProvider);
  const verifyToken = localStorage.getItem('token')
  const {
    data: cart = [],
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://dance-school-server-senior9.vercel.app/carts?email=${user?.email}`,{
          headers: {
            authorization: `Bearer  ${verifyToken}`
          }
        }
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useOrder;
