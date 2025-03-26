import { cn } from "@/lib/utils";

interface DecorativeBackgroundProps {
  className?: string;
  variant?: "gradient" | "grid" | "dots" | "waves";
}

export function DecorativeBackground({
  className,
  variant = "gradient",
}: DecorativeBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden",
        {
          "bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5":
            variant === "gradient",
          "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]":
            variant === "grid",
          "bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px]":
            variant === "dots",
          "bg-[url('/waves.svg')] bg-repeat-x bg-bottom opacity-10":
            variant === "waves",
        },
        className
      )}
    />
  );
} 