import { cva } from "class-variance-authority";

export default function InputBox({ className, size, ...props}) {
  const inputClass = inputVariants({ size });

  return (
    <div className="flex flex-row">
        <input
          className={`${inputClass} ${className}`}
          {...props}
        />
    </div>
  );
}

const inputVariants = cva('bg-light-yellow rounded-[20px] shadow-[inset_0px_4px_4px_#00000040] placeholder-[blue] text-s pl-4', {
  variants: {
    size: {
      s: 'w-[200px] h-[40px]',
      m: 'w-[300px] h-[40px]',
    }
  }
});