import { useEffect, useMemo } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  IconButton,
} from "@material-ui/core";
import { Clear as ClearIcon } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import { useFormContext, Controller } from "react-hook-form";
import { ISelectProps } from "./type";

export default (props: ISelectProps) => {
  const {
    id = uuidv4(),
    name,
    label,
    options,
    helperText,
    disabled,
    watch,
    onChange,
    emptyValue,
    ...rest
  } = props;
  const { data, displayValue, displayField } = options;

  const {
    control,
    watch: watchFunc,
    setValue,
    formState,
    register,
    getValues,
  } = useFormContext();

  const val = watchFunc(name);

  const mw = useMemo(() => val, [val]);

  useEffect(() => {
    watch && watch(mw);
    //eslint-disable-next-line
  }, [mw]);

  const renderMenuItems = () => {
    if (data?.length) {
      return data.map((e: any, i: number) => (
        <MenuItem
          key={i}
          value={e[displayValue]}
          onClick={(a) => {
            onChange && onChange(e[displayValue]);
          }}
        >
          {e[displayField]}
        </MenuItem>
      ));
    }
  };

  const renderEndAdornment = () => {
    if (val && emptyValue) {
      return (
        <div className="select-empty-value">
          <IconButton onClick={() => setValue(name, "")}>
            <ClearIcon />
          </IconButton>
        </div>
      );
    }
  };

  return (
    <FormControl
      variant="outlined"
      fullWidth
      error={!!formState?.errors[name]?.message}
    >
      <InputLabel id={id}>{label}</InputLabel>
      <Controller
        render={() => (
          <Select
            id={id}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              getContentAnchorEl: null,
            }}
            value={getValues(name)}
            {...register(name)}
            endAdornment={<div>{renderEndAdornment()}</div>}
            disabled={disabled}
            {...rest}
          >
            {renderMenuItems()}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={""}
      />
      <FormHelperText>
        {formState?.errors[name]?.message || helperText}
      </FormHelperText>
    </FormControl>
  );
};
