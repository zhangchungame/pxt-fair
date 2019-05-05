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
        addr=1;
    }

    export enum enLED1 {

        //% blockId="OFF" block="灭"
        OFF = 0,
        //% blockId="ON" block="亮"
        ON =1
    }
    //% blockId=BH1750_LED1 block="LED1|pin %pin|value %value"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function LED1(pin: DigitalPin, value: enLED1): void {

        pins.digitalWritePin(pin, value);

    }

    //% weight=93 blockId=onStartbit_getAngle block="on Startbit|%servo|get angle"
    export function onStartbit_getAngle( body: Action) {
        // control.onEvent(MESSAGE_ANGLE, servo, body);
    }


}
 