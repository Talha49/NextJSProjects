
import './ui/globals.css'


export const metadata = {
  title: 'Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
