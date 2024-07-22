import BenefitCards  from "./benefit-cards";
import { Title } from "../title";

const Benefits = () => {

    return (

        <div id="benefits" className="flex flex-col items-center">
            <Title title="Переваги" />
            <BenefitCards />
        </div>

    )
}
export default Benefits