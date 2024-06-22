import RecommendationCard from "./RecommendationCard";
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const Recommendations = () => {
    const { isLoading, error, data: recommendationData } = useQuery('recommendations', () =>
        axios.get('api/recommendations')
            .then(({ data }) => data)
            .catch(error => {
                console.error('Error fetching recommendations:', error);
                throw new Error('Failed to fetch recommendations data');
            })
    );

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Recommendations</div>
            <div className="grid w-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
                {isLoading ? (
                    [1, 2, 3, 4].map((_, index) => (
                        <ParagraphSkeleton key={index} className="p-8 h-full w-full relative" />
                    ))
                ) : (
                    recommendationData?.map((recommendation, index) => (
                        <RecommendationCard key={index} data={recommendation} />
                    ))
                )}
            </div>
        </>
    );
};

export default Recommendations;
