import { handleGetStaticProps, handleGetStaticPaths } from '@/helpers/index'
import BlendedProgram from '@/components/pages/BlendedProgram'

const PageProgramsMiniBlendedProgram = ({ program, programs, teachers }) => {
  return <BlendedProgram program={program} teachers={teachers} />
}

export const getStaticProps = async context =>
  handleGetStaticProps({
    programSlug: context.params.slug,
    programStudyFormat: 'blended',
    programType: 'mini'
  })

export const getStaticPaths = async () =>
  handleGetStaticPaths({ studyFormat: 'blended', type: 'mini' })

export default PageProgramsMiniBlendedProgram
