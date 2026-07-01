declare module "lucide-react" {
  import type { ComponentType, SVGProps } from "react";

  export type LucideIcon = ComponentType<
    SVGProps<SVGSVGElement> & { size?: number | string }
  >;

  export const Mail: LucideIcon;
  export const Clock3: LucideIcon;
  export const MapPin: LucideIcon;
  export const Loader2: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const Palette: LucideIcon;
  export const MonitorSmartphone: LucideIcon;
  export const Code2: LucideIcon;
  export const Megaphone: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Flame: LucideIcon;
  export const Droplets: LucideIcon;
}
