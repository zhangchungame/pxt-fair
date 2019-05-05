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
    //% blockId=BH1750_LED1 block="初始化|pin %pin|pin2 %pin|pin3 %pin|pin4 %pin|pin5 %pin|pin6 %pin|pin7 %pin|pin8 %pin"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function initializeKeyboard(pin: DigitalPin,pin2: DigitalPin,pin3: DigitalPin,pin4: DigitalPin,pin5: DigitalPin,pin6: DigitalPin,pin7: DigitalPin,pin8: DigitalPin): void {
        basic.forever(() => {
            pins.digitalWritePin(pin, 1)
            if(pins.digitalReadPin(pin5)==1){
                basic.showNumber(1)
            }
            if(pins.digitalReadPin(pin6)==1){
                basic.showNumber(2)
            }
            if(pins.digitalReadPin(pin7)==1){
                basic.showNumber(3)
            }
            if(pins.digitalReadPin(pin8)==1){
                basic.showNumber(4)
            }
            pins.digitalWritePin(pin, 0)

            pins.digitalWritePin(pin2, 1)
            if(pins.digitalReadPin(pin5)==1){
                basic.showNumber(5)
            }
            if(pins.digitalReadPin(pin6)==1){
                basic.showNumber(6)
            }
            if(pins.digitalReadPin(pin7)==1){
                basic.showNumber(7)
            }
            if(pins.digitalReadPin(pin8)==1){
                basic.showNumber(8)
            }
            pins.digitalWritePin(pin2, 0)


            pins.digitalWritePin(pin3, 1)
            if(pins.digitalReadPin(pin5)==1){
                basic.showNumber(9)
            }
            if(pins.digitalReadPin(pin6)==1){
                basic.showNumber(10)
            }
            if(pins.digitalReadPin(pin7)==1){
                basic.showNumber(11)
            }
            if(pins.digitalReadPin(pin8)==1){
                basic.showNumber(12)
            }
            pins.digitalWritePin(pin3, 0)

            pins.digitalWritePin(pin4, 1)
            if(pins.digitalReadPin(pin5)==1){
                basic.showNumber(13)
            }
            if(pins.digitalReadPin(pin6)==1){
                basic.showNumber(14)
            }
            if(pins.digitalReadPin(pin7)==1){
                basic.showNumber(15)
            }
            if(pins.digitalReadPin(pin8)==1){
                basic.showNumber(16)
            }
            pins.digitalWritePin(pin4, 0)
        });
    }


    //% weight=93 blockId=onGetNumber block="on getNumber|pin %pin|pin2 %pin|pin3 %pin|pin4 %pin|pin5 %pin|pin6 %pin|pin7 %pin|pin8 %pin"
    export function onStartbit_getAngle( pin: DigitalPin,pin2: DigitalPin,pin3: DigitalPin,pin4: DigitalPin,pin5: DigitalPin,pin6: DigitalPin,pin7: DigitalPin,pin8: DigitalPin,body: Action) {
        // control.onEvent(MESSAGE_ANGLE, servo, body);
    }


}
 