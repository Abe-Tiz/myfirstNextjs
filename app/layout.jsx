import {Poppins} from 'next/font/google'
import './globals.css';
import Header from './componets/Header';

export const metadata = {
  title: 'MyFirst Next App',
 }


 //fonts
  const poppins = Poppins({
      weight:['400','700'],
      subsets:['latin'],
    })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
       <main className='container'> {children} </main>
      </body>
    </html>
  )
}
