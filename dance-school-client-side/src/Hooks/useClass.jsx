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
            `http://localhost:5000/classCollection`);
          return res.json();
        },
      });
      return [classCollection, refetch,loading];
};

export default useClass;