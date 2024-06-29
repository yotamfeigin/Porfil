import CardLayout from "../../Common/CardLayout"

const ExpertiseCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings">
                <div className="text-Snow" style={{ fontSize: '1.5rem' }}>{data.title}</div>
                <div className="text-sm text-LightGray font-normal" style={{ fontSize: '1.25rem' }}>
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard