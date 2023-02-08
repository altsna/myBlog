import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-2 mr-3 cursor-pointer rounded-lg border border-[#DE1D8D] py-1 px-3 text-sm font-medium uppercase text-[#DE1D8D] transition duration-500 ease-in-out hover:bg-[#DE1D8D] hover:text-gray-100 dark:hover:text-gray-900">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
