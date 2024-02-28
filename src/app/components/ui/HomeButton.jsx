import Image from 'next/image'
import HomeIcon from '../../../../public/assets/icons/Home-icon.svg'

export default function HomeButton() {
  return (
    <div className="">
        <Image className=""
          src={HomeIcon}
          width={40}
          height={40}
          alt="Home button"
        />
    </div>
  )
}