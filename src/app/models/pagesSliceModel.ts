import { statusGlobal } from '.';
import { BlogPostInterface } from '../interface/BlogPostInterface';

export interface pagesSliceModel extends statusGlobal {
	pages: BlogPostInterface[];
}
