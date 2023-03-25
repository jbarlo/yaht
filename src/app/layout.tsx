export const metadata = {
  title: "YAHT",
  description: "",
};

// palette
// BF88BA (varying tones) - Interaction + bg
// 46237A - Strong
// D64933 - Danger
// 06D6A0 - Good
// FF9F1C - Super

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: "100vh", backgroundColor: "#E2CAE0" }}>
        {children}
      </body>
    </html>
  );
}
