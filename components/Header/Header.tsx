import Image from 'next/image'
import { useRouter } from 'next/router'
import logoUrl from '../../public/logo.png'
import { MenuIcon } from '@heroicons/react/outline'

function Header() {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between bg-white px-3 py-3 shadow-md sm:px-5 sm:py-5 lg:px-10">
      {/* Left */}
      <div>
        {/* 1 : 4.12 */}
        <div
          onClick={() => router.push('/')}
          className="relative h-[30px] w-[124px] cursor-pointer sm:h-[40px] sm:w-[165px] lg:h-[50px] lg:w-[206px]"
        >
          <Image src={logoUrl} layout="fill" objectFit="fill" />
        </div>
      </div>
      {/* Right */}
      <div>
        <div className=" cursor-pointer">
          <MenuIcon className="h-6 w-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
