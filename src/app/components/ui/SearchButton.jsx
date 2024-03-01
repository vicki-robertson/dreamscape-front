import Image from 'next/image'
import SearchIcon from '../../../../public/assets/icons/Glass-icon.svg'

export default function SearchButton() {
  return (
    <button className="">
        <Image className=""
          src={SearchIcon}
          width={23}
          height={23}
          alt="Search button"
        />
    </button>
  )
}