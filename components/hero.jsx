import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

export default function Hero() {
  return (
    <header className="flex items-center justify-between px-[6.25rem] py-[10.125rem] bg-white mb-[3.5rem]">
      <section className="w-[34.25rem]">
        <h1 className="font-sora font-bold text-[4rem] leading-[4rem] text-[#141414] mb-5">
          Show Them <br /> Dont Just Tell
        </h1>
        <p className="font-inter text-xl opacity-75 mb-12">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className="rounded-lg py-[1.375rem] px-6 flex items-center gap-2.5 text-white bg-[#120B48] font-work-sans font-medium text-[1.125rem] leading-[1.319375rem]">
          Install HelpMeOut{" "}
          <span>
            <GoArrowRight size={20} />
          </span>
        </button>
      </section>

      <section className="grid grid-rows-2 grid-cols-2 gap-5 w-1/2">
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="/AdobeStock_400053098 1.png"
            alt="An old woman in front of her laptop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="row-start-2 rounded-lg overlow-hidden self-end">
          <Image
            src="/public/AdobeStock_362497671 1.png"
            alt="A man and his son watching a video"
          />
        </div>
        <div className="row-start-1 row-span-2 cols-start-2 overflow-hidden rounded-lg border">
          <Image
            src="/woman-using-smartphone-technology 2.png"
            alt="A lady sitting on a sofa happily watching a video on her phone"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </header>
  );
}
