import MainLayout from "../Layouts/MainLayout";
import MenuList from "../features/home-features/components/MenuList";

const Home: React.FC = () => {
    return (
        <MainLayout title="Infusion Fluid Monitoring" backButton={false}>
            <MenuList />
        </MainLayout>
    );
};

export default Home;
