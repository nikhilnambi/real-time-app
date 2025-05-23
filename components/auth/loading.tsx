import Image from "next/image";

export const Loading = () => {
    return (
        <>
            <div className="h-full w-full flex flex-col justify-center items-center">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={550}
                    height={550}
                    className="animate-pulse duration-700"
                    priority
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </>
    );
};
