import { Navigate, Outlet, Route } from "react-router-dom";
import AnimatedRoutes from "../navigation/animated-routes.component";
import RegistrationPage from "src/pages/AuthPage/Registration/RegistrationPage";
import LoginPage from "src/pages/AuthPage/Login/LoginPage";
import ForgotPassword from "src/pages/AuthPage/ForgotPassword/ForgotPassword";
import { PagesRoutes } from "./ProjectRoutesData";
import RootLayout from "src/pages/RootLayout";
// import { ErrorPage } from "src/pages";
import { getCookie } from "../utils";


const ProjectRoutes = () => {
	let token: null | undefined | string = '';
	localStorage.getItem('domain');

	if (typeof window !== 'undefined') {
		token = localStorage.getItem('token')
	}
	const PrivateRoutesProject = () => {
		return token ? <Outlet /> : <Navigate to='/login' />;
	};
	const PrivateRoutesLoginPage = () => {
		return !token ? <Outlet /> : <Navigate to='home' />;
	};
	
	return (
		<AnimatedRoutes>
			<Route element={<PrivateRoutesLoginPage />}>
				<Route path='/' element={<Navigate to={token ? '/home' : '/login'} />} />
				<Route path='/register' element={<RegistrationPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/forgot_password' element={<ForgotPassword />} />

				<Route path='/' element={<LoginPage />} />
			</Route>

			{/* Dashboard */}

			<Route element={<PrivateRoutesProject />}>
				{PagesRoutes.map((route) => {
					if (route?.children && route?.children?.length > 0) {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<RootLayout>{route.element}</RootLayout>}
							>
								{route.children?.map((e) => (
									<Route key={e.path} path={e.path} element={e.element} />
								))}
							</Route>
						);
					} else
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<RootLayout>{route.element}</RootLayout>}
							/>
						);
				})}
			</Route>

			{/* Other */}
			{/* <Route path='/*' element={<ErrorPage />} /> */}
		</AnimatedRoutes>
	);
};

export default ProjectRoutes;

////////////////////////////////////////////////////////////////////////////////////////////


// import { Navigate, Outlet, Route } from "react-router-dom";
// import AnimatedRoutes from "../navigation/animated-routes.component";
// import RegistrationPage from "src/pages/AuthPage/Registration/RegistrationPage";
// import LoginPage from "src/pages/AuthPage/Login/LoginPage";
// import ForgotPassword from "src/pages/AuthPage/ForgotPassword/ForgotPassword";
// import { PagesRoutes } from "./ProjectRoutesData";
// import RootLayout from "src/pages/RootLayout";
// import { ErrorPage } from "src/pages";
// import { getCookie } from "../utils";


// const ProjectRoutes = () => {
// 	let authToken: null | undefined | string = '';
// 	let token: null | undefined | string = '';
// 	let authDomain = getCookie('authDomain');
// 	const isLocalHost = window.location.hostname.includes('localhost');
// 	const isMainDomain = window.location.hostname === "my.dookan.net";
// 	const isSubdomain = window.location.hostname.endsWith("dookan.net") && !isMainDomain;


// 	if (typeof window !== 'undefined') {
// 		authToken = getCookie('authToken');
// 	}

	
// 	if (isLocalHost) {
// 		token = localStorage.getItem('token');
// 	}

// 	console.log("authToken",authToken);
// 	console.log("authDomain", authDomain);

// 	const PrivateRoutesProject = () => {
// 		return (isSubdomain && authToken) || isLocalHost  ? <Outlet /> : <Navigate to='/login' />;
// 	};
// 	const PrivateRoutesLoginPage = () => {
// 		return (isMainDomain && !authToken) || isLocalHost ? <Outlet /> : <Navigate to='/home' />;
// 	};


// 	return (
// 		<AnimatedRoutes>
// 			<Route element={<PrivateRoutesLoginPage />}>
// 				<Route path='/' element={<Navigate to={authToken ? '/home' : '/login'} />} />
// 				<Route path='/register' element={<RegistrationPage />} />
// 				<Route path='/login' element={<LoginPage />} />
// 				<Route path='/forgot_password' element={<ForgotPassword />} />

// 				<Route path='/' element={<LoginPage />} />
// 			</Route>

// 			{/* Dashboard */}

// 			<Route element={<PrivateRoutesProject />}>
// 				{PagesRoutes.map((route) => {
// 					if (route?.children && route?.children?.length > 0) {
// 						return (
// 							<Route
// 								key={route.path}
// 								path={route.path}
// 								element={<RootLayout>{route.element}</RootLayout>}
// 							>
// 								{route.children?.map((e) => (
// 									<Route key={e.path} path={e.path} element={e.element} />
// 								))}
// 							</Route>
// 						);
// 					} else
// 						return (
// 							<Route
// 								key={route.path}
// 								path={route.path}
// 								element={<RootLayout>{route.element}</RootLayout>}
// 							/>
// 						);
// 				})}
// 			</Route>

// 			{/* Other */}
// 			<Route path='/*' element={<ErrorPage />} />
// 		</AnimatedRoutes>
// 	);
// };

// export default ProjectRoutes;




