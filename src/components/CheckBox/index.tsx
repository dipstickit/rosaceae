import React from "react";

const variants = {
  primary: " ",
} as const;

const sizes = {
  xs: "h-[17px] w-[17px]",
} as const;

type CheckboxProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    onChange: (checked: boolean) => void;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    onClick: () => void;
  }>;

const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div
          className={className + " flex items-center gap-[5px] cursor-pointer"}
        >
          <input
            id={id}
            className={`appearance-none rounded-full border-[2px] border-solid 
              ${size && sizes[size] ? sizes[size] : ""} 
              ${variant && variants[variant] ? variants[variant] : ""}
            `}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            {...restProps}
          />
          {!!label && (
            <label htmlFor={id} className="ml-2 text-black-900">
              {label}
            </label>
          )}
        </div>
        {children}
      </>
    );
  }
);

export { CheckBox };
