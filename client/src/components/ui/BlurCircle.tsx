import type { BlurCircleInterface } from "../../types";

const BlurCircle = (props: BlurCircleInterface) => {
    const top: string = props.top ?? 'auto';
    const left: string = props.left ?? 'auto';
    const bottom: string = props.bottom ?? 'auto';
    const right: string = props.right ?? 'auto';
    return (
        <div className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-primary/30 blur-3xl"
        style={{top: top, left: left, right: right, bottom: bottom}}/>
    )
}
export default BlurCircle
