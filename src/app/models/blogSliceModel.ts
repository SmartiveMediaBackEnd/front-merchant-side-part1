import { statusGlobal } from '.';
import { BlogPostInterface } from '../interface/BlogPostInterface';

export interface blogSliceModel extends statusGlobal {
	blog: BlogPostInterface[];
}
