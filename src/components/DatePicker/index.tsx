import { useEffect, useMemo } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormHelperText } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { IDatePickerProps } from "./type";
import { fromUnixTime } from "date-fns";
import getUnixTime from "date-fns/getUnixTime";

export default (props: IDatePickerProps) => {
  const {
    id = uuidv4(),
    label,
    name,
    watch,
    onChange,
    helperText,
    value,
    unixTime,
    ...rest
  } = props;

  const {
    watch: watchFunc,
    control,
    setValue,
    formState: { errors },
    register,
  } = useFormContext();

  const watchVal = watchFunc(name);

  const mw = useMemo(() => watchVal, [watchVal]);

  useEffect(() => {
    watch && watch(unixTime ? getUnixTime(mw) : mw);
    //eslint-disable-next-line
  }, [mw]);

  useEffect(
    () => {
      if (control._defaultValues[name] !== value && !!value) {
        setValue(name, unixTime ? fromUnixTime(value) : value);
      }
    },
    //eslint-disable-next-line
    [control._defaultValues[name], value, name]
  );

  return (
    <FormControl variant="outlined" fullWidth error={!!errors[name]?.message}>
      <Controller
        render={({ field }) => (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant="inline"
              inputVariant="outlined"
              label={label}
              format="MM/dd/yyyy"
              error={!!errors[name]?.message}
              value={field.value}
              {...register(name)}
              onChange={(date) => field.onChange(date)}
              {...rest}
            />
          </MuiPickersUtilsProvider>
        )}
        name={name}
        control={control}
        defaultValue={null}
      />
      <FormHelperText>{errors[name]?.message || helperText}</FormHelperText>
    </FormControl>
  );
};
