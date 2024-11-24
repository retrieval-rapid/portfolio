import classNames from "classnames";

export interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body-lr"
    | "body-lm"
    | "body-ls"
    | "body-lb"
    | "body-mr"
    | "body-mm"
    | "body-ms"
    | "body-mb"
    | "body-sr"
    | "body-sm"
    | "body-esr"
    | "body-esm";
}

export function Text({
  children,
  className,
  variant = "body-lr",
  ...props
}: TextProps) {
  return (
    <p
      className={classNames(
        {
          "text-6xl leading-[72px] font-bold": variant == "h1",
          "text-[48px] leading-[58px] font-bold": variant == "h2",
          "text-[40px] leading-[48px] font-bold": variant == "h3",
          "text-3xl leading-[38px] font-bold": variant == "h4",
          "text-[28px] leading-[40px] font-semibold": variant == "h5",
          "text-[24px] leading-[30px] font-semibold": variant == "h6",
          "text-lg leading-[28px] font-normal": variant == "body-lr",
          "text-lg leading-[28px] font-medium": variant == "body-lm",
          "text-lg leading-[28px] font-semibold": variant == "body-ls",
          "text-lg leading-[28px] font-bold": variant == "body-lb",
          "text-base font-normal": variant == "body-mr",
          "text-base font-medium": variant == "body-mm",
          "text-base font-semibold": variant == "body-ms",
          "text-base font-bold": variant == "body-mb",
          "text-sm leading-[22px] font-normal": variant == "body-sr",
          "text-sm leading-[22px] font-medium": variant == "body-sm",
          "text-xs leading-[20px] font-normal": variant == "body-esr",
          "text-xs leading-[20px] font-medium": variant == "body-esm",
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}