import {KeyboardShortcuts, Piano as ReactPiano} from "react-piano";
import * as React from "react";
import {ScaleConfig} from "../../utility/MicrotonalConfig";
import {useEffect} from "react";
import {createPianoKeyboardShortcuts, KeyShortcut} from "../../utility/microtonal/PianoKeyMapping";

// The rootkey here is given differently so we can display the keyboard in a different place than the configured root
// note. Ex. A4 == 440 but keyboard starts a C3
export default function (props: {keyMapping: Record<number, number>, keyboardShortcuts: Array<KeyShortcut>, scaleConfig: ScaleConfig, rootKey: number}) {
    let keyboardShortcuts = createPianoKeyboardShortcuts(props.rootKey, props.scaleConfig.keysPerOctave);

    useEffect(() => {
            keyboardShortcuts = createPianoKeyboardShortcuts(props.rootKey, props.scaleConfig.keysPerOctave)
       },
        [props.scaleConfig]
    )

    // Configuring ReactPiano to handle the odd key configuring is just more trouble than it's worth
    // We use the keymapping to convert from the incoming MIDI number given by it to the proper MIDI note
    const translateNote = (note: number) => {
        let mapping = props.keyMapping[(note - props.rootKey) % props.scaleConfig.keysPerOctave];
        let octaveAdditive = Math.floor((note - props.rootKey) / props.scaleConfig.keysPerOctave) * props.scaleConfig.scale.notes.length;
        return mapping + octaveAdditive;
    }

    return <ReactPiano
        // activeNotes={synthesizer.activeNotes}
        className="mx-auto my-auto"
        noteRange={{ first: props.rootKey, last: props.rootKey + props.scaleConfig.keysPerOctave - 1 }}
        playNote={(note: any) => {console.log(translateNote(note))}}
        stopNote={() => {}}
        keyboardShortcuts={keyboardShortcuts}
    />
}