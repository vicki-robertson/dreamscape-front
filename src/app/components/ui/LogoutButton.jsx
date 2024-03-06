import Image from 'next/image'
import LogoutIcon from '../../../../public/assets/icons/Logout-icon.svg'

export default function HomeButton() {
  return (
    <div className="">
      <a href="/">
        <Image className=""
          src={LogoutIcon}
          width={50}
          height={50}
          alt="botón para volver atrás"
        />
      </a>
    </div>
  )
}