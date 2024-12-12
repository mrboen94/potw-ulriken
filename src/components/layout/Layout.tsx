import { Logo } from '@/components/icons/Logo.tsx';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <header>
        <nav aria-label="Global" className="mx-auto w-full flex items-center h-12 p-6 lg:px-8 py-8 bg-yellow-300/90 text-foreground">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Ulriken Consulting</span>
              <Logo width="70%"/>
            </div>
        </nav>
      </header>

      <div className="mx-auto">
        {children}
      </div>
    </main>
  )
}