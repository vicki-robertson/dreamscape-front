import Image from 'next/image'
import SearchIcon from '../../../../public/assets/icons/Glass-icon.svg'

export default function SearchButton() {
  return (
    <div className="">
        <Image className=""
          src={SearchIcon}
          width={40}
          height={40}
          alt="Search button"
        />
    </div>
  )
}