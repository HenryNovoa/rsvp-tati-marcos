import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

export function ActionButton({
  icon: Icon,
  label,
  onClick,
  className = "",
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#4A5D4B] text-white rounded-full hover:bg-[#8FA98F] transition-colors ${className}`}
    >
      <Icon className="absolute left-4 w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}
