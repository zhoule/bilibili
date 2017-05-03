
import React from 'react';

import imgLazyLoad from '../../plugs/imgLazyLoad.js';
import ComprehensiveResult from './ComprehensiveResult.js';
import BangumiSpecialResult from './BangumiSpecialResult.js';
import UpuserResult from './UpuserResult.js';

var SearchResult = React.createClass({
	componentDidUpdate: function(){
		if(this.props.currentRankingData !== null){
			imgLazyLoad('.cover-box', true, '.list-box', 'fade-in');
		}
	},
	render: function(){
		
		var currentSearchResult = this.props.currentSearchResult;
		var type = this.props.searchType;

		if(currentSearchResult === null){
			return <p className='loading-info'>正在加载...</p>
		}
		if(currentSearchResult.length === 0){
			return <p className='loading-info'>没有数据...</p>
		}

		function TypeFilterResult(){
			switch(type){
				case 'video':
					return <ComprehensiveResult currentSearchResult={currentSearchResult} />;
				case 'series':
					return <BangumiSpecialResult currentSearchResult={currentSearchResult} searchType={type} />;
				case 'special':
					return <BangumiSpecialResult currentSearchResult={currentSearchResult} searchType={type} />;
				case 'upuser':
					return <UpuserResult currentSearchResult={currentSearchResult} />;
				default: return <p className='loading-info'>未知状况...</p>;
			}
		}

		return	<TypeFilterResult />
	}
});

export default SearchResult;