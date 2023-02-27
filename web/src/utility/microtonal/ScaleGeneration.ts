import {ScaleNote} from "./notes/ScaleNote";
import {scaleFromCents, scaleFromRatios} from "./Scale";
import {CentNote} from "./notes/CentNote";
import {RatioNote} from "./notes/RatioNote";

    export function generateEqualTemperedScale(numberOfNotes: number) {
    let ratios = [];

    // Remember, an N-note scale has N-1 notes before wrapping around
    for (let i = 0; i < numberOfNotes - 1; i++) {
        ratios.push(`${i}/${numberOfNotes}`);
    }

    return scaleFromRatios(ratios, `${numberOfNotes}-note Equal Tempered Scale`);
}

const logOf2 = Math.log(2)

export function frequencyToCents(tuningFrequency: number, otherFrequency: number) {
    return (1200 * Math.log(otherFrequency / tuningFrequency)) / logOf2;
}

export function frequenciesToScaleNote(tuningFrequency: number, notes: Array<number>) {
    let scaleNotes = [];

    for (const note of notes) {
        scaleNotes.push(new CentNote(frequencyToCents(tuningFrequency, note)));
    }

    return scaleNotes;
}
