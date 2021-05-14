import Image from "next/image";

const Header = () => {
    return (
        <header className="">
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
