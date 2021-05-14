import Image from "next/image";
import { HeaderItem } from "..";
import { headerData } from "../../data/headerData";

const Header = () => {
    return (
        <header className="header">
            <div className="header__icons">
                {headerData.map(icon => (
                    <HeaderItem
                        key={icon.id}
                        title={icon.title}
                        Icon={icon.icon}
                    />
                ))}
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
