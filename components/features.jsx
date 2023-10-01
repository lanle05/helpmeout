import Image from "next/image";

export default function Features() {
  return (
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
              <Image src="/record-circle.svg" alt="record icon" />
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
              <Image src="/send-2.svg" alt="send icon" />
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
              <Image src="/refresh-square-2.svg" alt="A refresh icon" />
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
          <Image src="/Video Repository.png" alt="video of how helpmeout extension works" />
        </section>
      </div>
    </section>
  );
}
