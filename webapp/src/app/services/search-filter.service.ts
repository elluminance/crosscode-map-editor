import {Injectable} from '@angular/core';

@Injectable()
export class SearchFilterService {
	NEUTRAL_CHAR_REGEX = /[-_\s]*/g;
	
	private innerTest(tested: string, searched: RegExp) {
		const result = tested.match(searched) != null;
		return result;
	}
	
	createSearcherRegex(searched: string, global = false) {
		const withRegex = searched.replace(this.NEUTRAL_CHAR_REGEX, this.NEUTRAL_CHAR_REGEX.source);
		return new RegExp(withRegex, global? 'gi' : 'i');
	}
	
	test(tested: string, searched?: string | null) {
		searched = searched?.trim();
		if (!searched) {
			return true;
		} else {
			return this.innerTest(tested, this.createSearcherRegex(searched));
		}
	}
	
	filterOptions(options: readonly string[], searched?: string | null) {
		searched = searched?.trim();
		if (!searched) {
			return [...options]; //By returning a copy it's always safe to modify the result.
		} else {
			const regex = this.createSearcherRegex(searched);
			return options.filter(tested => this.innerTest(tested, regex));
		}
	}
}
