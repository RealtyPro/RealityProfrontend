"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchMlsSearchPropertyList, fetchPropertyList } from "./PropertyServices";

export const usePropertyList = (data: { pageLimit?: number; search?: string }) => {
    return useQuery({ queryKey: ['propertylist', ], queryFn: () => 
       fetchPropertyList(data) });
  };
export const useMlsPropertyList = (params: Parameters<typeof fetchMlsSearchPropertyList>[0]) => {
  return useQuery({
    queryKey: ['mlsPropertyList', params],
    queryFn: () => fetchMlsSearchPropertyList(params),
    // keepPreviousData: true,
  });
};
