import { Inter as FontSans } from "next/font/google"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import {dark} from '@clerk/themes';

import { cn } from "@/lib/utils"
import './globals.css'
import { Metadata } from "next"
import Provider from "./Provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Xilop',
  description: 'hello from nextjs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider 
      appearance={{
        baseTheme: dark,
        variables: { 
          colorPrimary: "#3371ff",
          fontSize: '16px'
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            {children}
          </Provider>          
        </body>
      </html>
    </ClerkProvider>
  )
}
