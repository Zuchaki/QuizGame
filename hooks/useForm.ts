import type {
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormProps,
} from 'react-hook-form';
import { useForm as useNewForm } from 'react-hook-form';

const scrollToError = (errors: FieldErrors) => {
  const error = document.getElementsByName(Object.keys(errors)[0])[0];
  if (!error) {
    return;
  }
  const closestDiv = error.closest('div');
  if (closestDiv) {
    closestDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const useForm = <T extends object>(obj: UseFormProps<T>) => {
  const innerForm = useNewForm<T>(obj);

  const onHandleSubmit: UseFormHandleSubmit<T> = (
    onValid: SubmitHandler<T>,
    onInvalid?: SubmitErrorHandler<T>,
  ) =>
    innerForm.handleSubmit(onValid, (error, event) => {
      onInvalid?.(error, event);
      scrollToError(error);
    });

  return {
    ...innerForm,
    handleSubmit: onHandleSubmit,
  };
};

export default useForm;
