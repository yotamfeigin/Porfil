import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import axios from "axios";
import { Skeleton } from "antd";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";

const Portfolio = () => {
    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => {
                console.error('Error fetching portfolio:', error);
                throw new Error('Failed to fetch portfolio data');
            })
    );

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 gap-4 px-8 my-6">
                {isLoading ? (
                    [1, 2, 3, 4].map((item, index) => (
                        <ImageAndParagraphSkeleton key={index} className="w-full object-cover" />
                    ))
                ) : (
                    data?.map((portfolioData) => (
                        <PortfolioCard key={portfolioData.id} data={portfolioData} />
                    ))
                )}
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Portfolio;
