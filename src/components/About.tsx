import Title from "./Title.tsx";
import pic from "../assets/pic.jpg";
function About() {
  return (
    <>
      <Title>About Me</Title>
      <div className={"flex flex-col gap-6 justify-center md:flex-row  p-4"}>
        <div>
          <img
            src={pic}
            alt="personal-picture"
            className={" w-[90%] md:w-[450px] rounded-lg mx-auto"}
          />
        </div>
        <div className={"flex flex-col  w-full md:w-[50%] gap-3 "}>
          <p className={"text-2xl my-3"}>
            Hello! I'm Taha Zoabi, a 25-year-old software engineering student
            with a passion for technology and a strong desire to grow as a
            developer.
          </p>
          <p className={"text-2xl my-3"}>
            I thrive on the challenge of learning new programming languages and
            tools, always eager to tackle the next project that pushes my skills
            to the limit. My journey in tech has been both exciting and
            rewarding, and I can't wait to see where it takes me next.
          </p>
        </div>
      </div>
      ;
    </>
  );
}

export default About;
