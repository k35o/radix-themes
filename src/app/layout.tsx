import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '@/theme-config.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme accentColor="lime" grayColor="olive" appearance="dark" panelBackground="solid">
          {children}
        </Theme>
      </body>
    </html>
  )
}
