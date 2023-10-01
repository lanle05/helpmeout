import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer.jsx";
import { Navbar } from "@/components/navbar.jsx";
import { Hero } from "@/components/hero.jsx";
import { Work } from "@/components/walkthrough.jsx";
export default function Home() {
  return (
    <>
      <nav className="py-3 px-[6.25rem] flex justify-between items-center bg-white">
        <div className="flex items-center gap-2 p-2.5 font-inter font-bold leading-[1.21rem] text-[#100A42]">
          <Image src="/helpmeout logo.svg" alt="logo" width={28} height={28} />
          <span>HelpMeOut</span>
        </div>

        <ul className="flex gap-[2.4375rem] capitalize font-work-sans font-medium leading-[1.173125rem] py-2.5 px-5">
          <li>Features</li>
          <li>How it works</li>
        </ul>

        <button className="font-sora font-semibold text-[1.125rem] leading-[1.4175rem] py-3 px-2.5 text-[#120B48]">
          Get Started
        </button>
      </nav>
      <header className="flex items-center justify-between px-[6.25rem] py-[10.125rem] bg-white mb-[3.5rem]">
        <section className="w-[34.25rem]">
          <h1 className="font-sora font-bold text-[4rem] leading-[4rem] text-[#141414] mb-5">
            Show Them <br /> Dont Just Tell
          </h1>
          <p className="font-inter text-xl opacity-75 mb-12">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
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
              width={374}
              height={221}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-start-2 rounded-lg overlow-hidden self-end">
            <Image
              src="/AdobeStock_362497671 1.png"
              alt="A man and his son watching a video"
              width={374}
              height={221}
            />
          </div>
          <div className="row-start-1 row-span-2 cols-start-2 overflow-hidden rounded-lg border">
            <Image
              src="/woman-using-smartphone-technology 2.png"
              alt="A lady sitting on a sofa happily watching a video on her phone"
              width={305.333}
              height={448}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </header>
      <section className="bg-white px-[6.25rem] py-20 mb-[4.375rem]">
        <h2 className="text-[#141414] font-sora font-bold text-[2.5rem] leading-[3.15rem] text-center mb-2">
          Features
        </h2>
        <p className="text-center font-work-sans text-[#616163] text-xl leading-[1.89125rem] mb-16">
          Key Highlights of Our Extension
        </p>

        <div className="flex justify-between items-center">
          <section className="w-[34.25rem] flex flex-col gap-12">
            <article className="flex gap-4 items-start">
              <div className="bg-[#413C6D] p-2 rounded-full w-12">
                <Image
                  src="/record-circle.svg"
                  width={32}
                  height={32}
                  alt="record icon"
                />
              </div>
              <div>
                <h3 className="font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-2">
                  Simple Screen Recording
                </h3>
                <p className="font-work-sans text-xl leading-[1.89125rem] text-[#616163]">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </article>
            <article className="flex gap-4 items-start">
              <div className="bg-[#413C6D] p-2 rounded-full w-12">
                <Image
                  src="/send-2.svg"
                  width={32}
                  height={32}
                  alt="send icon"
                />
              </div>
              <div>
                <h3 className="font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-2">
                  Easy-to-Share URL
                </h3>
                <p className="font-work-sans text-xl leading-[1.89125rem] text-[#616163]">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </article>
            <article className="flex gap-4 items-start">
              <div className="bg-[#413C6D] p-2 rounded-full w-12">
                <Image
                  src="/refresh-square-2.svg"
                  width={32}
                  height={32}
                  alt="A refresh icon"
                />
              </div>
              <div>
                <h3 className="font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-2">
                  Revisit Recordings
                </h3>
                <p className="font-work-sans text-xl leading-[1.89125rem] text-[#616163]">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </article>
          </section>

          <section>
            <Image
              src="/Video Repository.png"
              width={636}
              height={454}
              alt="video of how helpmeout extension works"
            />
          </section>
        </div>
      </section>
      <section className="bg-white py-[6.4375rem] px-[6.25rem] text-center">
        <h2 className="text-[#141414] font-sora font-bold text-[2.5rem] leading-[3.15rem] mb-[3.6875rem]">
          How it works
        </h2>

        <section className="flex gap-[5.1875rem]">
          <article className="flex flex-col items-center">
            <div className="w-[4.25rem] h-[4.25rem] bg-[#120B48] rounded-full text-white font-inter font-bold text-[2rem] leading-[2.420625rem] py-[0.875rem] px-[1.625rem] mb-8">
              1
            </div>
            <h3 className="font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-4">
              Record Screen
            </h3>
            <p className="font-work-sans text-xl leading-[1.89125rem] text-[#616163] mb-7">
              Click the *Start Recording* button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>

            <Image
              src="/Video Repository.png"
              width={356.784}
              height={250.388}
              alt="A sample of how the extension works"
            />
          </article>
          <article className="flex flex-col items-center">
            <div className="w-[4.25rem] h-[4.25rem] bg-[#120B48] rounded-full text-white font-inter font-bold text-[2rem] leading-[2.420625rem] py-[0.875rem] px-[1.625rem] mb-8">
              2
            </div>
            <h3 className="font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-4">
              Share Your Recording
            </h3>
            <p className="font-work-sans text-xl leading-[1.89125rem] text-[#616163] mb-7">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>

            <Image
              src="/Video Repository.png"
              width={356.784}
              height={250.388}
              alt="A sample of how the extension works"
            />
          </article>
          <article className="flex flex-col items-center">
            <div className="w-[4.25rem] h-[4.25rem] bg-[#120B48] rounded-full text-white font-inter font-bold text-[2rem] leading-[2.420625rem] py-[0.875rem] px-[1.625rem] mb-8">
              3
            </div>
            <h3 className="font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-4">
              Learn Effortlessly
            </h3>
            <p className="font-work-sans text-xl leading-[1.89125rem] text-[#616163] mb-7">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>

            <Image
              src="/Video Repository.png"
              width={356.784}
              height={250.388}
              alt="A sample of how the extension works"
            />
          </article>
        </section>
      </section>
      <footer className="bg-[#120B48] py-[6.125rem] px-[8.125rem] flex justify-between items-start text-white">
        <div className="flex items-center gap-2 p-2.5 font-inter font-bold leading-[1.21rem]">
          <Image src="/helpmeout logo.svg" alt="logo" width={40} height={40} />
        </div>
        <div className="flex justify-between gap-[13.75rem] font-work-sans leading-[1.173125rem]">
          <ul className="flex flex-col gap-[1.375rem]">
            <li className="font-sora font-semibold leading-[1.26rem]">Menu</li>
            <li>Home</li>
            <li>Converter</li>
            <li>How it Works</li>
          </ul>
          <ul className="flex flex-col gap-[1.375rem]">
            <li className="font-sora font-semibold leading-[1.26rem]">
              About Us
            </li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
          <ul className="flex flex-col gap-[1.375rem]">
            <li className="font-sora font-semibold leading-[1.26rem]">
              Screen Record
            </li>
            <li>Browser Window</li>
            <li>Desktop</li>
            <li>Application</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
