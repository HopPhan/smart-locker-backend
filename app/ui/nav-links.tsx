'use client';

import {
  UserIcon, 
  HomeIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import { FaDesktop } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'User', href: '/user', icon: UserIcon },
  { name: 'Locker', href: '/locker', icon: LockClosedIcon },
  { name: 'System', href: '/system', icon: FaDesktop },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
           <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                'text-blue-600': pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
