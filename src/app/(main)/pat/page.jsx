import Client from './page.client'

export const metadata = {
  title: 'Headpat Clicker',
  description: 'Headpat clicker für Headpawties!',
}

export const runtime = 'edge'

export default function Pat () {
  return (
    <>
      <Client/>
    </>
  )
}
