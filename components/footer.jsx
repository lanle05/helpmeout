import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#120B48] py-[6.125rem] px-[8.125rem] flex justify-between items-start text-white">
      <div className="flex items-center gap-2 p-2.5 font-inter font-bold leading-[1.21rem]">
        <Image src="/helpmeout logo.svg" alt="logo" width={28} height={28} />
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
  );
}
