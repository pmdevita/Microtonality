import * as React from "react";
import Oscillator from "../../ui/Oscillator";
import Knobs from "../../ui/Knobs";

interface SynthProps {
}

const textClassName = "2xl:text-xl xl:text-lg lg:text-md md:text-sm sm:text-xs xs:text-xs font-agrandir-wide uppercase px-5 py-3 rounded block leading-normal text-white text-center"

export default function SynthSettings(props: SynthProps) {

    return  <div className="h-full w-full bottom-0 border-gold border-t-2 border-l-2 rounded-tl-xl bg-bglight">
                <div className="flex">
                    <div className="mt-[1%] flex flex-col w-1/3 justify-around">
                        <div className="flex">
                            <Knobs knobLabel="Attack" onChange={(value) => console.log(value)} />
                            <Knobs knobLabel="Decay" onChange={(value) => console.log(value)} />
                        </div>
                        <div className="flex">
                            <Knobs knobLabel="Sustain" onChange={(value) => console.log(value)} />
                            <Knobs knobLabel="Release" onChange={(value) => console.log(value)} />
                        </div>
                    </div>

                    <div className="flex flex-row ml-[4%]">
                        <Oscillator />
                        <Oscillator />
                        <Oscillator />
                        <Oscillator />
                        <Oscillator />
                        <Oscillator />
                        <Oscillator />
                    </div>
                </div>
            </div>;
}

