import Image from "next/image";
import home_bird from '../../public/img/home_bird.png'

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
      <br />
      <br />
      <br />
      <br />
        <p className="special-word text-xs">"Read what others have to say"</p>
        <h1 className="pb-5">
          The World's <span className="special-word">Coolest</span><br /> Blog Website.
        </h1>
            <br />
        <p>The idea of Blogspace was born from a desire to create a space where everyone could share their thoughts, ideas, and stories. We wanted to build a platform that was not only user-friendly but also powerful enough to handle all your blogging needs.</p>
      </div>

      <div className="hidden md:block basis-1/3">
        <Image
          src={home_bird}
          alt="Home bird"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
