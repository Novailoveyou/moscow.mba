import stls from '@/styles/components/icons/IconPaperCorner.module.sass'

const IconPaperCorner = ({ fill = '#D9D9D9' }) => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Файл</title>
        <path
          d='M18 12L12 17.996L1.002 18C0.737486 18.0011 0.483369 17.8971 0.295486 17.7109C0.107603 17.5247 0.00132309 17.2715 0 17.007V0.993C0 0.445 0.445 0 0.993 0H17.007C17.555 0 18 0.456 18 1.002V12ZM16 2H2V16H10V11C10 10.7551 10.09 10.5187 10.2527 10.3356C10.4155 10.1526 10.6397 10.0357 10.883 10.007L11 10L16 9.999V2ZM15.171 11.999L12 12V15.169L15.171 11.999Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconPaperCorner
