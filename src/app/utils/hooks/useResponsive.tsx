import { useMediaQuery } from 'react-responsive';
// Usage Example
// const Component = () => {
//   const { xs, sm, md, lg, xl } = useResponsive();
//   return (
//     <div>
//       {xs && <p>Extra small screen (xs)</p>}
//       {sm && <p>Small screen (sm)</p>}
//       {md && <p>Medium screen (md)</p>}
//       {lg && <p>Large screen (lg)</p>}
//       {xl && <p>Extra large screen (xl)</p>}
//     </div>
//   );
// };
const breakpoints = {
	xs: '(max-width: 599px)',
	sm: '(min-width: 599px) and (max-width: 768px)',
	md: '(min-width: 768px) and (max-width: 992px)',
	lg: '(min-width: 992px) and (max-width: 1200px)',
	xl: '(min-width: 1200px)',
};

type Breakpoint = keyof typeof breakpoints;

interface MediaQueryResults {
	xs: boolean;
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
}

// Custom Hook
const useResponsive = (): MediaQueryResults => {
	const mediaQueries = Object.keys(breakpoints).reduce((acc, key) => {
		const breakpointKey = key as Breakpoint;
		acc[breakpointKey] = useMediaQuery({ query: breakpoints[breakpointKey] });
		return acc;
	}, {} as MediaQueryResults);

	return mediaQueries;
};

export default useResponsive;

// type Breakpoints = {
//  isSmall: boolean;
// 	isLarge: boolean;
// 	isMedium: boolean;
// 	isExtraSmall: boolean;
// 	isExtraLarge: boolean;
// };

// const useResponsive = (): Breakpoints => {
// 	const isExtraSmall = useMediaQuery({ query: '(max-width: 576px)' });
// 	const isSmall = useMediaQuery({ query: '(min-width: 577px) and (max-width: 768px)' });
// 	const isMedium = useMediaQuery({ query: '(min-width: 769px) and (max-width: 992px)' });
// 	const isLarge = useMediaQuery({ query: '(min-width: 993px) and (max-width: 1200px)' });
// 	const isExtraLarge = useMediaQuery({ query: '(min-width: 1201px)' });

// 	return { isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge };
// };
