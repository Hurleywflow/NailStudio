
import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
};
export default MillionLint.next({
  rsc: true
})(nextConfig);
