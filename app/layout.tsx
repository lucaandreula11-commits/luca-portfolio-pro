import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className="bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
