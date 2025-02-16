import { useQueryClient } from "@tanstack/react-query";
import { deleteDataFn, getDataFn, postDataFn, updateDataFn } from "../requests";

export function useGetData(endpoint, queryKey) {
  return useQuery({
    queryKey: [queryKey],
    queryFn: () => getDataFn(endpoint),
  });
}

export function usePostData(endpoint) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => postDataFn(endpoint, data),
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
      toast.success("Malumot muvaffaqiyatli qoshildi!");
    },
  });
}

export function useUpdateData(endpoint) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => updateDataFn(endpoint, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
      toast.success("Malumot muvaffaqiyatli yangilandi!");
    },
  });
}

// DELETE - Malumotni ochirish
export function useDeleteData(endpoint) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }) => deleteDataFn(endpoint, id),
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
      toast.success("Malumot muvaffaqiyatli ochirildi!");
    },
  });
}
