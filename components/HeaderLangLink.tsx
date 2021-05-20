import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import setString from '../components/hooks/setString'
import lang from '@/data/translation/header'
import SVGTriangleBottom from '@/components/svgs/SVGTriangleBottom'

const HeaderLangLink = () => {
  const router = useRouter()
  const [showMe, setShowMe] = useState(false)

  const showLangMenu = () => setShowMe(!showMe)

  return (
    <div className={`${showMe && 'lang-red-highlight'} lang`}>
      <a className='lang__btn' onClick={showLangMenu}>
        {setString(lang.linkLang)}{' '}
        <SVGTriangleBottom fill={`${showMe ? '#FF3535' : '#000'}`} />
      </a>
      <ul className={`lang__selectList ${showMe && 'show'}`}>
        <li className='selectList__item'>
          <Link href={`${router.pathname}`} locale='ru'>
            <a onClick={showLangMenu}>
              <span>🇷🇺</span>РУССКИЙ
            </a>
          </Link>
        </li>
        <li className='selectList__item'>
          <Link href={`${router.pathname}`} locale='en-US'>
            <a onClick={showLangMenu}>
              <span>🇺🇸</span>ENGLISH
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderLangLink
