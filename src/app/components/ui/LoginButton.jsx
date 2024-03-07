import Image from 'next/image'
import LoginIcon from '../../../../public/assets/icons/Avatar-icon.svg'

export default function LoginButton() {
  return (
    <div className="">
      <a href="/register">
          <Image className=""
            src={LoginIcon}
            width={40}
            height={40}
            alt="Login button"
          />
      </a>
    </div>
  )
}