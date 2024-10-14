/**
 * @param {import('src/app/utils/hooks/form').InferredZodSchema<typeof import('../utils').productOptionRawSchema>['option'][]} options
 * @param {number} currentIndex
 * @param {import('src/app/utils/hooks/form').InferredZodSchema<typeof import('../utils').productOptionRawSchema>['option']['values']} currentVariation
 * @param {import('src/app/utils/hooks/form').InferredZodSchema<typeof import('../utils').productVariationRawSchema>['variation'][]} allVariations
 *
 * @description
 * This function will generate all possible combinations of the options values
 *
 */
function generateVariations(options, currentIndex = 0, currentVariation = [], allVariations = []) {
	if (currentIndex === options.length) {
		const forOptionValuesNames = currentVariation.map((v) => v.value).join(' ');
		const forOptionValuesTempIds = currentVariation.map((v) => v.tempId);
		allVariations.push({
			forOptionValuesNames,
			forOptionValuesTempIds,
			quantity: undefined,
			sku: undefined,
			price: undefined,
			discountPrice: undefined,
		});
		return allVariations;
	}

	const currentOption = options[currentIndex];
	const values = currentOption.values;

	for (const value of values) {
		currentVariation.push(value);
		generateVariations(options, currentIndex + 1, currentVariation, allVariations);
		currentVariation.pop();
	}

	return allVariations;
}

/**
 * @template TFormStore
 *
 * @param {import('../types').Props<TFormStore>['formStore']} formStore
 */
export function updateVariations(formStore) {
	const options = formStore.getValues('options');
	const variations = generateVariations(options);
	formStore.setValue('variations', variations);
}