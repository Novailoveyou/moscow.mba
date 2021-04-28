import useAt from '@/components/hooks/useAt'
import ProgramsModule from '@/components/general/ProgramsModule'
import Stickers from '@/components/general/Stickers'
import Sticker from '@/components/general/Sticker'

const ProgramsModules = () => {
  const at = useAt()
  return (
    <section className='training-section'>
      <div className='section-pl'>
        <h2>Программа обучения</h2>
        <ul className='training-red-list'>
          <li>
            <div className='number'>20</div>
            <p>дисциплин базовой части</p>
          </li>
          <li>
            <div className='number'>7</div>
            <p>дисциплин специализации</p>
          </li>
        </ul>
        <h3>Базовые дисциплины</h3>
      </div>
      <div className='training-list'>
        {(at.industry || at.professional) && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={[
                'Основы менеджмента',
                'Операционный менеджмент',
                'Стратегический менеджмент',
                'Инновационный менеджмент',
                'Стратегический менеджмент',
                'Антикризисный менеджмент',
                'Корпоративная социальная ответственность',
              ]}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={[
                'Управление проектами',
                'Управление качеством',
                'Управление человеческими ресурсами',
                'Управление безопасностью организации',
                'Управление знаниями и интеллектуальным капиталом',
                'Управление маркетингом',
                'IT-технологии в управлении',
                'Управление бизнес-процессами',
              ]}
            />
            <ProgramsModule
              title='3 модуль'
              subTitle='Основные сферы управления компании'
              items={[
                'Профессиональные навыки и личностное развитие',
                'Деловой английский язык',
                'Организационное поведение',
                'Лидерство',
                'Управление конфликтами',
                'Командообразование',
              ]}
            />
            <ProgramsModule
              title='4 модуль'
              subTitle='Современный менеджмент'
              items={[
                'Управленческая экономика',
                'Финансовый менеджмент',
                'Финансовые угрозы и риск-менеджмент',
                'Инвестиционное финансирование и кредитование',
              ]}
            />
            <ProgramsModule
              title='5 модуль'
              subTitle='Руководитель в современном бизнесе'
              items={[
                'Стратегический маркетинг',
                'Маркетинговые исследования',
                'Интернет-маркетинг',
                'Функциональные маркетинговые стратегии',
                'Брендинг',
                'Современные методы продвижения товаров и услуг',
              ]}
            />
            <ProgramsModule
              title='6 модуль'
              subTitle='Современный менеджмент'
              items={[
                'Основы предпринимательской деятельности',
                'Правовые основы бизнеса',
                'Бизнес-планирование',
                'Цифровая трансформация бизнеса',
              ]}
            />
          </>
        )}
      </div>
      <div className='section-pl'>
        <h3>Специализированные дисциплины</h3>
      </div>
      <div className='training-list'>
        {(at.industry || at.professional) && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={[
                'Основы менеджмента',
                'Операционный менеджмент',
                'Стратегический менеджмент',
                'Инновационный менеджмент',
                'Стратегический менеджмент',
                'Антикризисный менеджмент',
                'Корпоративная социальная ответственность',
              ]}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={[
                'Управление проектами',
                'Управление качеством',
                'Управление человеческими ресурсами',
                'Управление безопасностью организации',
                'Управление знаниями и интеллектуальным капиталом',
                'Управление маркетингом',
                'IT-технологии в управлении',
                'Управление бизнес-процессами',
              ]}
            />
          </>
        )}
        {at.blended && (
          <>
            <ProgramsModule
              title='Практика'
              subTitle=''
              items={[
                'Работа над собственным проектом',
                'Групповые задания и нетворкинг',
                'Кейс-методы',
                'Эссе',
              ]}
            />
            <ProgramsModule
              title='Защита диплома'
              subTitle=''
              items={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой дипломной работы',
              ]}
            />
          </>
        )}
        {at.online && (
          <Stickers>
            <Sticker
              type={'short'}
              clr={'red'}
              title={'Практические модули'}
              listItems={[
                'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе',
              ]}
            />
            <Sticker
              type={'short'}
              clr={'dark'}
              title={'Итоговая аттестация'}
              listItems={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой аттестационной работы',
              ]}
            />
          </Stickers>
        )}
        {at.blended && (
          <Sticker
            type={'long'}
            clr={'dark'}
            title={'Очный модуль в Москве'}
            listItems={[
              'Живое общение со спикерами',
              'Групповые проекты и разбор кейсов',
              'Домашние задания и курсовая работа',
              'Защита проектов и выпускной вечер',
            ]}
          />
        )}
      </div>
    </section>
  )
}

export default ProgramsModules
