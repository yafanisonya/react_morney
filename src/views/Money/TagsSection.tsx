import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';

const Wrapper = styled.section`
	display:flex;
	flex-direction:column;
	justify-content:flex-end;
	align-items:flex-start;
	flex-grow:1;
	padding:12px 16px;
	background:#fff;
	> ol{
		margin:0 -12px;
		>li{
			display:inline-block;
			margin:8px 12px;
			padding: 3px 18px;
			border-radius:18px;
			font-size:14px;
			background:#D9D9D9;
			&.selected{
				background:#f60;
			}
		}
	}
	> button{
		margin-top: 8px;
		padding:2px 4px;
		border:none;
		border-bottom:1px solid #333;
		color:#666;
		background:none;
	}
`;
type Props = {
	value: number[];
	onChange:(selected: number[]) => void;
}

const TagsSection: React.FC<Props> = (props)=>{
	const {tags,addTag} = useTags();
	const selectedTagIds = props.value;
	const onToggleTag = (tagId: number)=>{
		const index = selectedTagIds.indexOf(tagId);
		if(index >=0){
			props.onChange(selectedTagIds.filter(t => t !== tagId));
		}else{
			props.onChange([...selectedTagIds,tagId]);
		}
	};
	const getClass = (tagId:number)=> selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
	return(
		<Wrapper>
			<ol>
				{tags.map(tag =>
				 	<li key={tag.id} onClick={()=>onToggleTag(tag.id)} className={getClass(tag.id)}>{tag.name}</li>
				)}
			</ol>
			<button onClick={()=>{addTag()}}>新增标签</button>
		</Wrapper>
	)
}

export {TagsSection}