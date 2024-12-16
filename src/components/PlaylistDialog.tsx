import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogTitle
} from '@/components/ui/dialog.tsx';
import { SpotifyData } from '@/data/data.ts';
import { SpotifyEmbed } from '@/components/SpotifyEmbed.tsx';
import { Button } from '@/components/ui/button.tsx';

interface PlaylistDialogProps {
  spotifyData: SpotifyData;
}

export default function PlaylistDialog({spotifyData}: PlaylistDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Vis spilleliste</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{spotifyData.title ?? spotifyData.submittedBy.toString()}</DialogTitle>
          <DialogDescription>
            {spotifyData.description}
          </DialogDescription>
          <SpotifyEmbed link={spotifyData.spotifyLink} />
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Lukk</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
