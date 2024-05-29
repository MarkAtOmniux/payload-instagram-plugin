export interface PluginTypes {
  /**
   * Enable or disable plugin
   * @default false
   */
  enabled?: boolean
}

export type PostType = {
  id: string
  media_url: string
  permalink: string
  media_type: string
  caption: string
  children?: PostType[]
}

export interface NewCollectionTypes {
  title: string
}
