import stls from '@/styles/components/sections/CostOfStudy.module.sass'
import classNames from 'classnames'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Until from '@/components/costs/Until'
import PopupForm from '@/components/popups/PopupForm'
import {useAt } from '@/helpers/index'
import Price from '@/components/costs/Price'
import Loan from '@/components/costs/Loan'
import Discount from '@/components/costs/Discount'
import TrainingPeriod from '@/components/costs/TrainingPeriod'
import ProgramSubjects from '@/components/general/ProgramSubjects'
import { ImgDiscountDecoration } from '@/components/images'

const PriceBlock = ({
  isDiscounted,
  canPayInInstalments,
  programType,
  programFormat,
  withDesc,
  withPriceTitles,
  programPrice = null
}) => {
  let topContentPart

  const at = useAt()

  if (withDesc) {
    topContentPart = (
      <div className={stls.ctaTextContainer}>
        <p>
          Успех в карьере напрямую связывают с получением образования.
        </p>
        <p>
          Получите актульные знания, увеличьте свой доход и продвиньтесь по карьерной лестнице!
        </p>
        <p className={stls.red}>Запишитесь на курс { 
          at.mini
          ? 'MBA Mini'
          : at.mba
          ? 'MBA'
          : at.executive
          ? 'MBA Executive'
          : at.mbl
          ? 'MBA'
          : ''
          } сегодня:</p>
      </div>
    )
  }

  if (!withDesc) {
    topContentPart = (
      <div className={stls.price}>
        {withPriceTitles && <p className={stls.priceDesc}>Стоимость курса</p>}
        <Price
          discount={isDiscounted}
          type={programType}
          format={programFormat}
          programPrice={(at.profession || at.course) && programPrice}
          renderedByComponent='CostOfStudy'
        />{' '}
      </div>
    )
  }

  return (
    <>
      {topContentPart}
      <div className={stls.price}>
        {withPriceTitles && (
          <p className={stls.priceDesc}>Оплата по месяцам без переплаты</p>
        )}
        {canPayInInstalments ? (
          <Loan
            discount={isDiscounted}
            type={programType}
            format={programFormat}
            programPrice={(at.profession || at.course) && programPrice}
            renderedByComponent='CostOfStudy'
          />
        ) : (
          <Price
            discount={isDiscounted}
            type={programType}
            format={programFormat}
            programPrice={(at.profession || at.course) && programPrice}
            renderedByComponent={'CostOfStudy'}
          />
        )}
      </div>
    </>
  )
}

const CostOfStudy = ({
  programTitle = null,
  programId = null,
  programFormat = null,
  programType = null,
  programPrice = null
}) => {
  const at = useAt()
  const isDiscounted =
    (at.mini && at.online) ||
    (at.mba && at.online) ||
    (at.profession && at.online) ||
    (at.course && at.online) ||
    at.mbl

  const canPayInInstalments = at.profession || at.course
  const costWithDescription = at.mini || at.mba || at.executive || at.mbl

  let list

  if (at.mini || at.mba || at.executive || at.mbl) {
    list = (
      <>
        <ul className={stls.list}>
          <li className={stls.listItem}>
            <TrainingPeriod
              type={
                at.mini
                  ? 'mini'
                  : at.mba
                    ? 'mba'
                    : at.executive
                      ? 'executive'
                      : at.mbl
                        ? 'mba'
                        : null
              }
            />
          </li>
          <li className={stls.listItem}>
            {at.online
              ? 'Дистанционно'
              : at.blended
                ? 'С очными модулями'
                : at.mbl
                  ? 'Дистанционно'
                  : 'Очно'}
          </li>
          <li className={stls.listItem}>
            Ближайший набор{' '}
            <Until preposition={false} executive={at.executive && true} />
          </li>
          <li className={stls.listItem}>Живое общение с экспертами</li>
          <li className={stls.listItem}>
            <ProgramSubjects
              type={
                at.mini
                  ? 'mini'
                  : at.mba
                    ? 'mba'
                    : at.executive
                      ? 'executive'
                      : at.mbl
                        ? 'mbl'
                        : null
              }
              subjects={'base'}
            />{' '}
            {!at.mbl ? 'дисциплин об управлении' : 'дисциплина'}
          </li>
          {!at.mbl && (
            <li className={stls.listItem}>
              <ProgramSubjects
                type={
                  at.mini
                    ? 'mini'
                    : at.mba
                      ? 'mba'
                      : at.executive
                        ? 'executive'
                        : at.mbl
                          ? 'mba'
                          : null
                }
                subjects={'specialty'}
              />{' '}
              дисциплин специализации
            </li>
          )}

          {!at.online && !at.mbl && (
            <li className={stls.listItem}>3 выездных модуля в Москве</li>
          )}
        </ul>
        <div className={stls.note}>*Возможна рассрочка</div>
      </>
    )
  } else {
    list = (
      <ul className={stls.list}>
        <li className={stls.listItem}>От 4 месяцев обучения</li>
        <li className={stls.listItem}>
          {at.online
            ? 'Дистанционно'
            : at.blended
              ? 'С очными модулями'
              : 'Очно'}
        </li>
        <li className={stls.listItem}>
          Ближайший набор <Until preposition={false} />
        </li>
        <li className={stls.listItem}>Теория и практические задания</li>
        <li className={stls.listItem}>Диплом установленного образца</li>
      </ul>
    )
  }


  const listItems = (
    <>
      <li className={stls.listItem}>Практические домашние задания</li>
      <li className={stls.listItem}>Современная программа 2021 года</li>
      <li className={stls.listItem}>Интерактивные онлайн-семинары</li>
      <li className={stls.listItem}>Карьерные консультации</li>
      <li className={stls.listItem}>Дипломы заносятся в ФРДО</li>
      <li className={stls.listItem}>Ежедневная помощь от кураторов и преподавателей</li>
    </>
  )
 

  return (
    <section className={stls.container}>
      {isDiscounted && (
        <div className={stls.discountSticker}>
          <ImgDiscountDecoration classNames={[stls.decoration]} />
          <div className={stls.discountSize}>
            <Discount />
          </div>
          <span>
            <Until />
          </span>
        </div>
      )}
      <h2 className={classNames(stls.cost, { [stls.bigMb]: at.profession || at.course })}>
        Стоимость обучения
      </h2>
      <div className={stls.content}>
        <div
          className={classNames({
            [stls.contentBlock]: true,
            [stls.flexBlock]: at.profession || at.course
          })}>

          <div className={stls.description}>
            <div className={stls.row}>
              <div className={stls.block}>
                <p className={stls.title}>
                <TrainingPeriod
              type={
                at.mini
                  ? 'mini'
                  : at.mba
                    ? 'mba'
                    : at.executive
                      ? 'executive'
                      : at.mbl
                        ? 'mbl'
                        : at.profession
                        ? 'profession'
                        : at.course 
                        ? 'course'
                        : null
              }/>
                </p>
                <p className={stls.subtitle}>Возможно закончить экстерном</p>
              </div>
              <div className={stls.block}>
                <p className={stls.title}>
                {at.online
            ? 'Дистанционно'
            : at.blended
              ? 'С очными модулями'
              : 'Очно'}
                </p>
                <p className={stls.subtitle}>Онлайн-встречи с преподавателями</p>
              </div>
            </div>
            <ul className={stls.list}>
            <li className={stls.kit}>
                <p className={stls.title}>Ближайший набор <span className={stls.red}>20 февраля</span></p>
                <p className={stls.subtitle}>*количество мест ограничено</p>
              </li>
              {listItems}
            </ul>
          </div>
        </div>
        <div
          className={classNames(stls.contentBlock, {
            [stls.verticalSeparatorLine]: at.profession || at.course
          })}>
          <PriceBlock
            isDiscounted={isDiscounted}
            canPayInInstalments={canPayInInstalments}
            programType={programType}
            programFormat={programFormat}
            withDesc={costWithDescription}
            withPriceTitles={at.profession || at.course}
            programPrice={(at.profession || at.course) && programPrice}
          />
          <div
            className={classNames(stls.buttonBlock, {
              [stls.noMb]: at.profession || at.course
            })}>
            <Popup
              trigger={<a className={stls.button}>Оставить заявку</a>}
              modal
              nested>
              {close => (
                <PopupForm
                  programId={programId}
                  programTitle={programTitle}
                  title={'Получите консультацию'}
                  closePopUpForm={close}
                />
              )}
            </Popup>
          </div>
          <p className={stls.subtitle}>
          *согласно опросу за 2020 год, 93% наших студентов окупили обучение уже на 2-й месяц
          </p>
        </div>
      </div>
    </section>
  )
}

export default CostOfStudy
