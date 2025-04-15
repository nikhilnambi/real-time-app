interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="flex flex-col gap-y-4">
                <nav className="text-xs p-4 bg-red-500 text-white">
                    I'm a reusable component
                </nav>
                {children}
            </div>
        </>
    );
};

export default Layout;
