import Layout from '../components/Layout';
import React,{useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords, RecordItem} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
	background: white;
`;

const Item = styled.div`
	display:flex;
	justify-content: space-between;
	padding:10px 16px;
	line-height: 20px;
	font-size: 18px;
	background: white;
	> .note{
		margin-left:16px;
		margin-right: auto;
		color: #999;
	}
`;

const Header = styled.div`
	padding: 10px 16px;
	font-size: 18px;
	line-height: 20px;
`;


function Statistics() {
	const [category,setCategory] = useState<'-' | '+'>('-');
	const {records} = useRecords();
	const {getName} = useTags();
	const hash : {[K:string]: RecordItem[]} = {};
	const selectedRecords = records.filter(r=> r.category === category);

	selectedRecords.forEach(r=>{
		const key = day(r.createdAt).format('YYYY-MM-DD');
		if(!(key in hash)){
			hash[key] = [];
		}
		hash[key].push(r);
	});

	const array = Object.entries(hash).sort((a,b)=>{
		if(a[0] === b[0]) return 0;
		if(a[0] > b[0]) return -1;
		if(a[0] < b[0]) return 1;
		return 0;
	})

	return (
		<Layout>
			<CategoryWrapper>
				<CategorySection value={category} onChange={value => setCategory(value)}/>
			</CategoryWrapper>
			
			{array.map(([date,records])=>
				<div>
					<Header>
						{date}
					</Header>
					<div>
						{records.map(r=>{
							return <Item>
								<div className="tags oneLine">
									{r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
								</div>
								{r.note && <div className="note">{r.note}</div>}
								<div className="amount">￥{r.amount}</div>
							</Item>
						})}
					</div>
				</div>
			)}



		</Layout>
	);
}

export default Statistics;
