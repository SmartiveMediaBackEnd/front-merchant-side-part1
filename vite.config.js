import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
});












// import { defineConfig } from 'vite';

// export default defineConfig({
// 	build: {
// 		rollupOptions: {
// 			output: {
// 				manualChunks: {
// 					vendor: ['react', 'react-dom'], // Example to split large dependencies
// 				},
// 			},
// 		},
// 	},
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc'; 
// import path from 'path';


// export default defineConfig({
// 	plugins: [react()],
// 	resolve: {
// 		alias: {
// 			src: path.resolve(__dirname, './src'), 
// 		},
// 	},
// 	build: {
// 		rollupOptions: {
// 			output: {
// 				manualChunks: {
				
// 					vendor: ['react', 'react-dom'], 
// 				},
// 			},
// 		},
// 	},
// });
