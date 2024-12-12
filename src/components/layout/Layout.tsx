import { data, SpotifyData } from '@/data/data.ts';
import LastPlaylist from '@/components/LastPlaylist.tsx';
import PlaylistTable from '@/components/PlaylistTable.tsx';
import { Logo } from '@/components/icons/Logo.tsx';

const secondaryNavigation = [


  { name: 'Spillelister', href: '#', current: true },
  { name: 'Statistikk', href: '#', current: false },
]

const spotifyData: SpotifyData[] = data;

export default function Layout() {
  return (
    <main>
      <header>
        <nav aria-label="Global" className="mx-auto w-full max-w-7xl flex items-center justify-between p-6 lg:px-8 bg-background text-foreground">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ulriken Consulting</span>
              <Logo />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {secondaryNavigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold">
                {item.name}
              </a>
            ))}
          </div>
        </nav>

      </header>
      <div className="mx-auto">

      <LastPlaylist spotifyData={spotifyData[0]}/>
      <PlaylistTable spotifyData={spotifyData.slice(1)}/>
      </div>
    </main>
  )
}