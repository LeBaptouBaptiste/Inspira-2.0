import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-blue-600 hover:bg-green-600'>
      {children}
      </body>
    </html>
  )
}