import { createSlice } from '@reduxjs/toolkit';
import { cartRuleExtraReducer } from './cartRuleExtraReducer';

export interface Condition {
	value: string;
	operator: string;
	attribute: string;
	attribute_type: string;
}

export interface CartRulesItem {
	id: number; //!
	name: string; //!
	description: string;
	starts_from: string;
	ends_till: string;
	status: number; //!
	coupon_type: number;
	use_auto_generation: number;
	usage_per_customer: number;
	uses_per_coupon: number;
	times_used: number;
	condition_type: number;
	conditions: Condition[];
	end_other_rules: number;
	uses_attribute_conditions: number;
	action_type: string;
	discount_amount: string;
	discount_quantity: number;
	discount_step: string;
	apply_to_shipping: number;
	free_shipping: number;
	sort_order: number;
	created_at: string;
	updated_at: string;
}

export interface CartRuleState  {
	cartRules: CartRulesItem[];
	cartRuleShow: CartRulesItem | null;
	isLoadingAddOrUpdate: boolean;
	isLoading: boolean;
	error: string | null;
}

const initialState: CartRuleState  = {
	cartRules: [],
	cartRuleShow: null,
	isLoadingAddOrUpdate: false,
	isLoading: false,
	error: null,
};

const cartRuleSlice = createSlice({
	name: 'cartRule',
	initialState,
	reducers: {
		clearError: (state) => {
			state.error = null;
		},
		clearCartRuleShow: (state) => {
			state.cartRuleShow = null;
		},
	},
	extraReducers: (builder) => {
		cartRuleExtraReducer(builder);
	},
});

export default cartRuleSlice.reducer;
