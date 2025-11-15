// app/ui/acme-logo.tsx

type AcmeLogoProps = {
  className?: string;
};

export default function AcmeLogo({ className = '' }: AcmeLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
        <span className="text-sm font-extrabold text-blue-600">AC</span>
      </div>
      <span className="text-lg font-semibold text-white">Acme</span>
    </div>
  );
}
