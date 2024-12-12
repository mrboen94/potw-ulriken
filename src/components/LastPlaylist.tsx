import { SpotifyData } from '@/data/data.ts';
import { SpotifyEmbed } from '@/components/SpotifyEmbed.tsx';
import { Badge } from '@/components/ui/badge.tsx';

interface LastPlaylistProps {
  spotifyData: SpotifyData;
}

export default function LastPlaylist({ spotifyData }: LastPlaylistProps) {
  return (
    <div className="bg-yellow-300/90">
      <div id="heroContent" className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 mx-auto">
        <div className="border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm/6 font-medium text-foreground">{spotifyData.submittedBy}</p>
          <p className="mt-2 flex items-baseline gap-x-2">
          <span className="text-4xl font-semibold tracking-tight text-foreground">
            {spotifyData.title ? spotifyData.title : "Ukens Spilleliste"}
          </span>
          </p>
          {spotifyData.theme && <Badge variant="outline" className="hidden md:block max-w-fit mt-2 border-black">{spotifyData.theme}</Badge>}
          {spotifyData?.description &&
              <p className="mt-4 text-sm/6 text-foreground/90 md:text-md lg:text-lg">{spotifyData.description}</p>}
        </div>
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <SpotifyEmbed link={spotifyData.spotifyLink}/>
        </div>
      </div>
    </div>
  )
}