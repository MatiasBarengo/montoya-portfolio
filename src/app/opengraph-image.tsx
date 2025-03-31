import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Montoya - Creative Portfolio';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#0c0c0c',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 128, fontWeight: 'bold', letterSpacing: '-0.05em' }}>MONTOYA</div>
        <div style={{ fontSize: 32, color: '#7c7c7c', marginTop: 32, letterSpacing: '0.1em' }}>CREATIVE PORTFOLIO</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
