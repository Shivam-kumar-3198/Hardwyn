export default function Logo() {
  return (
    <a href="#top" aria-label="Hardwyn India — home" className="flex items-center gap-3">
      <svg
        width="28"
        height="28"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="text-crimson"
      >
        <path
          d="M18 16v32M46 16v32M18 32h28"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="square"
          fill="none"
        />
      </svg>
      <span className="font-display text-base font-extrabold tracking-tight text-bone">
        HARDWYN<span className="ml-1 font-normal text-specs">/ India</span>
      </span>
    </a>
  )
}
