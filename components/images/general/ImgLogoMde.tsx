import { TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/images'
import { useAt } from '@/helpers/index'
import src from '@/public/assets/images/general/logo-department.png'

const ImgLogoMde = ({ classNames = [], width, height }: TypeImg) => {
  const at = useAt()
  // 105x31
  return (
    <ImgTemplate
      src={src}
      width={width}
      height={height}
      alt={
        at.en
          ? 'Moscow department of education'
          : 'Департамент образования города москвы'
      }
      classNames={classNames}
    />
  )
}

export default ImgLogoMde
