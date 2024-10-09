import profileImg from "../assets/personal-pic.png";
import Button from "./Button.tsx";
function Hero() {
  return (
    <div className="flex flex-col gap-9 items-center">
      <img
        src={profileImg}
        alt="pesonal-picture"
        className="rounded-full w-[240px] mt-[30px]"
      />
      <h1 className="text-[90px] text-center w-[70%] font-semibold">
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]">
          I'm Taha Zoabi,
        </span>{" "}
        Software Engineer Student.
      </h1>
      <p className="w-[50%] text-center text-2xl leading-10">
        Aspiring software engineer dedicated to learning and mastering
        innovative technologies.
      </p>
      <div className="flex gap-6 items-center mb-12">
        <Button
          classes="bg-custom-gradient rounded-[50px] px-10 py-5 text-md
          hover:border-2
        "
        >
          Connect With Me
        </Button>
        <Button classes="border-2 rounded-[50px] px-10 py-5 text-md  hover:border-[#B415FF]">
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default Hero;
