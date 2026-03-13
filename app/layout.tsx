import './ui/global.css'
import { monserrat } from './ui/font';
import { Metadata }  from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',//descripcion
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  keywords: "Ejemplo1, Ejemplo2, Ejemplo3",//palabras claves
  openGraph:{
    title:"",
    description:"",
    url:""
  }//esto es como saldra en otras redes sociales
};


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
          Hecho con sudor por FifosCorp
        </footer>
      </body>
    </html>
  );
}
