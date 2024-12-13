export interface SpotifyData {
  submittedBy: Users;
  spotifyLink: string;
  date: Date;
  description?: string;
  theme?: string;
  title?: string;
}

enum Users {
    "Knut-Erland B." = "Knut-Erland B.",
    "Magne A." = "Magne A.",
    "Hans-Martin Z." = "Hans-Martin Z.",
    "Mathias B." = "Mathias B.",
    "Fredrik Eimhjellen K." = "Fredrik Eimhjellen K.",
    "Petter L." = "Petter L.",
    "Jan Peder A." = "Jan Peder A.",
    "Even Berge S." = "Even Berge S.",
    "Olav K." = "Olav K.",
    "Endre M. L." = "Endre M. L.",
    "Carl August G." = "Carl August G.",
    "Thomas B." = "Thomas B.",
    "Marthe Charlotte C." = "Marthe Charlotte C.",
    "Bjørn Erik T." = "Bjørn Erik T.",
    "Yvonne H." = "Yvonne H.",
    "Terje E." = "Terje E.",
    "Ole Martin M." = "Ole Martin M.",
    "Robert H." = "Robert H.",
    "Per H." = "Per H.",
}

export const data: SpotifyData[] = [
  {
    submittedBy: Users["Per H."],
    spotifyLink: "https://open.spotify.com/playlist/7r8RtI1tmpXoJYlPjWOuca?si=nj1GkeHKR62i02qaaTFsfw&pi=e-QZvRZAKaSw2M",
    date: new Date("2024-12-16"),
    description: "Her er noe gammelt rask fra Bergen som jeg har vage minner fra. Da havnet man gjerne på steder hvor øllet var billig og lokalene var … enda billigere. Hulen, Technicken og senere kvarteret. Da digget jeg Bergensk musikk. Har spedd på med noe nyere fra Hjerteslag som holdt en konsert på Verftet for et par år siden som var helt oppe i toppen av mine konsert opplevelser.",
    theme: "Bergensk musikk",
    title: "Gammelt rask fra Bergen"
  },
  {
    submittedBy: Users['Knut-Erland B.'],
    spotifyLink: "https://open.spotify.com/playlist/7mZwBjXMatDGcqFHJO7tjU?si=CrxrST39TlaFL6d9bpqteg",
    date: new Date("2024-12-11"),
    description: "På denne tiden av året er det julemusikk og gode minner i alle kanaler. Jeg har gått for det siste; et utvalg av konsertminner fra de siste to tiår. Vi starter høyt og sterkt (og en smule sært) med Sufjan Stevens, som fylte Greighallen i 2009. Om dette blir for smalt for deg, er det lov å hoppe videre til spor 6. " +
      "Til sist kommer de nyeste låtene fra TØFL og No. 4, som spilte konsert i Villahagen nå i august.\n" +
      "Jeg har latt meg inspirere litt av Magne og laget en mini-quiz: Én av sangene er lagt inn på kødd. En annen har jeg hørt (og sett) fremført som en duett mellom artistnavn og en fiolin. Hvilken sang og hvilken artist?",
    theme: "Konsertminner",
    title: "UC-PoW: Konsertøyeblikk",
  },
  {
    submittedBy: Users["Magne A."],
    spotifyLink: "https://open.spotify.com/playlist/2yGxj1LwGtk4mor0zOa9lR?si=338d39f7344a4aa5",
    date: new Date("2024-11-25T00:00:00.000Z"),
    description: "Da var det visst min tur.  Har prøvd å ta med musikk fra mange sjangere fra Tyrkisk edm til 70talls rock, jazz, Americana og annet som ikke burde provosere noen.  Til slutt er det to klassiske stykker, siden det var noen som hadde litt problemer med å komme i gang med klassisk.  Min personlige favoritt her er Linda Ronstadt sin låt Adios, som er produsert av Brian Wilson fra Beach Boys, der han korer 15 stemt med seg selv.  Det er lagt inn to låter som spøk, finner du disse?",
  },
  {
    submittedBy: Users["Hans-Martin Z."],
    spotifyLink: "https://open.spotify.com/playlist/19jKvTjvFv3KHgFMozE8dC?si=lfCGtwqPQSmwyK5Z67mWDQ&pi=e-2VFNcfd3SUOQ",
    date: new Date("2024-11-15T00:00:00.000Z")
  },
  {
    submittedBy: Users["Mathias B."],
    spotifyLink: "https://open.spotify.com/playlist/6UNx2pJzM17hI7iQmKRDv9?si=giRa81EiTvm3oUkE5H30kA&pi=e-8o50WYf7Qdme",
    date: new Date("2024-11-01T00:00:00.000Z"),
    theme: "Konsertminner"
  },
  {
    submittedBy: Users["Fredrik Eimhjellen K."],
    spotifyLink: "https://open.spotify.com/playlist/5nGcbicAy0G8SMxRBeygz3?si=cc9ce08e198d4064",
    date: new Date("2024-10-15T00:00:00.000Z"),
    description: "Har samlet sammen 9 norske band som oppsummerer min musikksmak veldig godt (en av sangene var bryllupssangen vår). Sortert etter økende trøkk, så hør så lenge du føler for. ",
    theme: "Norske band"
  },
  {
    submittedBy: Users["Petter L."],
    spotifyLink: "https://open.spotify.com/playlist/1uedl5Zzrr8lo25U14V0Vu?si=deef3252049c4fd0",
    date: new Date("2024-09-10T00:00:00.000Z"),
    description: "Har samlet en mix av artister som eg har hørt en del på, øker intensiteten etter hvert som man går nedover listen og prøvde å begrense antallet",
    theme: "Favorittartister"
  },
  {
    submittedBy: Users["Jan Peder A."],
    spotifyLink: "https://open.spotify.com/playlist/2Rye7vvRgmo1pxEkxzJTfv?si=Hjswxc_FRHWqsXNgIfxOjw",
    date: new Date("2024-09-02T00:00:00.000Z"),
    theme: "FAvorittartister"
  },
  {
    submittedBy: Users["Even Berge S."],
    spotifyLink: "https://open.spotify.com/playlist/4Ig3Q8HtdqBMRm7hEM60DC?si=9dd69d6e7d1e4f02",
    date: new Date("2024-09-02T00:00:00.000Z"),
    theme: "Favorittartister"
  },
  {
    submittedBy: Users["Olav K."],
    spotifyLink: "https://open.spotify.com/playlist/36qEwNXBW6w94G6BUYsRBa?si=91228c89baf142ad",
    date: new Date("2024-08-26T00:00:00.000Z"),
    description: "Her er min \"spilleliste\" - Jeg er ganske alt-etende når det gjelder musikk så dette er et sammensurium av forskjellige greier så lykke til :slightly_smiling_face:\n" +
      "The Scratch kom med fordi jeg så dem på Bergenfest i år - for meg var det et uventet høydepunkt - men de er kanskje best live",
  },
  {
    submittedBy: Users["Endre M. L."],
    spotifyLink: "https://open.spotify.com/playlist/1I4Z4bW1myCS8OrGGYGJ68?si=603dd1968a174430",
    date: new Date("2024-08-16T00:00:00.000Z"),
    description: "Då var det vist min tur til å eksponere meg :slightly_smiling_face: Har eit litt stort spenn i musikksmaken min og den nok meir «mainstream» enn det som har vore presentert så langt. Generelt har eg to kriteria, enten skal musikken vera elektronika (og då gjerne dansbart) eller så må det vera gitar. Dette går jo ikkje ann å kombinere i ei speleliste så eg tilbyr to lister, med eit utval av mine favorittar frå begge sjangrane. God blanding av kjente og litt meir ukjente artistar, frå fleire tidsepokar (sjølv om i gitarverden så endar slike som meg jo oftast opp til slutt på det fantastiske 80-tallet).\n" +
      "Gitt min alder så er konseptet for listene at dei akkurat kan brennast på ein cd og tas med i diskman'en din :rolling_on_the_floor_laughing: Og ja, begge listene har \"hidden tracks\" / skjult sistespor, som seg hør og bør ein cd.\n" +
      "Ta det for det det er, og god dance/rocka helg!",
    theme: "Dance/Rock CD2"
  },
  {
    submittedBy: Users["Endre M. L."],
    spotifyLink: "https://open.spotify.com/playlist/241DQZVO5LF8o6mGsowhDT?si=708cdded1af54887",
    date: new Date("2024-08-16T00:00:00.000Z"),
    description: "Då var det vist min tur til å eksponere meg :slightly_smiling_face: Har eit litt stort spenn i musikksmaken min og den nok meir «mainstream» enn det som har vore presentert så langt. Generelt har eg to kriteria, enten skal musikken vera elektronika (og då gjerne dansbart) eller så må det vera gitar. Dette går jo ikkje ann å kombinere i ei speleliste så eg tilbyr to lister, med eit utval av mine favorittar frå begge sjangrane. God blanding av kjente og litt meir ukjente artistar, frå fleire tidsepokar (sjølv om i gitarverden så endar slike som meg jo oftast opp til slutt på det fantastiske 80-tallet).\n" +
      "Gitt min alder så er konseptet for listene at dei akkurat kan brennast på ein cd og tas med i diskman'en din :rolling_on_the_floor_laughing: Og ja, begge listene har \"hidden tracks\" / skjult sistespor, som seg hør og bør ein cd.\n" +
      "Ta det for det det er, og god dance/rocka helg!",
    theme: "Dance/Rock CD1"
  },
  {
    submittedBy: Users["Carl August G."],
    spotifyLink: "https://open.spotify.com/playlist/2rAYZgtEwkFVSINRpTJJnd?si=6c19fbe443084c98",
    date: new Date("2024-08-07T00:00:00.000Z"),
    description: "Har gjort som andre tidligere og forsøkt å sette sammen noen favoritter som de fleste sannsynligvis ikke har hørt før, fra forskjellige sjangere.",
    theme: "Favorittartister"
  },
  {
    submittedBy: Users["Thomas B."],
    spotifyLink: "https://open.spotify.com/playlist/0JZjC1sjyin07bqazX1t07?si=8D5SDvGXSZGH5te8X4A0cA&pi=e-n64wD6RmTKyR",
    date: new Date("2024-08-01T00:00:00.000Z"),
    description: "Da har eg fått laget sammendraget av roadtrip listen som vi laget i sommer. Hørte en del på radio i «min» bil å la ca til en sang per land med mye bruk av shazam på det vi synes var bra eller passende",
    theme: "Roadtrip"
  },
  {
    submittedBy: Users["Marthe Charlotte C."],
    spotifyLink: "https://open.spotify.com/playlist/0JZjC1sjyin07bqazX1t07?si=8D5SDvGXSZGH5te8X4A0cA&pi=e-n64wD6RmTKyR",
    date: new Date("2024-07-02T00:00:00.000Z")
  },
  {
    submittedBy: Users["Bjørn Erik T."],
    spotifyLink: "https://open.spotify.com/playlist/1XVtbv2mrnkejwjG08ASmg?si=68d70c967bed4e93",
    date: new Date("2024-07-02T00:00:00.000Z"),
    description: "Det er jo mesterskapssommer (EM, OL, Tour de France, Formel 1), så jeg lagde meg en liten liste med sanger.",
    theme: "Mesterskapssommer"
  },
  {
    submittedBy: Users["Yvonne H."],
    spotifyLink: "https://open.spotify.com/playlist/1aZxLxAA2YZmOBLfQNzVeG?si=pg6SfeeUTLCzu2yiypn_cA&pi=e-KBnjjAMvTeqf&nd=1&dlsi=ea70d44ad5e94615",
    date: new Date("2024-06-17T00:00:00.000Z"),
    description: "Stiller med Afrika-musikk som jeg har tatt med meg Tanzania, tror ikke noen her har disse sangene fra før.\n" +
      "Litt nedsig uten dansingen - som ofte er det beste for å få med stemningen.",
    theme: "Afrika"
  },
  {
    submittedBy: Users["Knut-Erland B."],
    spotifyLink: "https://open.spotify.com/playlist/3gAJ25V4WG1TqHHOGF6hUo?si=46b9677c5cd54f54",
    date: new Date("2024-05-31T00:00:00.000Z")
  },
  {
    submittedBy: Users["Terje E."],
    spotifyLink: "https://open.spotify.com/playlist/7oAt9h5bTIQkKwrr4V6awQ?si=f2d335ed831f4199",
    date: new Date("2024-05-28T00:00:00.000Z")
  },
  {
    submittedBy: Users["Ole Martin M."],
    spotifyLink: "https://open.spotify.com/playlist/7z1tsEZbKhdizYokX7OcOG",
    date: new Date("2024-05-13T00:00:00.000Z")
  },
  {
    submittedBy: Users["Mathias B."],
    spotifyLink: "https://open.spotify.com/playlist/2TERztrxLwfSBeKtgkFOkt?si=5cM0N68dRGKroifo1l3ZyQ&pi=e-C11SKP2VQEah",
    date: new Date("2024-05-07T00:00:00.000Z")
  },
  {
    submittedBy: Users["Robert H."],
    spotifyLink: "https://open.spotify.com/playlist/6YpTzrhJTmFU6Rod8jF9cN?si=128099240fd74348",
    date: new Date("2024-04-29T00:00:00.000Z")
  }
];