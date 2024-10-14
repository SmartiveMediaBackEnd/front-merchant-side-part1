# MobileProductCard Component

`Author => Ahmed Hassan`
The MobileProductCard component is a reusable UI component designed.
It is intended for use in mobile applications or environments where space is limited.

1. Usage:
   [1]- Import the `MobileProductCard` component into your desired React component file.
   [2]- Pass the necessary props **(imageUrl, productName, category, price, quantity)** to customize the product information.

2. Example:

```jsx
import MobileProductCard from './MobileProductCard';
<MobileProductCard
	imageUrl='images/product1.jpg'
	productName='DJI Mavic Pro 2'
	category='Sportswear'
	price='SAR 10000.00'
	quantity={50}
/>;
```

============================================================================

# ProductCategory Component

`Author => Ahmed Hassan`

- Dynamic Content: The component dynamically renders product category information based on the props provided.
- Draggable: Users can drag the product category component to reorder categories, providing flexibility in organizing and managing product listings.
- Availability Control: Includes a toggle switch that allows users to toggle the availability of a particular product category.
- Expandable: Users can expand or collapse the product category component to reveal additional options or details.

1. Usage:
   [1]- Import the `ProductCategory` component into your desired React component file.
   [2]- Pass the necessary props **(imageUrl, title, category, quantity, price)** to customize the product category information.

2. Example:

```jsx
import ProductCategory from './ProductCategory';

<ProductCategory
	imageUrl='images/category1.jpg'
	title='Electronics'
	category='Gadgets'
	quantity={10}
	price='$499.99'
/>;
```

============================================================================

# ProductCard Component

`Author => Ahmed Hassan`

- Dynamic Content: The component dynamically renders product information based on the props provided.
- Interactive Elements: Users can interact with the product card by toggling favorite status and selecting/deselecting the card.
- Actions: Includes action buttons for performing various actions on the product, such as viewing, editing, copying, or accessing more options.

1. Usage:

- Import the `ProductCard` component into your desired React component file.
- Pass the necessary props **(id, name, imageUrl, category, options, sku, quantity, price)** to customize the product card information.

2. Example:

```jsx
import ProductCard from './ProductCard';

<ProductCard
	id={1}
	name='DJI Mavic Pro 2'
	imageUrl='images/mavic-pro.jpg'
	category='Electronics'
	options={2}
	sku='SF1133569600-1'
	quantity={500}
	price='$1000.00'
/>;
```

=========================================================================

## MobileProductViews Component

`Author => Ahmed Hassan`
The `MobileProductViews` component is a reusable React component designed to display mobile-friendly views of product information.

1. Usage:

- Import the `MobileProductViews` component into your desired React component file.
- Pass the necessary props **(name, imageUrl, category, quantity, price)** to customize the product card information.

### Example

```jsx
import MobileProductViews from './TrialBanner';

const ExampleComponent = () => {
	return (
		<div>
			<MobileProductViews
				name='Product Name'
				imageUrl='path/to/image'
				category='Product Category'
				quantity={50}
				price='100.00'
			/>
		</div>
	);
};
```

=========================================================================

## ProductViews Component

`Author => Ahmed Hassan`

The `ProductViews` component is designed to display product information. It allows users to view details such as product name, category, options, SKU, quantity, and price.

- Dynamic Content: The component dynamically renders product information based on the props provided.
- Interactive Elements: Users can interact with the product View by toggling favorite status and selecting/deselecting the card.
- Actions: Includes action buttons for performing various actions on the product, such as viewing, editing, copying, or accessing more options.

1. Usage:
   [1]- Import the `ProductViews` component into your desired React component file.
   [2]- Pass the necessary props **(name, imageUrl, category, sku ,quantity, price)** to customize the product category information.


```
