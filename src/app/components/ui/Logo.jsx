import Image from 'next/image'
import LogoImage from '../../../../public/assets/icons/Logo.svg'

export default function Logo() {
  return (
    <div className="pb-4">
      <a href="/">
        <Image className=""
          src={LogoImage}
          width={165}
          height={78}
          alt="DreamScape logo"
        />
      </a>
    </div>
  )
}