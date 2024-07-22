import Image from "next/image"
import { MainButton } from "../buttons"
import { CartSvg } from "@/components/icons"
const Layout = () => {
    return (
       <div className="w-[300px] h-max-[482px] bg-products py-[22px] px-[24px] flex flex-col rounded-3xl items-center gap-[14px]">
        <Image src="https://lh3.googleusercontent.com/fife/ALs6j_HBQ-OyORn91SF135ubJRNXjS4QYfghYNpL6gWJpCBl8WN1yYGwl5YJ5EZSB_Lr3S0LZ44PA9MbhTgHphKWFQS8e3bzS33ILehUtRKD31bzE9XB7keSBrliJqcDzdlmmtVCcdoxQaRn-VV5JQihBMZUok0j1i2Q80le91L2yeUYaqR8b_uw6sobwvimIRt-u9pQSvpgNIyXikVrKyndOYkw0Jn-m6fzBJG10H1VAMsmuGVmshAdlP81C_3LWkWSgVF-MUGzcdDTVzMPweTNJqx9AIZg2IEotR7k8mbxKlU53w0FUwQDr7XVZ_57Len4KIt2-1dxppgAaDKoOQlbGL_1YZJr8gRvLClu8pFsoAiBucgJqcKSzTqVY-t6J0Mgri13RD9ImwvyAyovK73hWlUOASbfLyvB10Ifi_fbukev4-OLVHw6pfYTkoTrPSrCRpKWvA9HA6gGM-xViTC8Xhgu93VMkvugmCKLCnvFCWo4STDZY2g2IGIai5ritNKYF92eJRHT4_joCyPKYeyHfgxRt3CEiHJMVxUxVzFIPkA7bTRdNtKJMBxyvB42VnDLssAOafdtXfUfCsFMfxuGEmlcxAie5YQ6_Aa5FxDY-5YS3oc4LDMAJPrfETYGQiLlrhrYjmrxrMmF7VTpn6UVIlhY0jLOhP1kh2RGbaJsC3sGNcMg0AMnb-b6xe_5TKp_z-O3-HWEXJjdQaZHCyCeAwVxBT_AA0tP7vXwkZOjXBkWRLChnOpMN4yFSJWRBESk9cLnwlGwdS6CBvFCkZcEYKYwPYBVF2mDFv05Z-x_s_xwye9WbFcS3maNUENw0zhmD3uSZT0XmWKlEmAnLCpLEYMm8tFNhqI5nQ6izQTuIa8BhsFWErDsoeDf6xkCaXu1XuINdmqfAxevH_vG5Xnb5Q851DXklWJ3iMTH2_oqAoVyJhzMWX4uMi1Trbauj-c0s8YXdu92pSxnvYfB_U06UjHlJnKohM_HkgXtsL_ibXbPi9S-7yMFUTrmXxG7a_agpsGWrwFoxc4c9WmDK1PqVHOPcppi0UVuzUH84DiSO0OG6tkRdpmpFJ16yBeFQv99NTEQwt7te6tSbEKnHjjdnxuM79ujnirD3-a7yLQ9y5VAFEjBbPjpQlYXQrCNMEA0FFrIw_ygg50c7BP8B8Zy0E9IsjwP5paQ1Id8Twr0j777mKRIo1oE-JHk4RNNTikPg34p5Hc64_lyX3OlzZYs48b0l3XJjoA_j1Bkv7DKm1riAKEWIlANLZp9g_yta1QrdtP6VgoogmzlaXtW5kWRzX_M99fFopgTEY22jCE18SUGiZh8jKXbiI8mRo45WSCcSSvtDxNlCgfiXQwvkKDZLaDsMmyMrLZw_B__FBLX6TYz7WgFjEMq9TtlOWxVK4YIZ09RCEvGtMHO_oA-neGS2EdzA2h8kR9JaJDbvO5W5y_6cEKi-URcoAADzDKAqOB84wXGRw4yNkenoJp3DT3GBm9HSjaKTD2EHUwERn1gg9gFuFbNloFxj1Ax62CHVpKmQXpBrlgQ52rJVIhRgmgfvOxc8Hed2BfmWQWHeLX0RaBxl7IeUWA9pMZD4XutHeBCamGwkg1_MCPVWiEjMgi9GOrnVDJ79QqhG3l0NWWfrKQCdfXGe0QM3tTSwUk=w1151-h910" alt="products" width={250} height={300}/>
            <span className="text-2xl font-nunito text-benefits">Moltis M2</span>
            <div className="text-2xl font-nunito text-black">0000 грн</div>
            <div className="">
                <MainButton text="Купити" svgComponent={<CartSvg />}/>
            </div>
       </div>
    )
}

export default Layout