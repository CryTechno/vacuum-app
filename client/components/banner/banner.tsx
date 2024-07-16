import { MainButton } from "../buttons";
import { BannerContent } from "../_mock";
import Image from 'next/image'
import {Container} from "@/components/container";

const Banner = () => {
    return ( 
        <Container>
            <div className="relative flex w-[1090px] mt-[88px]">
                <Image priority={true} className="absolute z-[-1] right-0 top-0" src={BannerContent.src} alt={BannerContent.title} width={624} height={552}/>
                <div className="flex flex-col mt-[86px] max-w-[700px] mb-[252px]">
                    <h1 className="text-5xl font-bold font-montserrat ">{BannerContent.title}</h1>
                    <h2 className="text-secondText text-4xl mt-[14px] font-montserrat">{BannerContent.subtitle}</h2>
                    <div className="flex mt-6">
                        <MainButton text={BannerContent.buttonText} svgComponent={<BannerContent.buttonSvg />} />      
                    </div>
                </div>
            </div>
        </Container>
    );

}
export default Banner