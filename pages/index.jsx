import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import MyWorks from '../components/HomeComponents/Works/MyWorks';

const Home = () => (
    <div className="Home-Page -z-10">
        <Banner />
        <MyExpertise />
        <MyWorks /> 
        <Footer />
    </div>
);

export default Home;
