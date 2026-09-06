// Minimal hand-rolled icon set — kept dependency-free so the project only
// needs React + Vite. Each icon accepts standard SVG props (size via
// `size`, color inherits currentColor).

const paths = {
  plane: (
    <path d="M2 12.5 22 4l-6.5 8.5L22 20l-8.5-3L10 22l-1-6-6-1 5-3.5L2 12.5Z" />
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="13" rx="3" />
      <path d="M5 12h14M8 16l-2 4M16 16l2 4M9 7h6" />
      <circle cx="8.5" cy="19" r="0" />
    </>
  ),
  bus: (
    <>
      <rect x="3" y="5" width="18" height="11" rx="2.5" />
      <path d="M3 11h18M7 16v2M17 16v2" />
      <circle cx="7.5" cy="19" r="1.4" />
      <circle cx="16.5" cy="19" r="1.4" />
    </>
  ),
  cab: (
    <>
      <path d="M4 16V11l2-4.5A2 2 0 0 1 7.85 5h8.3a2 2 0 0 1 1.85 1.5L20 11v5" />
      <path d="M4 16h16v2a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z" />
      <circle cx="7.5" cy="14" r="1.2" />
      <circle cx="16.5" cy="14" r="1.2" />
    </>
  ),
  ferry: (
    <>
      <path d="M4 15h16l-2 5H6l-2-5Z" />
      <path d="M7 15V6h6l3 4.5" />
      <path d="M2 20c1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  pin: (
    <>
      <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15 14.2c2.2.5 4 2.7 4 5.8" />
    </>
  ),
  tag: (
    <>
      <path d="M12.6 3.5H6a2.5 2.5 0 0 0-2.5 2.5v6.6c0 .5.2 1 .6 1.4l8.6 8.6a2 2 0 0 0 2.8 0l6.4-6.4a2 2 0 0 0 0-2.8L13.3 4.1a2 2 0 0 0-.7-.6Z" />
      <circle cx="8.6" cy="8.6" r="1.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  leaf: (
    <path d="M20 4C10 4 4 10 4 18c0 .5.02 1 .06 1.5C13 19 20 12 20 4Z" />
  ),
  star: (
    <path d="m12 3 2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L12 16.8 6.5 19.6l1.4-6.1-4.7-4.2 6.2-.6L12 3Z" />
  ),
  shield: (
    <path d="M12 3.5 19 6v6c0 5-3.2 8-7 9.5-3.8-1.5-7-4.5-7-9.5V6l7-2.5Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.3 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.3-3.8-8.5S9.5 5.8 12 3.5Z" />
    </>
  ),
  check: <path d="m5 13 4 4L19 7" />,
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-2 5-3 1.5 2-5 3-1.5Z" />
    </>
  ),
  ticket: (
    <>
      <path d="M4 8.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.7a2 2 0 0 0 0 3.6v1.7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.7a2 2 0 0 0 0-3.6Z" />
      <path d="M13 6.5v11" strokeDasharray="2 2" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="8.5" width="17" height="12" rx="1.5" />
      <path d="M3.5 12.5h17M12 8.5v12" />
      <path d="M12 8.5c-1-2.8-3-4-4.4-3-1.4 1 0 3.4 4.4 3ZM12 8.5c1-2.8 3-4 4.4-3 1.4 1 0 3.4-4.4 3Z" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.3 9.3a2.7 2.7 0 1 1 3.9 2.4c-.9.5-1.2 1-1.2 1.9" />
      <circle cx="12" cy="17" r="0.2" fill="currentColor" />
    </>
  ),
  menu: <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  edit: (
    <path d="M4 20h4l10.5-10.5a2 2 0 0 0 0-2.8l-1.2-1.2a2 2 0 0 0-2.8 0L4 16v4Z" />
  ),
  wallet: (
    <>
      <rect x="3.5" y="6.5" width="17" height="12" rx="2" />
      <path d="M14.5 12.5h3M3.5 10h17" />
    </>
  ),
  filter: <path d="M4 6h16M7 12h10M10.5 18h3" />,
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = "", style }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
