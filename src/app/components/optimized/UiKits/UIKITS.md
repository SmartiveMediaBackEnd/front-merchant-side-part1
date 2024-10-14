## TrialBanner Component
`Author => Ahmed Hassan`

The `TrialBanner` component is a reusable UI component designed. used to display trial offers to users, indicating whether they are in a free trial, the remaining period of the trial, or if the trial has ended. 

### Usage
The `TrialBanner` component takes the following props:

- `free`: A boolean indicating whether the trial is free or not.
- `daysLeft`: The number of days left in the trial.
- `title`: The title of the trial offer.
- `description`: A brief description of the trial offer.

### Example
```jsx
import TrialBanner from './TrialBanner';

const ExampleComponent = () => {
  return (
    <div>
      <TrialBanner
        free={true}
        daysLeft={3}
        title="Free Trial Offer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};


