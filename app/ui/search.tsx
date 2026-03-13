'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';//esto le da un minimo de tiempo al usuario a dejar de escribir para que no haga la busqueda al instante...se le pasa la funcion y el tiempo en ms

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();//parametros
  const pathname = usePathname();//pathname
  const { replace } = useRouter();//pa modificar el pathname


  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    
    const params = new URLSearchParams(searchParams);//objeto de tipo parametros que se inicia con los parametros actuales
    params.set('page', '1');//para que la busqueda empiece por defecto en la pagina 1
    if (term) {
      params.set('query', term);//aqui se modifica si entro algo en el input
    } else {
      params.delete('query');//aqui si no
    }
    replace(`${pathname}?${params.toString()}`);//aqui se modifica con valores de la ruta con el pathname y los parametros
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value); //es donde se realiza la busqueda
        }}
        defaultValue={searchParams.get('query')?.toString()} //se puede poner un valor por defecto
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
