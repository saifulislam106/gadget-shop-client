import useAuth from "../../Hooks/useAuth";


const Overview = () => {
    const {user} = useAuth()
    return (
        <div className="flex items-center justify-center w-full h-full">
            <p className="font-medium">{user.email}</p>
        </div>
    );
};

export default Overview;