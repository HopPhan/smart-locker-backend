import Image from "next/image";
import { lusitana } from '@/app/ui/fonts';
import GetLanguage from '@/languages/language';
import adminPic from '@/public/admin.png';

export default function Logo() {
  const strLang = GetLanguage();
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white gap-2`}
    >
      <Image
        src={adminPic}
        alt="Picture of the admin page"
        width={50}
        height={50}
      />
      <p className="text-[20px]">{strLang.TXT_WELCOME},</p>
    </div>
  );
}
