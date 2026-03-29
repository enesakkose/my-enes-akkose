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
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #d4a853 0%, #b8922e 50%, #d4a853 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#08080a',
          fontWeight: 900,
          textAlign: 'center',
          padding: 80,
        }}
      >
        <div style={{ fontSize: 100, fontWeight: 900, marginBottom: 10, letterSpacing: '-0.02em' }}>
          Enes Akköse
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            opacity: 0.9,
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            marginTop: 20,
          }}
        >
          Software Developer
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
