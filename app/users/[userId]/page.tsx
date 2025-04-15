interface UserIdPageProps {
    params: {
        userId: string;
    };
}

const Page = ({ params }: UserIdPageProps) => {
    return (
        <>
            <h1>User Id :{params.userId}</h1>
        </>
    );
};

export default Page;
