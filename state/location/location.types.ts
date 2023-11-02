export interface ICity {
  id: string
  name: string
  lat: string
  lng: string
  created_at: string
  country: ICountry
}

interface ICountry {
  id: string
  created_at: string
  flag: string
  flags: {
    alt: string
    png: string
    svg: string
  }
  name: string
  code: string
  idd: {
    root: string
    suffixes?: string[] | null
  }
}
