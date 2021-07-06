import styled from 'styled-components';
import React,{useState} from 'react';

const Wrapper = styled.section`
	font-size:24px;
	> ul{
		display:flex;
		background:#c4c4c4;
		> li{
			position:relative;
			padding: 16px 0;
			text-align:center;
			width:50%;
			&.selected::after{
				position:absolute;
				bottom:0;
				left:0;
				display:flex;
				content:'';
				width:100%;
				height:3px;
				background:#333;
			}
		}
	}
`;

const CategorySection: React.FC = ()=>{
	const categoryMap = {'-':'支出','+':'收入'};
	type Y = keyof typeof categoryMap;
	const [categoryList] = useState<Y[]>(['-','+']);
	const [category,setCategory] = useState('-');
	return(
		<Wrapper>
			<ul>
				{categoryList.map(c=>
					<li className={category === c ? 'selected': ''}
							onClick={()=>{setCategory(c)}}
					>{categoryMap[c]}</li>	
				)}
			</ul>
		</Wrapper>
	)
}

export { CategorySection };