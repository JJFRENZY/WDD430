import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/ui/utils';

const buttonStyles = cva(
  'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600',
        ghost:
          'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:outline-gray-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonStyles({ variant }), className)} {...props} />
  );
}
