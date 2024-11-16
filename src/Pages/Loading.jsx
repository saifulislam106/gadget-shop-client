import { RiseLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className="min-h-screen min-w-screen flex items-center justify-center">
            <RiseLoader
                color="black"
                loading="true"
                size={150}
            />
        </div>
    );
};

export default Loading;