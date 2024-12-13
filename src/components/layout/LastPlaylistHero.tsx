import { SpotifyData } from '@/data/data.ts';
import { SpotifyEmbed } from '@/components/SpotifyEmbed.tsx';
import { Badge } from '@/components/ui/badge.tsx';

interface LastPlaylistProps {
  spotifyData: SpotifyData;
}

export default function LastPlaylistHero({ spotifyData }: LastPlaylistProps) {
  return (
    <div className="bg-yellow-300 md:border-b-2 md:border-black relative -z-10">
      <div id="heroContent" className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 mx-auto">
        <div className="md:border-t md:border-white/5 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm/6 font-medium text-foreground">{spotifyData.submittedBy}</p>
          <p className="mt-2 flex items-baseline gap-x-2">
          <span className="text-4xl font-semibold tracking-tight text-foreground">
            {spotifyData.title ? spotifyData.title : "Ukens Spilleliste"}
          </span>
          </p>
          {spotifyData.theme && <Badge variant="outline"
                                       className="hidden md:block max-w-fit mt-2 md:border-black">{spotifyData.theme}</Badge>}
          {spotifyData?.description &&
              <p className="mt-4 text-sm/6 text-foreground/90 md:text-md lg:text-lg">{spotifyData.description}</p>}
        </div>
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <SpotifyEmbed link={spotifyData.spotifyLink}/>
        </div>
        <img src="/vinyl.png" className="hidden lg:block h-64 w-64 absolute -z-10 animate-spin right-0 inset-y-[20%] inset-x-[65%]"/>
      </div>
    </div>
  )
}