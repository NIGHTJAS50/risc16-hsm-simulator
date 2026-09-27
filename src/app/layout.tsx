import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RISC-16 Secure Execution Lab",
  description: "A visual 16-bit processor and HSM simulator."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
