import FormLogin from "./FormLogin";

const ContainerLogin: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-[#23cefc] to-[#9445ff]">
            <div className="flex flex-col gap-1 text-center">
                <span className="text-2xl font-semibold text-white">Infusion Fluid</span>
                <span className="text-2xl font-semibold text-white">Monitoring</span>
                <span className="text-lg font-semibold text-white">Login</span>
            </div>
            <div className="w-1/3 mt-10">
                <FormLogin />
            </div>
        </div>
    );
}

export default ContainerLogin;