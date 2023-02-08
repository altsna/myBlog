import SocialIcon from './social-icons'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3 }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <div className="h-10 w-10 text-[#DE1D8D] dark:text-[#DE1D8D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-folder"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5">
              {href ? <SocialIcon kind="external" href={href} size="6" /> : null}
            </div>
            <div className="mx-1.5">
              {github ? <SocialIcon kind="github" href={github} size="6" /> : null}
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>

        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-row justify-between">
          <div className="text-sm text-gray-400">
            {tech1} &#8226; {tech2} &#8226; {tech3}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
