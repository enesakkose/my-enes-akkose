import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Enes Akköse | Software Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: '#d4a853',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#08080a',
          fontWeight: 900,
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: 20, letterSpacing: '-0.02em' }}>E.A</div>
        <div style={{ fontSize: 48, fontWeight: 500, opacity: 0.8 }}>
          Enes Akköse | Software Developer
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
