import stls from '@/styles/components/pages/InternationalBusinessLaw.module.sass'
import { NextSeo, CourseJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import JumbotronProgram from '@/components/sections/JumbotronProgram'
import Reviews from '@/components/sections/Reviews'
import ProgramGoal from '@/components/sections/ProgramGoal'
import WhatWillYouLearn from '@/components/sections/WhatWillYouLearn'
import ProgramDesc from '@/components/sections/ProgramDesc'
import HowProcessGoes from '@/components/sections/HowProcessGoes'
import ProgramModules from '@/components/sections/ProgramsModules'
import ContactUs from '@/components/sections/ContactUs'
import Qna from '@/components/sections/Qna'
import Students from '@/components/sections/Students'
import Teachers from '@/components/sections/Teachers'
import UpToDateContent from '@/components/sections/UpToDateContent'
import Diploma from '@/components/sections/Diploma'
import CorporateClients from '@/components/sections/CorporateClients'
import CostOfStudy from '@/components/sections/CostOfStudy'
import Accreditation from '@/components/sections/Accreditation'
import Pros from '@/components/sections/Pros'
import GetStudyPlan from '@/components/sections/GetStudyPlan'

const PageOnlineProgram = ({ program, teachers }) => {
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={`${program.title} MBA - Moscow Business Academy`}
        description={truncate(program.goalStr, 120)}
        canonical={`https://moscow.mba${router.asPath}`}
      />
      <CourseJsonLd
        courseName={`${program.title} MBA`}
        providerName='Moscow Business Academy'
        providerUrl={`https://moscow.mba${router.asPath}`}
        description={truncate(program.goalStr, 120)}
      />

      <JumbotronProgram program={program} />

      <div className={stls.container}>
        <ProgramGoal data={program} />
        <WhatWillYouLearn data={program} />
        <ProgramDesc />
        <Pros format={'online'} />
        <HowProcessGoes />
        <ProgramModules program={program} />
        {/* <ContactUs
          programId={data._id}
          programTitle={data.title}
          title={'Получите консультацию'}
          titleNewStr={'по программе обучения'}
        /> */}
        <GetStudyPlan />
        <Teachers
          programId={program._id}
          programTitle={program.title}
          teachers={teachers}
        />
        <UpToDateContent withBottomLine />
        <CorporateClients />
        <Accreditation />
        <Diploma />
        <Students />
        <Reviews />
        <CostOfStudy
          programId={program._id}
          programTitle={program.title}
          programFormat={program.studyFormat}
          programType={program.category?.type}
        />
        <Qna programId={program._id} programTitle={program.title} />
        <ContactUs
          programId={program._id}
          programTitle={program.title}
          title={'Не знаете что выбрать?'}
          titleNewStr={'Получите консультацию по программам MBA'}
          overlapsFooter
        />
      </div>
    </>
  )
}

export default PageOnlineProgram
