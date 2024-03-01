import { cva } from "class-variance-authority";

export default function InputBox({ className, size, children, ...props}) {
  const inputClass = inputVariants({ size });

  return (
    <input
      className={`${inputClass} ${className}`}
      {...props}
    >
      {children}
    </input>
  );
}

const inputVariants = cva('bg-light-yellow rounded-[20px] shadow-inner placeholder-[blue] text-s pl-4', {
  variants: {
    size: {
      s: 'w-[200px] h-[40px]',
      m: 'w-[300px] h-[40px]',
    }
  }
});