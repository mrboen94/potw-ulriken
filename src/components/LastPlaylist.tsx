import { SpotifyData } from '@/data/data.ts';
import { SpotifyEmbed } from '@/components/SpotifyEmbed.tsx';
import { Badge } from '@/components/ui/badge.tsx';

interface LastPlaylistProps {
    spotifyData: SpotifyData;
}

export default function LastPlaylist({spotifyData}: LastPlaylistProps) {
  return (
    <div className="grid grid-cols-1 bg-zinc-700/10 sm:grid-cols-2 p-2">
      <div
        className={'border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8'}
      >
        <p className="text-sm/6 font-medium text-zinc-800">{spotifyData.submittedBy}</p>
        <p className="mt-2 flex items-baseline gap-x-2">
          <span className="text-4xl font-semibold tracking-tight text-zinc-800">{spotifyData.title ? spotifyData.title : "Ukens Spilleliste"}</span>
        </p>
        {spotifyData.theme && <Badge className="hidden md:inline">{spotifyData.theme}</Badge>}
        {spotifyData?.description && <p className="mt-2 text-sm/6 text-secondary-foreground">{spotifyData.description}</p>}
      </div>
      <SpotifyEmbed link={spotifyData.spotifyLink} />
    </div>
  )
}