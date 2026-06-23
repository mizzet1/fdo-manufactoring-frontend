
interface DotPulseProps {
    ok: boolean
}

export function DotPulse({ ok }: DotPulseProps) {
    const color = ok ? "bg-primary" : "bg-secondary";

    return (
        <span className="relative flex size-3">
            <span className={"absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 " + color}></span>
            <span className={"relative inline-flex size-3 rounded-full " + color}></span>
        </span>
    );
}

export default DotPulse;
