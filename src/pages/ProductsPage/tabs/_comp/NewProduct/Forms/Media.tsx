// import { useTranslation } from 'react-i18next';
// import TabsBuilder, { TabsBuilderItem } from 'src/app/components/shared/builders/Tabs';
// import { Card, CardContent } from 'src/app/components/ui/card';
// import FileInput, { FileInputImage, FileInputVideo, MultiFileInput, MultiVideoInput } from 'src/app/components/ui/file-input';
// import FormField from 'src/app/components/ui/form/field';
// import { TfiUpload } from 'react-icons/tfi';

// import { UseFormReturn } from 'react-hook-form';
// import { AddProductSchemaSchemaValues } from '../Pages/Configurable/utils';


// interface FileElemProps {
// 	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
// 	name: 'threeDModelMedia' | 'threeSixtyViewMedia';
// 	accept: { [key: string]: string[] };
// 	title: React.ReactNode;
// }

// function FileElem({ formStore, name, accept, title }: FileElemProps) {
// 	const { t } = useTranslation();

// 	const acceptString = Object.keys(accept)
// 		.map((key) => `${key},${accept[key].join(',')}`)
// 		.join(',');
// 	return;
// }

// const tabsItems: TabsBuilderItem<{ formStore: UseFormReturn<AddProductSchemaSchemaValues> }>[] = [
// 	{
// 		title: 'Images',
// 		Elem: ({ formStore }) => <MultiFileInput formStore={formStore}
// 			name='image' array={true} />
// 	},
// 	{
// 		title: 'Video',
// 		Elem: ({ formStore }) => <MultiVideoInput formStore={formStore}
// 			name='videos' array={true} />,
// 	},
// 	{
// 		title: '360o View',
// 		Elem: ({ formStore }) => {
// 			const { t } = useTranslation();
// 			return (
// 				<FileElem
// 					formStore={formStore}
// 					name='threeSixtyViewMedia'
// 					accept={{
// 						'image/*': ['.jpg', '.jpeg', '.png'],
// 						'video/*': ['.mp4', '.webm'],
// 					}}
// 					title={
// 						<>
// 							{t('Upload 360')}
// 							<sup>o</sup> {t('View')}
// 						</>
// 					}
// 				/>
// 			);
// 		},
// 		isInProgress: true,
// 	},
// 	{
// 		title: '3D View',
// 		Elem: ({ formStore }) => {
// 			const { t } = useTranslation();
// 			return (
// 				<FileElem
// 					formStore={formStore}
// 					name='threeDModelMedia'
// 					accept={{ '': ['.obj', '.stl', '.fbx', '.glb', '.gltf', '.dae'] }}
// 					title={t('Upload 3D View')}
// 				/>
// 			);
// 		},
// 		isInProgress: true,
// 	},
// ];

// interface ProductFormMediaSectionProps {
// 	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
// 	id?: string;
// }

// export default function ProductFormMediaSection({ formStore, id }: ProductFormMediaSectionProps) {
// 	return (
// 		<Card id={id} className='h-[300px]'>
// 			<CardContent>
// 				<TabsBuilder items={tabsItems} sharedProps={{ formStore }} />
// 			</CardContent>
// 		</Card >
// 	);
// }
///////////////////////////////////////////////////////////////////////////

import { useTranslation } from 'react-i18next';
import TabsBuilder, { TabsBuilderItem } from 'src/app/components/shared/builders/Tabs';
import { Card, CardContent } from 'src/app/components/ui/card';
import FileInput, { FileInputImage, FileInputVideo, MultiFileInput, MultiVideoInput } from 'src/app/components/ui/file-input';
import FormField from 'src/app/components/ui/form/field';
import { TfiUpload } from 'react-icons/tfi';

import { UseFormReturn } from 'react-hook-form';
import { AddProductSchemaSchemaValues } from '../Pages/Configurable/utils';


interface FileElemProps {
	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
	name: 'threeDModelMedia' | 'threeSixtyViewMedia';
	accept: { [key: string]: string[] };
	title: React.ReactNode;
}

function FileElem({ formStore, name, accept, title }: FileElemProps) {
	const { t } = useTranslation();

	const acceptString = Object.keys(accept)
		.map((key) => `${key},${accept[key].join(',')}`)
		.join(',');
	return;
}

const tabsItems: TabsBuilderItem<{ formStore: UseFormReturn<AddProductSchemaSchemaValues> }>[] = [
	{
		title: 'Images',
		Elem: ({ formStore }) => <MultiFileInput formStore={formStore}
			name='images' array={true} />
	},
	{
		title: 'Video',
		Elem: ({ formStore }) => <MultiVideoInput formStore={formStore}
			name='videos' array={true} />,
	},
	{
		title: '360o View',
		Elem: ({ formStore }) => {
			const { t } = useTranslation();
			return (
				<FileElem
					formStore={formStore}
					name='threeSixtyViewMedia'
					accept={{
						'image/*': ['.jpg', '.jpeg', '.png'],
						'video/*': ['.mp4', '.webm'],
					}}
					title={
						<>
							{t('Upload 360')}
							<sup>o</sup> {t('View')}
						</>
					}
				/>
			);
		},
		isInProgress: true,
	},
	{
		title: '3D View',
		Elem: ({ formStore }) => {
			const { t } = useTranslation();
			return (
				<FileElem
					formStore={formStore}
					name='threeDModelMedia'
					accept={{ '': ['.obj', '.stl', '.fbx', '.glb', '.gltf', '.dae'] }}
					title={t('Upload 3D View')}
				/>
			);
		},
		isInProgress: true,
	},
];

interface ProductFormMediaSectionProps {
	formStore: UseFormReturn<AddProductSchemaSchemaValues>;
	id?: string;
}

export default function ProductFormMediaSection({ formStore, id }: ProductFormMediaSectionProps) {
	return (
		<Card id={id} className='h-[300px]'>
			<CardContent>
				<TabsBuilder items={tabsItems} sharedProps={{ formStore }} />
			</CardContent>
		</Card >
	);
}
