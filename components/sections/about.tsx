import Title from '@/components/Title.tsx'

import pic from '/pic.jpg'

function About() {
  return (
    <section id={'about me'}>
      <Title>About Me</Title>
      <div className={'flex flex-col justify-center gap-6 p-2 md:flex-row'}>
        <div>
          <img
            src={pic}
            alt="personal-picture"
            className={'mx-auto w-[90%] rounded-lg md:w-[450px]'}
          />
        </div>
        <div className={'flex w-full flex-col gap-3 md:w-2/3 lg:w-1/3'}>
          <p className={'my-3 text-2xl'}>
            Hello! I'm Taha Zoabi, a 25-year-old software engineering student
            with a passion for technology and a strong desire to grow as a
            developer.
          </p>
          <p className={'my-3 text-2xl'}>
            I thrive on the challenge of learning new programming languages and
            tools, always eager to tackle the next project that pushes my skills
            to the limit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
