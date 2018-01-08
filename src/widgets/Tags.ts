import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';

export interface TagsProperties {
	tags: any[];
}

export class Tags extends WidgetBase<TagsProperties> {
	protected render() {
		const { tags } = this.properties;
		return v('div', { classes: 'col-md-3' }, [
			v('div', { classes: 'sidebar' }, [
				v('p', ['Popular Tags']),
				v(
					'div',
					{ classes: 'tag-list' },
					tags.map((tag, index) =>
						v('a', { key: index, classes: ['tag-pill', 'tag-default'], href: '' }, [tag])
					)
				)
			])
		]);
	}
}