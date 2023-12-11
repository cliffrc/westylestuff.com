import Image from "next/image";

const Intro = () => {
  return (
    <section
      className="mx-auto mt-28 max-w-[50rem]  scroll-mt-28 items-center text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </div>
          <span className="absolute bottom-0 right-0 text-4xl">🖖</span>
        </div>
      </div>
      <h1 className="small-caps mb-10 mt-7 max-w-lg px-4 text-center text-4xl !leading-[1.5] sm:text-2xl">
        Hello, I am Cliff. I live here in the machine. It is somewhere in the
        distant vicinity.
      </h1>
    </section>
  );
};

export default Intro;
