import type { ButtonHTMLAttributes, CSSProperties, HTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

type MaterialProps = HTMLAttributes<HTMLDivElement> & { children: ReactNode; [key: string]: unknown };
type ToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  scale?: number;
};
type SliderProps = { value: number; onValueChange: (value: number) => void; label?: string; from?: string; scale?: number };
type MenuProps = { items: { label: string }[]; label: string; triggerLabel?: string; round?: boolean };

export function SoapBubbleMaterial({ children, className = '' }: MaterialProps) {
  return <div className={`soap-bubble-material ${className}`.trim()}>{children}</div>;
}

export function SoapBubbleButton({ children, className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`soap-bubble-button ${className}`.trim()} {...props}>{children}</button>;
}

export function SoapBubbleIconButton({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`soap-bubble-icon-button ${className}`.trim()} {...props} />;
}

export function SoapBubbleToggle({ checked, onCheckedChange, scale = 1, className = '', ...props }: ToggleProps) {
  return <button type="button" className={`soap-bubble-toggle ${checked ? 'is-checked' : ''} ${className}`.trim()} style={{ transform: `scale(${scale})` }} onClick={() => onCheckedChange(!checked)} aria-pressed={checked} {...props}><span /></button>;
}

export function SoapBubbleSlider({ value, onValueChange, label, from = '#0a84ff', scale = 1 }: SliderProps) {
  return <label className="soap-bubble-slider" style={{ '--slider-color': from, transform: `scale(${scale})` } as CSSProperties}>{label && <span>{label}</span>}<input type="range" min="0" max="100" value={value} onChange={(event) => onValueChange(Number(event.target.value))} /></label>;
}

export function SoapBubbleSearch(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="soap-bubble-search" type="search" {...props} />;
}

export function SoapBubbleMenu({ items, label, triggerLabel, round }: MenuProps) {
  return <details className={`soap-bubble-menu ${round ? 'is-round' : ''}`}><summary aria-label={triggerLabel}>{label}</summary><div>{items.map((item) => <button type="button" key={item.label}>{item.label}</button>)}</div></details>;
}
