import styled from 'styled-components'

const TagsSection = styled.section`
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

export {TagsSection}