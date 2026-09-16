import {
  Activity,
  Bolt,
  Boxes,
  CheckCircle,
  CircleDot,
  Construction,
  Cpu,
  Gauge,
  Hammer,
  HardHat,
  Layers,
  Network,
  Pipette,
  Ruler,
  Settings,
  ShieldCheck,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Bolt,
  Boxes,
  CheckCircle,
  CircleDot,
  Construction,
  Cpu,
  Gauge,
  Hammer,
  HardHat,
  Layers,
  Network,
  Pipette,
  Ruler,
  Settings,
  ShieldCheck,
  Target,
  Wrench,
};

const backendIconMap: Record<string, LucideIcon> = {
  "Construction & Execution": Construction,
  "Commissioning & Handover": CheckCircle,
};

export const getLucideIcon = (
  iconName?: string,
): LucideIcon => {
  if (!iconName) {
    return Settings;
  }

  const normalizedIconName =
    iconName.trim();

  return (
    iconMap[normalizedIconName] ??
    backendIconMap[normalizedIconName] ??
    Settings
  );
};