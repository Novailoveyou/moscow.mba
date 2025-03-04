import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/general/logo-rabo.png'

const ImgLogoRabo = ({ classNames = [], width, height }: TypeImg) => {
  const at = useAt()
  // 117x30
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={
        at.en
          ? 'Russian Association of Business Education'
          : 'Российская ассоциация бизнес-образования'
      }
      classNames={classNames}
    />
  )
}

export default ImgLogoRabo
