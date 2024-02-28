import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Logo from '@/app/ui/vnx-logo';
import { PowerIcon, TvIcon } from '@heroicons/react/24/outline';
import { FaDesktop, FaExpand, FaWhmcs } from 'react-icons/fa';
import GetLanguage from '@/languages/language';

export default function SideNav() {
  const strLang = GetLanguage();
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 left-col">
      <>
        <div className="w-full text-left text-[26px] hidden md:block md:text-left]">
          {strLang.TXT_TITLE}
        </div>
        <div className="flow-root">
          <div className="float-left">
            <Link
              className="mb-2 flex items-end justify-start rounded-md p-4"
              href="/"
            >
              <div className="w-32 text-white md:w-40">
                <Logo />
              </div>
            </Link>
          </div>
          <div className="float-right h-full flex items-center justify-center md:hidden">
            {strLang.TXT_TITLE}
          </div>
        </div>
      </>
      <div className="flex grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md {/*bg-gray-50*/} md:block"></div>
        
        <div className="flex gap-4 md:gap-1">
          <div className="flex items-center justify-center gap-1 hover:text-blue-600 w-1/3">
            <FaWhmcs className="w-4" />
            <div className="text-[.8em] hidden md:block">Settings</div>
          </div>

          <div className="flex items-center justify-center gap-1 hover:text-blue-600 w-1/3">
            <FaExpand className="w-4" />
            <div className="text-[.8em] hidden md:block">FullScreen</div>
          </div>

          <div className="flex items-center justify-center gap-1 hover:text-blue-600 w-1/3">
            <PowerIcon className="w-4" />
            <div className="text-[.8em] hidden md:block">Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  );
}
