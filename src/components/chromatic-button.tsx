import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ChromaticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  [key: string]: unknown;
};

export function ChromaticButton({ children, className = '', ...props }: ChromaticButtonProps) {
  return <button className={`chromatic-button ${className}`.trim()} {...props}>{children}</button>;
}
