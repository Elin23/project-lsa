import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

function toPascalCase(value: string) {
  return value
    .trim()
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1),
    )
    .join("");
}

export function getLucideIcon(
  iconName?: string,
): LucideIcon {
  if (!iconName) {
    return LucideIcons.Circle;
  }

  const normalizedName = toPascalCase(iconName);

  const icon =
    LucideIcons[
      normalizedName as keyof typeof LucideIcons
    ];

  if (icon) {
    return icon as LucideIcon;
  }

  return LucideIcons.Circle;
}