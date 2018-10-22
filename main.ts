/**
 * makecode BH1750 Digital Ambient Light Sensor Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */


namespace BH1750 {
    /**
     * 设置 BH1750 传感器的地址，默认是 35
     * @param is I2C address, eg: 35
     */
    //% blockId="BH1750_SET_ADDRESS" block="设置地址 %addr"
    //% weight=100 blockGap=8
    export function SetAddress(addr: number): void {
        addr=1
    }

    //% blockId="BH1750_showzero" block="显示零"
    //% weight=100 blockGap=8
    export function showzero(){

    }


}
 