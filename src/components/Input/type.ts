import { OutlinedInputProps } from '@material-ui/core';

export interface IOutlinedInputProps
  extends Omit<OutlinedInputProps, 'name' | 'value' | 'onChange'> {
  name: string;
  value?: any;
  helperText?: string;
  watch?: (val: any) => void;
}
