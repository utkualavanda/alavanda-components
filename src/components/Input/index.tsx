import { useEffect, useMemo } from 'react';
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { useFormContext, Controller } from 'react-hook-form';
import { IOutlinedInputProps } from './type';

export default (props: IOutlinedInputProps) => {
  const {
    id = uuidv4(),
    name,
    label,
    helperText,
    disabled,
    watch,
    value,
    endAdornment,
    type = 'text',
    ...rest
  } = props;

  const {
    control,
    watch: watchFunc,
    setValue,
    formState: { errors },
    register,
  } = useFormContext();

  const watchVal = watchFunc(name);

  const mw = useMemo(() => watchVal, [watchVal]);

  useEffect(() => {
    watch && watch(mw);
    //eslint-disable-next-line
  }, [mw]);

  useEffect(
    () => {
      if (control._defaultValues[name] !== value && !!value) {
        setValue(name, value);
      }
    },
    //eslint-disable-next-line
    [control._defaultValues[name], value, name]
  );

  return (
    <FormControl variant="outlined" fullWidth error={!!errors[name]?.message}>
      <InputLabel id={id}>{label}</InputLabel>
      <Controller
        render={() => (
          <OutlinedInput
            id={id}
            type={type}
            disabled={disabled}
            {...register(name)}
            {...rest}
            endAdornment={endAdornment}
          />
        )}
        name={name}
        control={control}
        defaultValue={''}
      />
      <FormHelperText>{errors[name]?.message || helperText}</FormHelperText>
    </FormControl>
  );
};
