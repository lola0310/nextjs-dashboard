import { monserrat } from './ui/font';
import './ui/global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        {children}
        <footer className='w-full h-[20dvh] text-center flex flex-col justify-center items-center'>
          Hecho con sudor por Fifo'sCorp
        </footer>
      </body>
    </html>
  );
}
