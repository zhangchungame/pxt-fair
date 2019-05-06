/**
 * makecode BH1750 Digital Ambient Light Sensor Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

//% color="#006400" weight=20 icon="\uf1b9"
namespace keyboard44 {
    let MESSAGE_KEY = 0x100;
    let pressStr="";
    //% blockId=keyboard44_LED1 block="初始化|pin %pin|pin2 %pin2|pin3 %pin3|pin4 %pin4|pin5 %pin5|pin6 %pin6|pin7 %pin7|pin8 %pin8"
    //% weight=5
    //% blockGap=8
    //% color="#C814B8"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
    export function initializeKeyboard(pin: DigitalPin,pin2: DigitalPin,pin3: DigitalPin,pin4: DigitalPin,pin5: DigitalPin,pin6: DigitalPin,pin7: DigitalPin,pin8: DigitalPin): void {
        basic.forever(() => {
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
                pressStr="1";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                pressStr="2";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin7)==1){
                pressStr="3";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin8)==1){
                pressStr="A";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            pins.digitalWritePin(pin, 0);

            pins.digitalWritePin(pin2, 1);
            if(pins.digitalReadPin(pin5)==1){
                pressStr="4";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                pressStr="5";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin7)==1){
                pressStr="6";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin8)==1){
                pressStr="B";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            pins.digitalWritePin(pin2, 0);


            pins.digitalWritePin(pin3, 1)
            if(pins.digitalReadPin(pin5)==1){
                pressStr="7";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                pressStr="8";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin7)==1){
                pressStr="9";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin8)==1){
                pressStr="C";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            pins.digitalWritePin(pin3, 0);

            pins.digitalWritePin(pin4, 1);
            if(pins.digitalReadPin(pin5)==1){
                pressStr="*";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                pressStr="0";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin7)==1){
                pressStr="#";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin8)==1){
                pressStr="D";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            pins.digitalWritePin(pin4, 0)
        });
    }



    //% blockId=keyboard44_getArg block="获取变量6|pin %pin|pin2 %pin2|pin3 %pin3|pin4 %pin4|pin5 %pin5|pin6 %pin6|pin7 %pin7|pin8 %pin8"
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

    /**
     * Registers code to run when the radio receives a number.
     */
    //% help=radio/on-received-number
    //% blockId=radio_on_number_drag block="on radio received" blockGap=16
    //% useLoc="radio.onDataPacketReceived" draggableParameters=reporter
    export function onReceivedNumber(cb: (receivedNumber2: string) => void) {
        control.onEvent(MESSAGE_KEY, 1, () => {
            cb(pressStr);
        });
    }
    //%blockId=send_message block="sendMessage"
    export function sendMessage(){
        pressStr="ss";
        control.raiseEvent(MESSAGE_KEY, 16);
    }
}
 