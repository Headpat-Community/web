import Client from './page.client'

export const metadata = {
  title: 'Registration',
  description: 'Hier kannst du dich registrieren für die Headpat Community',
  url: 'https://headpat.de/register',
  keywords: 'register, account, sign up, registrieren',
}

export const runtime = 'edge'

export default function RegisterPage () {
  return (
    <>
      <Client/>
    </>
  )
}
