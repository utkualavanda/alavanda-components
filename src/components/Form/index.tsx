import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFrom {
  onSubmit: (val: any) => void;
  validationSchema?: any;
  defaultValues?: any;
  dependedValidations?: any;
  children?: any;
}

export default (props: IFrom) => {
  const {
    onSubmit,
    validationSchema,
    defaultValues,
    dependedValidations,
    children,
  } = props;

  const validationObj = yup
    .object()
    .shape(validationSchema, dependedValidations);

  const methods = useForm({
    resolver: yupResolver(validationObj),
    defaultValues: defaultValues,
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmitForm = (data: any) => onSubmit(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitForm)}>{children}</form>
    </FormProvider>
  );
};
