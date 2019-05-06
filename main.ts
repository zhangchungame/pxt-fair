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
    let arg=0;
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
        pins.digitalWritePin(pin,0);
        pins.digitalWritePin(pin2,0);
        pins.digitalWritePin(pin3,0);
        pins.digitalWritePin(pin4,0);
        pins.digitalWritePin(pin5,0);
        pins.digitalWritePin(pin6,0);
        pins.digitalWritePin(pin7,0);
        pins.digitalWritePin(pin8,0);
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
        // control.onEvent(<number>button, <number>event, handler);
        control.onEvent(MESSAGE_KEY, 16, body);
    }
    //% blockId=BH1750_LED2 block="发消息"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    export function initializeKeyboard2(){
        control.raiseEvent(MESSAGE_KEY, 16);
    }
    //% blockId=BH1750_LED3 block="发消息5"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    export function initializeKeyboard3(){
        control.raiseEvent(MESSAGE_KEY, 15);
    }
    /**
     * Event handlers can have arguments too. You can refer to them using $NAME.
     */

    //% block="on rare $handlerArg1 event"
    //% draggableParameters
    export function onEventWithHandlerArgs(handler: (handlerArg: string) => void) {

    }
    //% blockId=mbit_ultrasonic_car block="ultrasonic return distance(cm)"
    //% color="#006400"
    //% weight=98
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Ultrasonic_Car(): number {
        return 1;
    }
    //% blockId=BH1750_getArg block="获取变量6|pin %pin|pin2 %pin2|pin3 %pin3|pin4 %pin4|pin5 %pin5|pin6 %pin6|pin7 %pin7|pin8 %pin8"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=8
    export function getArg(pin: DigitalPin,pin2: DigitalPin,pin3: DigitalPin,pin4: DigitalPin,pin5: DigitalPin,pin6: DigitalPin,pin7: DigitalPin,pin8: DigitalPin): number {
        // pins.digitalWritePin(pin,1);

        pins.digitalWritePin(pin,0);
        pins.digitalWritePin(pin2,0);
        pins.digitalWritePin(pin3,0);
        pins.digitalWritePin(pin4,0);
        pins.digitalWritePin(pin5,0);
        pins.digitalWritePin(pin6,0);
        pins.digitalWritePin(pin7,0);
        pins.digitalWritePin(pin8,0);
        pins.digitalWritePin(pin, 1);
        if(pins.digitalReadPin(pin5)==1){
            return 1;
        }
        if(pins.digitalReadPin(pin6)==1){
            return 2;
        }
        if(pins.digitalReadPin(pin7)==1){
            return 3;
        }
        if(pins.digitalReadPin(pin8)==1){
            return 4;
        }
        pins.digitalWritePin(pin, 0);

        pins.digitalWritePin(pin2, 1);
        if(pins.digitalReadPin(pin5)==1){
            return 5;
        }
        if(pins.digitalReadPin(pin6)==1){
            return 6;
        }
        if(pins.digitalReadPin(pin7)==1){
            return 7;
        }
        if(pins.digitalReadPin(pin8)==1){
            return 8;
        }
        pins.digitalWritePin(pin2, 0);


        pins.digitalWritePin(pin3, 1);
        if(pins.digitalReadPin(pin5)==1){
            return 9;
        }
        if(pins.digitalReadPin(pin6)==1){
            return 10;
        }
        if(pins.digitalReadPin(pin7)==1){
            return 11;
        }
        if(pins.digitalReadPin(pin8)==1){
            return 12;
        }
        pins.digitalWritePin(pin3, 0);

        pins.digitalWritePin(pin4, 1);
        if(pins.digitalReadPin(pin5)==1){
            return 13;
        }
        if(pins.digitalReadPin(pin6)==1){
            return 14;
        }
        if(pins.digitalReadPin(pin7)==1){
            return 15;
        }
        if(pins.digitalReadPin(pin8)==1){
            return 16;
        }
        pins.digitalWritePin(pin4, 0);
        return 0;
    }

    //% blockId=BH1750_geag block="因角质|pin %pin"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function getAsrg(pin: DigitalPin): number {

        return pins.digitalReadPin(pin);
    }
}
 