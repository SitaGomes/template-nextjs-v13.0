import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <title></title>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
