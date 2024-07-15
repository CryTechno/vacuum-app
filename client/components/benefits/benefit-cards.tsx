import BenefitsContent from "@/components/_mock/benefits";
import Layout from "@/components/benefits/layout";

const BenefitCards = () => {
    const listBenefits = BenefitsContent.map(item => {
        return (
                <Layout content={item.content} svgComponent={<item.svgComponent/>} />
            )
    })
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-[42px]">
            {listBenefits}
        </div>
    )
}
export default BenefitCards