import BenefitsContent from "@/components/_mock/benefits";
import Layout from "@/components/ui/benefits/layout";

const BenefitCards = () => {
    const listBenefits = BenefitsContent.map(item => {
        return (
                <Layout key={item.id} content={item.content} svgComponent={<item.svgComponent/>} />
            )
    })
    return (
        <div className="flex flex-row flex-wrap justify-center gap-[92px] mt-[42px]">
            {listBenefits}
        </div>
    )
}
export default BenefitCards