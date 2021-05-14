import {
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { HeaderItem } from "..";

const Header = () => {
    return (
        <header className="header">
            <div className="header__icons">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain"
                src="/hulu.png"
                width={200}
                height={100}
            />
        </header>
    );
};

export default Header;
