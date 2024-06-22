import ExpertiseCard from "./ExpertiseCard";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const MyExpertise = () => {
    const { isLoading, error, data: expertiseData } = useQuery('expertise', () =>
        axios.get('api/expertise')
            .then(({ data }) => data)
            .catch(error => {
                console.error('Error fetching expertise:', error);
                throw new Error('Failed to fetch expertise data');
            })
    );

    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-8">
                {isLoading ? (
                    [1, 2, 3, 4, 5, 6].map((_, index) => (
                        <ParagraphSkeleton key={index} className="space-y-2 p-8" />
                    ))
                ) : (
                    expertiseData?.map((expertise, index) => (
                        <ExpertiseCard key={index} data={expertise} />
                    ))
                )}
            </div>
        </>
    );
};

export default MyExpertise;
