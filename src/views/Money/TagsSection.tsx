import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';

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
	value: string[];
	onChange:(selected: string[]) => void;
}

const TagsSection: React.FC<Props> = (props)=>{
	const {tags,setTags} = useTags();
	const selectedTags = props.value;
	const onAddTag = ()=>{
		const tagName = window.prompt('新标签的名称为');
		if(tagName !== null){
			setTags([...tags,tagName])
		}
	};
	const onToggleTag = (tag: string)=>{
		const index = selectedTags.indexOf(tag);
		if(index >=0){
			props.onChange(selectedTags.filter(t => t !== tag));
		}else{
			props.onChange([...selectedTags,tag]);
		}
	};
	const getClass = (tag:string)=> selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
	return(
		<Wrapper>
			<ol>
				{tags.map(tag =>
				 	<li key={tag} onClick={()=>onToggleTag(tag)} className={getClass(tag)}>{tag}</li>
				)}
			</ol>
			<button onClick={onAddTag}>新增标签</button>
		</Wrapper>
	)
}

export {TagsSection}