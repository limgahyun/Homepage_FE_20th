import Background from "@/app/components/Background";
import FAQ from "./FAQ";
import Notice from "./notice";
import RepNotice from "./rep_notice";

export default function Recruit() {
    return (
        <div className="s:h-[3600px] h-[3200px] flex items-center justify-center ">
            <Background>
            <div className="font-pretendard">
                <RepNotice/>
                <Notice/>
                <FAQ/>
            </div>
            </Background>
        </div>
    )
}