import Layout from '../components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
	font-size:16px;
	background:white;
	> li{
		margin-left:16px;
		line-height:20px;
		border-bottom:1px solid #d5d5d9;
		> a{
			display:flex;
			justify-content:space-between;
			align-items:center;
			padding:12px 16px 12px 0;
		}
	}
`;

const Button = styled.button`
	padding:8px 12px;
	border:none;
	border-radius:4px;
	font-size:18px;
	color:white;
	background:#f60;
`;

const Center = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
`;

const Space = styled.div`
	height:48px;
`;

function Tags() {
	const {tags,setTags} = useTags();
	return (
		<Layout>
			<TagList>
				{tags.map(tag=>
					<li key={tag}>
						<Link to={'/tags/' + tag}>
							<span className="oneLine">{tag}</span>
							<Icon name="right"/>
						</Link>			
					</li>	
				)}
			</TagList>
			<Center>
				<Space/>
				<Button>新增标签</Button>
			</Center>
		</Layout>
	);
}

export default Tags;
