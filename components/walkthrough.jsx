export default function walkThrough() {
  return (
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
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>

          <Image src={""} alt="A sample of how the extension works" />
        </article>
        <article className="flex flex-col items-center">
          <div className="w-[4.25rem] h-[4.25rem] bg-[#120B48] rounded-full text-white font-inter font-bold text-[2rem] leading-[2.420625rem] py-[0.875rem] px-[1.625rem] mb-8">
            2
          </div>
          <h3 className="font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-4">
            Share Your Recording
          </h3>
          <p className="font-work-sans text-xl leading-[1.89125rem] text-[#616163] mb-7">
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>

          <Image src={""} alt="A sample of how the extension works" />
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

          <Image src={""} alt="A sample of how the extension works" />
        </article>
      </section>
    </section>
  );
}
