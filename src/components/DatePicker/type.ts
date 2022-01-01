import { KeyboardDatePickerProps } from "@material-ui/pickers";

export interface IDatePickerProps
  extends Omit<KeyboardDatePickerProps, "id" | "name" | "onChange" | "value"> {
  id?: string;
  name: string;
  label: string;
  value?: any;
  helperText?: string;
  watch?: (data: any) => void;
  onChange?: (data: any) => void;
  unixTime?: boolean;
}
