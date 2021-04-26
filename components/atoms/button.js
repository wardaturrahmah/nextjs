export default function button({ value, background, color, padding, border, radius, click }) {
  return (
    <button
      style={{
        background: background,
        color: color,
        padding: padding,
        border: border,
        borderRadius:radius,
        onClick:click
      }}
    >
      {value}
    </button>
  );
}