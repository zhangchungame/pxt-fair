/**
 * makecode BH1750 Digital Ambient Light Sensor Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

//% color="#006400" weight=20 icon="\uf1b9"
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
    let MESSAGE_KEY = 0x100;
    let a=0;
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
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                control.raiseEvent(MESSAGE_KEY, 2);
            }
            if(pins.digitalReadPin(pin7)==1){
                control.raiseEvent(MESSAGE_KEY, 3);
            }
            if(pins.digitalReadPin(pin8)==1){
                control.raiseEvent(MESSAGE_KEY, 4);
            }
            pins.digitalWritePin(pin, 0)

            pins.digitalWritePin(pin2, 1)
            if(pins.digitalReadPin(pin5)==1){
                control.raiseEvent(MESSAGE_KEY, 5);
            }
            if(pins.digitalReadPin(pin6)==1){
                control.raiseEvent(MESSAGE_KEY, 6);
            }
            if(pins.digitalReadPin(pin7)==1){
                control.raiseEvent(MESSAGE_KEY, 7);
            }
            if(pins.digitalReadPin(pin8)==1){
                control.raiseEvent(MESSAGE_KEY, 8);
            }
            pins.digitalWritePin(pin2, 0)


            pins.digitalWritePin(pin3, 1)
            if(pins.digitalReadPin(pin5)==1){
                control.raiseEvent(MESSAGE_KEY, 9);
            }
            if(pins.digitalReadPin(pin6)==1){
                control.raiseEvent(MESSAGE_KEY, 10);
            }
            if(pins.digitalReadPin(pin7)==1){
                control.raiseEvent(MESSAGE_KEY, 11);
            }
            if(pins.digitalReadPin(pin8)==1){
                control.raiseEvent(MESSAGE_KEY, 12);
            }
            pins.digitalWritePin(pin3, 0)

            pins.digitalWritePin(pin4, 1)
            if(pins.digitalReadPin(pin5)==1){
                control.raiseEvent(MESSAGE_KEY, 13);
            }
            if(pins.digitalReadPin(pin6)==1){
                control.raiseEvent(MESSAGE_KEY, 14);
            }
            if(pins.digitalReadPin(pin7)==1){
                control.raiseEvent(MESSAGE_KEY, 15);
            }
            if(pins.digitalReadPin(pin8)==1){
                control.raiseEvent(MESSAGE_KEY, 16);
            }
            pins.digitalWritePin(pin4, 0)
        });
    }


    //% weight=93 blockId=onGetNumber block="on getNumber"
    export function onStartbit_getAngle( body: Action) {
        control.onEvent(MESSAGE_KEY, a, body);
    }


}
 