import { UserButton } from '@clerk/nextjs';

import { MainNav } from '@/components/main-nav';

const Navbar = () => {
  return (
    <div className="flex h-16 items-center px-4">
      <div>This will be a store switcher</div>
      <div>
        <MainNav className={'px-4'} />
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
