'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/api-data', label: 'API Data' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-bounce-in"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-background/80 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity">
          ModernApp
        </Link>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg ${pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                } hover:text-primary transition-colors relative group overflow-hidden`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} className="animate-rotate-in" /> : <Menu size={24} className="animate-rotate-in" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-background shadow-lg animate-fade-in">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 px-4 text-lg ${pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                } hover:text-primary hover:bg-accent/10 transition-colors animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

