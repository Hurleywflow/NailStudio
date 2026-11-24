const items = [
	"Manicure",
	"Pedicure",
	"Nail Art",
	"Nail Studio",
	"Gadsden, Alabama",
];

function TickerGroup(): JSX.Element {
	return (
		<div className='flex shrink-0 items-center'>
			{items.map((item) => (
				<span key={item} className='flex items-center'>
					<span className='px-8 font-display text-2xl italic leading-none text-paper/90 sm:text-3xl'>
						{item}
					</span>
					<span className='size-1 rounded-full bg-wine' aria-hidden />
				</span>
			))}
		</div>
	);
}

export function Ticker(): JSX.Element {
	return (
		<div
			data-marquee-wrap
			className='overflow-x-clip border-y border-ink bg-ink py-5'
			aria-hidden
		>
			<div data-marquee>
				<TickerGroup />
				<TickerGroup />
			</div>
		</div>
	);
}
