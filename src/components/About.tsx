import Title from './ui/Title.tsx'
import pic from '../assets/pic.jpg'
function About() {
  return (
    <div id={'about'}>
      <Title>About Me</Title>
      <div className={'flex flex-col justify-center gap-6 p-4 md:flex-row'}>
        <div>
          <img
            src={pic}
            alt="personal-picture"
            className={'mx-auto w-[90%] rounded-lg md:w-[450px]'}
          />
        </div>
        <div className={'flex w-full flex-col gap-3 md:w-[50%]'}>
          <p className={'my-3 text-2xl'}>
            Hello! I'm Taha Zoabi, a 25-year-old software engineering student
            with a passion for technology and a strong desire to grow as a
            developer.
          </p>
          <p className={'my-3 text-2xl'}>
            I thrive on the challenge of learning new programming languages and
            tools, always eager to tackle the next project that pushes my skills
            to the limit. My journey in tech has been both exciting and
            rewarding, and I can't wait to see where it takes me next.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
