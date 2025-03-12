export function PokeBall({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
    >
      <circle cx="50" cy="50" r="50" fill="#f2f2f2" />
      <path d="M50,0A50,50,0,0,0,0,50H100A50,50,0,0,0,50,0Z" fill="#ff1a1a" />
      <circle
        cx="50"
        cy="50"
        r="15"
        fill="#f2f2f2"
        stroke="#333"
        strokeWidth="2"
      />
      <circle cx="50" cy="50" r="10" fill="#f2f2f2" />
    </svg>
  );
}
