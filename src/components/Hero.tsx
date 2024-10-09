import profileImg from "../assets/personal-pic.png";
import Button from "./Button.tsx";
function Hero() {
  return (
    <div className="flex flex-col gap-9 items-center">
      <img
        src={profileImg}
        alt="pesonal-picture"
        className=" w-[240px] mt-[30px]
        "
      />
      <h1
        className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                 w-[80%] mt-12 text-center md:w-[70%] lg:w-[60%]
                 font-semibold"
      >
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]">
          I'm Taha Zoabi,
        </span>{" "}
        Software Engineering Student.
      </h1>
      <p
        className=" w-full md:w-[90%] text-md  md:text-lg leading-6 text-center
                 sm:leading-10"
      >
        Aspiring software engineer dedicated to learning and mastering
        innovative technologies.
      </p>
      <div className="flex gap-6 items-center mb-12">
        <Button
          classes="bg-custom-gradient rounded-[50px] px-4 py-3 text-md
          hover:border-2 sm:px-10 py-5
        "
        >
          Connect With Me
        </Button>
        <Button classes="border-2 rounded-[50px] px-4 py-3 text-md  hover:border-[#B415FF] sm:px-10 py-5 ">
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default Hero;
