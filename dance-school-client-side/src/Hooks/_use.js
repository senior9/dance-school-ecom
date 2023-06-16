const useOrder = () => {
    const { user } = useContext(authProvider);
    
    const [axiosSecure] = useAxiosSecure();
    const {
      data: cart = [],
      refetch,
    } = useQuery({
      queryKey: ["carts", user?.email],
      queryFn: async () => {
        console.log('Email:', user?.email);
        const res = await axiosSecure(`/carts?email=${user?.email}`);
        console.log('Cart Response:', res.data);
        return res.data;
      }
    });
    return [cart, refetch];
  };
  
  export default useOrder;