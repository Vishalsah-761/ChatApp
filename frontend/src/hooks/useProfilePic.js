import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProfilePic, removeProfilePic } from "../lib/api";

const useProfilePic = () => {
  const queryClient = useQueryClient();

  const upload = useMutation({
    mutationFn: uploadProfilePic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  const remove = useMutation({
    mutationFn: removeProfilePic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  return { upload, remove };
};

export default useProfilePic;