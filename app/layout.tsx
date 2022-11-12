import Link from 'next/link'
import { PropsWithChildren } from 'react'
import '../styles/globals.css'

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <title>GitHub Business Card</title>
        <meta name="viewport" content="width=device-width" />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          ></script>
        )}
      </head>
      <body>
        <header className="bg-slate-800 text-white p-2 text-lg">
          <h1>
            <Link href="/">GitHub Business Card</Link>
          </h1>
        </header>
        <main className="mb-16">{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
