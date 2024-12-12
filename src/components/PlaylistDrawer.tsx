import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription
} from '@/components/ui/drawer.tsx';
import { Button } from '@/components/ui/button.tsx';
import { SpotifyData } from '@/data/data.ts';
import { SpotifyEmbed } from '@/components/SpotifyEmbed.tsx';
interface PlaylistDrawerProps {
    spotifyData: SpotifyData;
}

export default function PlaylistDrawer({spotifyData}: PlaylistDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Vis spilleliste</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg mb-4 h-full">
          <DrawerHeader>
            <DrawerTitle>
              {spotifyData.submittedBy}
            </DrawerTitle>
            <DrawerDescription>
                {spotifyData.date.toLocaleDateString()}
            </DrawerDescription>
          </DrawerHeader>
            <SpotifyEmbed link={spotifyData.spotifyLink} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}