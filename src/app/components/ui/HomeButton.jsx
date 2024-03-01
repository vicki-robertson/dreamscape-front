import Image from 'next/image'
import HomeIcon from '../../../../public/assets/icons/Home-icon.svg'

export default function HomeButton() {
  return (
    <div className="">
      <a href="/">
        <Image className=""
          src={HomeIcon}
          width={40}
          height={40}
          alt="Home button"
        />
      </a>
    </div>
  )
}