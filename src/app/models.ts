export interface EntityExtractions{
  annotations: Entity[]
}

export interface Image{
  thumbnail: string,
  full: string
}

export interface Entity{
  categories: string[],
  abstract: string,
  image: Image
}

export interface History{
  timestamp: any,
  method: string,
  url: string
}

export interface Similarity{
  timeStamp: string,
  time: number,
  lang: string,
  langconfidence: number,
  text1: string,
  url1:string,
  text2: string,
  url2:string,
  similarity: number
}

