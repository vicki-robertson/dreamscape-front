import { cva } from "class-variance-authority";

export default function InputBox({ size, className, ...props}) {
  const inputClass = inputVariants({ size });

  return (
      <input
        className={`${inputClass} ${className}`}
        {...props}
      />
  );
}

const inputVariants = cva('bg-light-yellow rounded-[20px] shadow-[inset_0px_4px_4px_#00000040] placeholder-[blue] text-s pl-4 focus:outline-none focus:border-[blue] focus:ring-1 focus:ring-[blue] invalid:border-[red] invalid:text-[red] focus:invalid:border-[red] focus:invalid:ring-[red]', {
  variants: {
    size: {
      s: 'w-[200px] h-[40px]',
      m: 'w-[300px] h-[40px]',
      xl: 'w-[300px] h-[370px]',
    }
  }
});