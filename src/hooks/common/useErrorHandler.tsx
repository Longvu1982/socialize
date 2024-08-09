import { toast } from "sonner";

export const useErrorHandler = () => {
  const catchError = (error: A) => {
    console.log(error);
    toast.error("An error has occurred!", {
      description: error.message,
    });
  };

  return { catchError };
};
