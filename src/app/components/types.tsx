export interface Config {
    id: number,
    title: string,
    is_complete: boolean
}
  
  export const defaultConfig:Config = {
    id: -1,
    title: "",
    is_complete: false
  }