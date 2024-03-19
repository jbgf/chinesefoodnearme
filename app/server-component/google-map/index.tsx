import { GoogleMapsEmbed } from '@next/third-parties/google'
import { GOOGLE_MAP_API_KEY } from './const'

export default function GoogleMap() {
  return (
    <GoogleMapsEmbed
      apiKey={GOOGLE_MAP_API_KEY}
      height={200}
      width="100%"
      mode="place"
      q="Brooklyn+Bridge,New+York,NY"
    />
  )
}