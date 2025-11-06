// Simple inline SVG icons so we don't need any external packages.
export function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z"/>
      <path strokeWidth="1.5" d="M3 12h18M12 3c2.5 2.7 3.75 5.7 3.75 9S14.5 18.3 12 21M12 3C9.5 5.7 8.25 8.7 8.25 12S9.5 18.3 12 21"/>
    </svg>
  );
}

export function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z"/>
    </svg>
  );
}

export function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M7 3h6l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/>
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M13 3v6h6"/>
    </svg>
  );
}

export function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M16 16a4 4 0 1 1 8 0v1a2 2 0 0 1-2 2h-4"/>
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        d="M2 17a6 6 0 1 1 12 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2Z"/>
      <circle cx="8" cy="9" r="3" strokeWidth="1.5"/>
      <circle cx="18" cy="10" r="2.5" strokeWidth="1.5"/>
    </svg>
  );
}
