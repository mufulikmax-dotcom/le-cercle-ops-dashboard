import { OpsShell } from "@/components/ops-shell";

export default function OpsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <OpsShell>{children}</OpsShell>;
}
