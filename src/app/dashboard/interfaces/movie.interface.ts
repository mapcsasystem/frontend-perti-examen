export interface IMovies {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number | null;
  type: IMoviesResposeType;
  airdate: Date;
  airtime: string;
  airstamp: Date;
  runtime: number | null;
  rating: Rating;
  image: Image | null;
  summary: null | string;
  _links: IMoviesResposeLinks;
  _embedded: Embedded;
}

export interface Embedded {
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: ShowType;
  language: Language | null;
  genres: Genre[];
  status: Status;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: Date;
  ended: Date | null;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: Network | null;
  dvdCountry: Country | null;
  externals: Externals;
  image: Image | null;
  summary: null | string;
  updated: number;
  _links: ShowLinks;
}

export interface ShowLinks {
  self: Self;
  previousepisode?: Self;
  nextepisode?: Self;
}

export interface Self {
  href: string;
}

export interface Country {
  name: Name;
  code: Code;
  timezone: Timezone;
}

export enum Code {
  Am = 'AM',
  Au = 'AU',
  Be = 'BE',
  Br = 'BR',
  CA = 'CA',
  CN = 'CN',
  De = 'DE',
  Dk = 'DK',
  Es = 'ES',
  Fi = 'FI',
  Fr = 'FR',
  GB = 'GB',
  Hk = 'HK',
  Hr = 'HR',
  Hu = 'HU',
  IL = 'IL',
  In = 'IN',
  It = 'IT',
  Jp = 'JP',
  Kr = 'KR',
  Nl = 'NL',
  No = 'NO',
  Nz = 'NZ',
  Ph = 'PH',
  Pl = 'PL',
  Pt = 'PT',
  Ru = 'RU',
  SE = 'SE',
  Th = 'TH',
  Tr = 'TR',
  Tw = 'TW',
  Us = 'US',
}

export enum Name {
  Armenia = 'Armenia',
  Australia = 'Australia',
  Belgium = 'Belgium',
  Brazil = 'Brazil',
  Canada = 'Canada',
  China = 'China',
  Croatia = 'Croatia',
  Denmark = 'Denmark',
  Finland = 'Finland',
  France = 'France',
  Germany = 'Germany',
  HongKong = 'Hong Kong',
  Hungary = 'Hungary',
  India = 'India',
  Israel = 'Israel',
  Italy = 'Italy',
  Japan = 'Japan',
  KoreaRepublicOf = 'Korea, Republic of',
  Netherlands = 'Netherlands',
  NewZealand = 'New Zealand',
  Norway = 'Norway',
  Philippines = 'Philippines',
  Poland = 'Poland',
  Portugal = 'Portugal',
  RussianFederation = 'Russian Federation',
  Spain = 'Spain',
  Sweden = 'Sweden',
  TaiwanProvinceOfChina = 'Taiwan, Province of China',
  Thailand = 'Thailand',
  Turkey = 'Turkey',
  UnitedKingdom = 'United Kingdom',
  UnitedStates = 'United States',
}

export enum Timezone {
  AmericaHalifax = 'America/Halifax',
  AmericaNewYork = 'America/New_York',
  AmericaNoronha = 'America/Noronha',
  AsiaBangkok = 'Asia/Bangkok',
  AsiaHongKong = 'Asia/Hong_Kong',
  AsiaJerusalem = 'Asia/Jerusalem',
  AsiaKamchatka = 'Asia/Kamchatka',
  AsiaKolkata = 'Asia/Kolkata',
  AsiaManila = 'Asia/Manila',
  AsiaSeoul = 'Asia/Seoul',
  AsiaShanghai = 'Asia/Shanghai',
  AsiaTaipei = 'Asia/Taipei',
  AsiaTokyo = 'Asia/Tokyo',
  AsiaYerevan = 'Asia/Yerevan',
  AustraliaSydney = 'Australia/Sydney',
  EuropeAmsterdam = 'Europe/Amsterdam',
  EuropeBrussels = 'Europe/Brussels',
  EuropeBudapest = 'Europe/Budapest',
  EuropeBusingen = 'Europe/Busingen',
  EuropeCopenhagen = 'Europe/Copenhagen',
  EuropeHelsinki = 'Europe/Helsinki',
  EuropeIstanbul = 'Europe/Istanbul',
  EuropeLisbon = 'Europe/Lisbon',
  EuropeLondon = 'Europe/London',
  EuropeMadrid = 'Europe/Madrid',
  EuropeOslo = 'Europe/Oslo',
  EuropeParis = 'Europe/Paris',
  EuropeRome = 'Europe/Rome',
  EuropeStockholm = 'Europe/Stockholm',
  EuropeWarsaw = 'Europe/Warsaw',
  EuropeZagreb = 'Europe/Zagreb',
  PacificAuckland = 'Pacific/Auckland',
}

export interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: null | string;
}

export enum Genre {
  Action = 'Action',
  Adult = 'Adult',
  Adventure = 'Adventure',
  Anime = 'Anime',
  Children = 'Children',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Diy = 'DIY',
  Drama = 'Drama',
  Espionage = 'Espionage',
  Family = 'Family',
  Fantasy = 'Fantasy',
  Food = 'Food',
  History = 'History',
  Horror = 'Horror',
  Legal = 'Legal',
  Medical = 'Medical',
  Music = 'Music',
  Mystery = 'Mystery',
  Nature = 'Nature',
  Romance = 'Romance',
  ScienceFiction = 'Science-Fiction',
  Sports = 'Sports',
  Supernatural = 'Supernatural',
  Thriller = 'Thriller',
  Travel = 'Travel',
  War = 'War',
  Western = 'Western',
}

export interface Image {
  medium: string;
  original: string;
}

export enum Language {
  Armenian = 'Armenian',
  Chinese = 'Chinese',
  Croatian = 'Croatian',
  Danish = 'Danish',
  Dutch = 'Dutch',
  English = 'English',
  Finnish = 'Finnish',
  French = 'French',
  German = 'German',
  Hebrew = 'Hebrew',
  Hindi = 'Hindi',
  Hungarian = 'Hungarian',
  Italian = 'Italian',
  Japanese = 'Japanese',
  Korean = 'Korean',
  Norwegian = 'Norwegian',
  Polish = 'Polish',
  Portuguese = 'Portuguese',
  Russian = 'Russian',
  ScottishGaelic = 'Scottish Gaelic',
  Spanish = 'Spanish',
  Swedish = 'Swedish',
  Tagalog = 'Tagalog',
  Thai = 'Thai',
  Turkish = 'Turkish',
}

export interface Network {
  id: number;
  name: string;
  country: Country | null;
  officialSite: null | string;
}

export interface Rating {
  average: number | null;
}

export interface Schedule {
  time: string;
  days: Day[];
}

export enum Day {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
}

export enum Status {
  Ended = 'Ended',
  InDevelopment = 'In Development',
  Running = 'Running',
  ToBeDetermined = 'To Be Determined',
}

export enum ShowType {
  Animation = 'Animation',
  AwardShow = 'Award Show',
  Documentary = 'Documentary',
  GameShow = 'Game Show',
  News = 'News',
  PanelShow = 'Panel Show',
  Reality = 'Reality',
  Scripted = 'Scripted',
  Sports = 'Sports',
  TalkShow = 'Talk Show',
  Variety = 'Variety',
}

export interface IMoviesResposeLinks {
  self: Self;
  show: Self;
}

export enum IMoviesResposeType {
  InsignificantSpecial = 'insignificant_special',
  Regular = 'regular',
  SignificantSpecial = 'significant_special',
}
