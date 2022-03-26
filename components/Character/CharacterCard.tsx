import Image from 'next/image'
import React from 'react'
import noIcon from '../../public/blank-profile.png'
import { Character } from '../../types'
import { Furigana } from '../index'
import { SocialIcon } from 'react-social-icons'

function CharacterCard({ name, icon, twitter, youtube }: Character) {
  return (
    <div className="flex w-[90vw] flex-col items-center rounded-md bg-white pb-2 shadow-md">
      <div className="relative mb-2 h-[90vw] w-[90vw]">
        <Image
          className="rounded-t-md bg-blue-300"
          src={icon ? icon : noIcon}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <Furigana
          className="text-lg font-bold"
          nihongo={name.JP.nihongo}
          furigana={name.JP.furigana}
          furiOn={true}
        />
        <p className="text-base">{name.EN}</p>

        <div className="m-1 space-x-2">
          {youtube && (
            <SocialIcon url={youtube} style={{ height: 40, width: 40 }} />
          )}
          {twitter && (
            <SocialIcon url={twitter} style={{ height: 40, width: 40 }} />
          )}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
