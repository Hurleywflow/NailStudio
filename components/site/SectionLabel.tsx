import { cn } from "@/lib/utils";

export function SectionLabel({
	index,
	children,
	inverted = false,
	className,
}: {
	index: string;
	children: React.ReactNode;
	inverted?: boolean;
	className?: string;
}): JSX.Element {
	return (
		<div className={cn("flex items-center gap-4", className)}>
			<span
				className={cn(
					"text-eyebrow font-medium",
					inverted ? "text-paper/60" : "text-wine",
				)}
			>
				{index}
			</span>
			<span
				className={cn(
					"h-px w-8",
					inverted ? "bg-paper/25" : "bg-line",
				)}
			/>
			<span
				className={cn(
					"text-eyebrow uppercase",
					inverted ? "text-paper/70" : "text-clay",
				)}
			>
				{children}
			</span>
		</div>
	);
}
