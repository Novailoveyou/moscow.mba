import stls from '@/styles/components/icons/IconScreen.module.sass'

const IconScreen = ({ fill = '#D9D9D9' }) => {
  return (
    <div className={stls.container}>
      <svg viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Монитор</title>
        <path
          d='M11 15V17H15V19H5V17H9V15H1C0.734784 15 0.48043 14.8946 0.292893 14.7071C0.105357 14.5196 0 14.2652 0 14V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1V14C20 14.2652 19.8946 14.5196 19.7071 14.7071C19.5196 14.8946 19.2652 15 19 15H11ZM2 2V13H18V2H2ZM8 4.5L13 7.5L8 10.5V4.5Z'
          fill={fill}
        />
      </svg>
    </div>
  )
}

export default IconScreen
