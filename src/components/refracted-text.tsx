type RefractedTextProps = {
  text: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: number;
  [key: string]: unknown;
};

export function RefractedText({ text, fontSize = '400px', fontFamily, fontWeight = 900 }: RefractedTextProps) {
  return (
    <div
      className="refracted-text"
      style={{ fontSize, fontFamily, fontWeight }}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}
