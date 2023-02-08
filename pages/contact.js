import React from 'react'
import ContactLink from '@/components/ContactLink'

function contact() {
  return (
    <>
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:maroyitas@gmail.com" title="gmail" icon="maroyitas" />
            <ContactLink href="https://github.com/altsna" title="github" icon="altsna" />
            <ContactLink href="" title="linkedin" icon="AsnalMaroya" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default contact
