export const productTypeCollection = /** @type {const} */ [
	'virtual',
	'food',
	'simple',
	'bundle',
	'configurable',
];
export const productTypeMap =
	/** @type {{ [Key in typeof productTypeCollection[number]]: typeof productTypeCollection[number] }} */ Object.fromEntries(
		productTypeCollection.map((unit) => [unit, unit]),
	);
