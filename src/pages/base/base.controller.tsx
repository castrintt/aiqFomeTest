import { useForm } from "react-hook-form";
import { BaseFormProps } from "./base.types";

const UseBaseController = () => {
  const { control } = useForm<BaseFormProps>({
    defaultValues: {
      meatCount: 0,
    },
  });

  return {
    Actions: {},
    States: {
      control,
    },
  };
};

export default UseBaseController;
