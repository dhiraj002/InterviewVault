interface ProgressBarProps {
    progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="w-full bg-gray-800 h-1">
            <div className="h-1 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
    );
}
