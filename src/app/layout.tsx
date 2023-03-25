export const metadata = {
  title: "YAHT",
  description: "",
};

// palette - https://coolors.co/d64933-46237a-06d6a0-a960a3-ff9f1c
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
