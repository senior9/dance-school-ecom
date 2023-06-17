import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClass = () => {
    const {
        data: classCollection = [],isLoading:loading,
        refetch,
      } = useQuery({
        queryKey: ["classCollection"],
        queryFn: async () => {
          const res = await fetch(
            `https://dance-school-server-senior9.vercel.app/classCollection`);
          return res.json();
        },
      });
      console.log(classCollection)

      return [classCollection, refetch,loading];
    
};

export default useClass;