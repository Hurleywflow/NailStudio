import { Contact } from "@/components/site/Contact";
import { DriftGallery } from "@/components/site/DriftGallery";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { PanGallery } from "@/components/site/PanGallery";
import { Reviews } from "@/components/site/Reviews";
import { Services } from "@/components/site/Services";
import { StudioStrip } from "@/components/site/StudioStrip";
import { Ticker } from "@/components/site/Ticker";
import {
	manicureGallery,
	nailArtGallery,
	pedicureGallery,
	services,
} from "@/lib/site";

const manicure = services[0];
const pedicure = services[1];
const nailArt = services[2];

const Home = (): JSX.Element => {
	return (
		<main id='main' className='bg-paper'>
			<Hero />
			<Ticker />
			<Manifesto />
			<Services />

			<PanGallery
				id='manicure'
				index='03'
				eyebrow='Manicure'
				title='Shaped, softened, finished by hand.'
				copy={manicure.copy}
				images={manicureGallery}
			/>

			<DriftGallery
				id='pedicure'
				index='04'
				eyebrow='Pedicure'
				title='A reset for the ground you walk on.'
				copy={pedicure.copy}
				images={pedicureGallery}
			/>

			<PanGallery
				id='nail-art'
				index='05'
				eyebrow='Nail Art'
				title='A small canvas, taken seriously.'
				copy={nailArt.copy}
				images={nailArtGallery}
				tone='ink'
				reverse
			/>

			<Reviews />
			<StudioStrip />
			<Contact />
		</main>
	);
};

export default Home;
