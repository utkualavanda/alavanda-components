import { SelectProps } from '@material-ui/core';

interface ISelectOptios {
  data: any[];
  displayField: string;
  displayValue: any;
}

export interface ISelectProps
  extends Omit<SelectProps, 'name' | 'value' | 'onChange'> {
  name: string;
  options: ISelectOptios;
  helperText?: string;
  watch?: (val: any) => void;
  onChange?: (val: any) => void;
  emptyValue?: boolean;
}
