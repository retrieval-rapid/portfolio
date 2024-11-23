"use client";
import classNames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /**
   * Property to change the type of button
   */
  variant?: "default" | "warning" | "transparent";
  /**
   * Property to change the size of button
   */
  size?: "small" | "medium" | "big";
  /**
   * Property to change button to Outline
   */
  outline?: boolean;
  /**
   * Additional class names
   */
  className?: string;
}

export function Button({
  children,
  variant = "default",
  type = "submit",
  size = "small",
  outline = false,
  className,
  ...other
}: ButtonProps): JSX.Element {
  return (
    <button
      className={classNames(
        "w-fit rounded-xl cursor-pointer hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed transition-all duration-200 ease-in-out grid place-content-center",
        {
          "text-white border border-blue-500 bg-blue-500 disabled:bg-blue-300":
            variant == "default" && !outline,
          "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50 disabled:border-blue-200":
            variant == "default" && outline,
          "bg-red-300 text-white disabled:bg-red-100 hover:bg-red-400 focus:bg-red-500":
            variant == "warning" && !outline,
          "bg-transparent border-2 disabled:bg-transparent disabled:border-red-100 border-red-500 text-red-400 opacity-60 hover:opacity-80  focus:opacity-100":
            variant == "warning" && outline,
          "border-none bg-transparent rounded-full hover:opacity-60":
            variant == "transparent",
          "py-1.5 px-4 text-sm": size == "small",
          "py-2 px-4 text-base": size == "medium",
          "py-2.5 px-4 text-3xl": size == "big",
        },
        className
      )}
      type={type}
      {...other}
    >
      {children}
    </button>
  );
}