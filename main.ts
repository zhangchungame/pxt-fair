/**
 * makecode BH1750 Digital Ambient Light Sensor Package.
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

//% color="#006400" weight=20 icon="\uf1b9"
namespace keyboard44 {
    let MESSAGE_KEY = 0x100;
    let pressStr="";
    //% blockId=keyboard44_init block="初始化|pin %pin|pin2 %pin2|pin3 %pin3|pin4 %pin4|pin5 %pin5|pin6 %pin6|pin7 %pin7|pin8 %pin8"
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
                while(pins.digitalReadPin(pin5)==1){
                    basic.pause(10);
                }
                pressStr="1";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                while(pins.digitalReadPin(pin6)==1){
                    basic.pause(10);
                }
                pressStr="2";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin7)==1){
                while(pins.digitalReadPin(pin7)==1){
                    basic.pause(10);
                }
                pressStr="3";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin8)==1){
                while(pins.digitalReadPin(pin8)==1){
                    basic.pause(10);
                }
                pressStr="A";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            pins.digitalWritePin(pin, 0);

            pins.digitalWritePin(pin2, 1);
            if(pins.digitalReadPin(pin5)==1){
                while(pins.digitalReadPin(pin5)==1){
                    basic.pause(10);
                }
                pressStr="4";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                while(pins.digitalReadPin(pin6)==1){
                    basic.pause(10);
                }
                pressStr="5";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin7)==1){
                while(pins.digitalReadPin(pin7)==1){
                    basic.pause(10);
                }
                pressStr="6";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin8)==1){
                while(pins.digitalReadPin(pin8)==1){
                    basic.pause(10);
                }
                pressStr="B";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            pins.digitalWritePin(pin2, 0);


            pins.digitalWritePin(pin3, 1)
            if(pins.digitalReadPin(pin5)==1){
                while(pins.digitalReadPin(pin5)==1){
                    basic.pause(10);
                }
                pressStr="7";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                while(pins.digitalReadPin(pin6)==1){
                    basic.pause(10);
                }
                pressStr="8";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin7)==1){
                while(pins.digitalReadPin(pin7)==1){
                    basic.pause(10);
                }
                pressStr="9";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin8)==1){
                while(pins.digitalReadPin(pin8)==1){
                    basic.pause(10);
                }
                pressStr="C";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            pins.digitalWritePin(pin3, 0);

            pins.digitalWritePin(pin4, 1);
            if(pins.digitalReadPin(pin5)==1){
                while(pins.digitalReadPin(pin5)==1){
                    basic.pause(10);
                }
                pressStr="*";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin6)==1){
                while(pins.digitalReadPin(pin6)==1){
                    basic.pause(10);
                }
                pressStr="0";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin7)==1){
                while(pins.digitalReadPin(pin7)==1){
                    basic.pause(10);
                }
                pressStr="#";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            if(pins.digitalReadPin(pin8)==1){
                while(pins.digitalReadPin(pin8)==1){
                    basic.pause(10);
                }
                pressStr="D";
                control.raiseEvent(MESSAGE_KEY, 1);
            }
            pins.digitalWritePin(pin4, 0)
        });
    }


    /**
     * Registers code to run when the radio receives a number.
     */
    //% blockId=keyboard44_event block="键盘接收到字符" blockGap=16
    //% color="#C814B8"
    export function onReceivedNumber(cb: (pressString: string) => void) {
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
 