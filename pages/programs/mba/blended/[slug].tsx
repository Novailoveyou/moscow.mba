import {
  fetchPrograms,
  createBlended,
  getProgram,
  getPaths
} from '@/helpers/index'

import BlendedProgram from '@/components/pages/BlendedProgram'

const programsMbaBlendedProgram = ({ program, programs }) => {
  return <BlendedProgram program={program} />
}

export const getStaticProps = async context => {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const program = getProgram({
    programs: programsWithBlended,
    slug: context.params.slug,
    studyFormat: 'blended',
    type: 'mba'
  })

  return {
    props: {
      program,
      programs: programsWithBlended
    }
  }
}

export const getStaticPaths = async () => {
  const programs = await fetchPrograms()
  const programsWithBlended = createBlended(programs)
  const paths = getPaths({
    programs: programsWithBlended,
    studyFormat: 'blended',
    type: 'mba'
  })

  return {
    paths,
    fallback: false
  }
}

export default programsMbaBlendedProgram
