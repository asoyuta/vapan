import { NextPage } from 'next'
import Head from 'next/head'
import { CharacterCard, Header } from '../../components'
import { PlusCircleIcon } from '@heroicons/react/solid'

import AngeIcon from '../../public/AngeKatrina.png'
import InuiIcon from '../../public/InuiToko.png'
import { Character } from '../../types'

const characters: Character[] = [
  {
    name: {
      JP: {
        nihongo: ['アンジュ・カトリーナ'],
        furigana: [''],
      },
      EN: 'Ange Katrina',
    },
    icon: AngeIcon,
    twitter: 'https://twitter.com/ange_katrina_',
    youtube: 'https://www.youtube.com/channel/UCHVXbQzkl3rDfsXWo8xi2qw',
  },
  {
    name: {
      JP: {
        nihongo: ['戌亥', 'とこ'],
        furigana: ['いぬい', ''],
      },
      EN: 'Inui Toko',
    },
    icon: InuiIcon,
    twitter: 'https://twitter.com/inui_toko',
    youtube: 'https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg',
  },
]

const CharacterList: NextPage = () => {
  return (
    <div className=" bg-sky-100">
      <Head>
        <title>Characters</title>
      </Head>

      <Header />
      <main className="p-3">
        <div className="flex justify-center space-x-2">
          <h1 className="mb-3 flex justify-center text-3xl font-semibold">
            Characters List
          </h1>
          <PlusCircleIcon className="h-10 w-10 text-blue-500" />
        </div>

        <div className="flex flex-col items-center space-y-3">
          {characters.map(({ name, icon, twitter, youtube }) => (
            <CharacterCard
              name={name}
              icon={icon}
              twitter={twitter}
              youtube={youtube}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default CharacterList
