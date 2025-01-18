import { useFormContext } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { Select } from ".";
import { SELECT_LISTS } from "Helpers/constants";

const AreaField = ({
  labelClassName,
  label,
  containerClassName,
  inputClassName,
  error,
  readOnly,
  index,
  updatedName,
  hideLabel,
  tab,
  onBlur,
  ...field
}) => {
  const { t } = useTranslation();
  const { register, watch, setValue, control } = useFormContext();
  const { name } = field;

  const area_unit = (updatedName || field?.name) + "_unit";

  return (
    <div
      className={"flex gap-2 justify-between " + containerClassName}
      key={field?.name}
    >
      <input
        id={updatedName || field?.name}
        className={`border max-w-[60px] h-[39px] read-only:bg-[#2289fb1c] dark:read-only:bg-[#444] rounded p-1 ${inputClassName} ${
          error ? "border-red-200 text-red-500" : ""
        } 
         `}
        type="number"
        placeholder={'0'}
        value={watch(updatedName || field?.name)}
        {...register(updatedName || field.name, {
          valueAsNumber: field.type === "number",
          validate: (value) => {},
        })}
      />
      <select
        {...register(area_unit, {
          validate: (value) => {},
        })}
        className={`border h-[39px] read-only:bg-[#2289fb1c] dark:read-only:bg-[#444] rounded p-1 `}
        defaultValue={SELECT_LISTS("property_values_area")[0]}
      >
        {SELECT_LISTS("property_values_area")?.map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>
    </div>
  );
};

export default AreaField;
