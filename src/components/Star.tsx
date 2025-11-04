interface StarProps {
  className?: string;
  delay?: number;
}

const Star = ({ className = "", delay = 0 }: StarProps) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <path
        d="M24 0L26.5 21.5L48 24L26.5 26.5L24 48L21.5 26.5L0 24L21.5 21.5L24 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Star;
