import { useMutation, useQueryClient } from "@tanstack/react-query";

// USED FOR OPTIMISTIC UPDATE
const useOptimisticMutation = ({
  mutateFunc,
  queryKey,
  onModifyUpdatedData,
}) => {
  const queryClient = useQueryClient();


  const { mutate } = useMutation({
    mutationFn: mutateFunc,
    onMutate: async (data) => {
      const updatedData = onModifyUpdatedData(data);

      await queryClient.cancelQueries({ queryKey: queryKey });
      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, updatedData);

      return { previousData };
    },
    onError: (error, data, context) =>
      queryClient.setQueryData(queryKey, context.previousEvent),
    onSettled: () => queryClient.invalidateQueries(queryKey),
  });

  return mutate;
};

export default useOptimisticMutation;
