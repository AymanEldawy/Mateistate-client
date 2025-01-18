import useWindowWidth from "@/hooks/useWindowWidth";
import Select from "react-select";

const CustomSelectInput = ({
  small,
  isYellow,
  disabled,
  hasError,
  className,
  isLoading,
  styles = {},
  isMulti = false,
  ...restProps
}) => {
  const windowWidth = useWindowWidth();
  const isSmallScreen = windowWidth < 1024;

  return (
    <Select
      styles={{
        placeholder: (provided) => ({
          ...provided,
          color: "black",
          fontWeight: "normal",
          fontSize: small ? "13px" : isSmallScreen ? "14px" : "16px",
        }),
        value: (provided) => ({
          ...provided,
          height: small ? "32px" : "clamp(36px,2.5vw,40px)",
          padding: small ? "0 6px" : "0 16px",
        }),
        valueContainer: (provided) => ({
          ...provided,
          height: small ? "32px" : "clamp(36px,2.5vw,40px)",
          padding: small ? "0 4px" : "0 6px",
          fontSize: small ? "13px" : provided.fontSize,
          cursor: "pointer",
          backgroundColor: "white",
          borderColor: "white",
          borderRadius: small ? "4px" : "clamp(6px,0.5vw,8px) !important",
        }),
        option: (provided, state) => ({
          ...provided,
          fontSize: small ? "13px" : provided.fontSize,
          cursor: "pointer",
        }),
        container: (provided) => ({
          ...provided,
          minWidth: "120px",
          maxWidth: small ? "100px" : "auto",
          borderColor: "white",
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          cursor: "pointer",
          backgroundColor: "white",
          borderRadius: small ? "4px" : "clamp(6px,0.5vw,8px) !important",
        }),
        control: (provided, state) => ({
          ...provided,
          boxShadow: "none",
          height: small ? "32px" : provided.height,
          minHeight: small ? "32px" : provided.minHeight,
          borderColor: hasError ? "#F0426A !important" : "white !important",
          borderRadius: small ? "4px" : "clamp(6px,0.5vw,8px) !important",
          "&:hover": {
            borderColor: isYellow ? "#FFCC00 !important" : "#0092A0 !important",
          },
          "&:focus-within": {
            borderColor: isYellow ? "#FFCC00 !important" : "#0092A0 !important",
          },
          " > div": {
            overflow: "auto",
          },
        }),
        ...styles,
      }}
      isMulti={isMulti}
      isDisabled={disabled}
      isLoading={isLoading}
      className={className}
      {...restProps}
    />
  );
};

export default CustomSelectInput;