import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const MyLayout = styled(Layout)`
  display:flex;
	flex-direction:column;
`
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
const NotesSection = styled.section`
	padding:0 16px;
	font-size:14px;
	background:#f5f5f5;
	> label{
		display:flex;
		align-items:center;
		> span{
			margin-right: 16px;
			white-space: nowrap;
		}
		> input{
			display: block;
			width: 100%;
			height: 72px;
			border: none;
			background: none;
		}
	}
`;
const CategorySection = styled.section`
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
const NumberPadSection = styled.section`
	display:flex;
	flex-direction:column;
	> .output{
		padding:0 16px;
		text-align:right;
		font-size:36px;
		line-height:72px;
		background:white;
		box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,0.25),
							 inset 0 5px 5px -5px rgba(0,0,0,0.25);
	}
	> .pad{
		> button{
			float:left;
			border:none;
			width:25%;
			height:64px;
			font-size:18px;
			&.ok{
				float:right;
				height:128px;
			}
			&.zero{
				width:50%;
			}
			&:nth-child(1){
				background:#f2f2f2;
			}
			&:nth-child(2),
			&:nth-child(5){
				background:#E0E0E0;
			}
			&:nth-child(3),
			&:nth-child(6),
			&:nth-child(9){
				background:#D3D3D3;
			}
			&:nth-child(4),
			&:nth-child(7),
			&:nth-child(10){
				background:#C1C1C1;
			}
			&:nth-child(8),
			&:nth-child(11),
			&:nth-child(13){
				background:#B8B8B8;
			}
			&:nth-child(12){
				background:#9A9A9A;
			}
			&:nth-child(14){
				background:#A9A9A9;
			}
		}
	}
`;

function Money() {
	return (
		<MyLayout>
			<TagsSection>
				<ol>
					<li>衣</li>
					<li>食</li>
					<li>住</li>
					<li>行</li>
				</ol>
				<button>新增标签</button>
			</TagsSection>
			<NotesSection>
				<label>
					<span>备注</span>
					<input type="text" placeholder="在这里添加备注"></input>
				</label>
			</NotesSection>
			<CategorySection>
				<ul>
					<li className="selected">支出</li>
					<li>收入</li>
				</ul>
			</CategorySection>
			<NumberPadSection>
				<div className="output">1000</div>
				<div className="pad clearfix">
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>删除</button>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>清空</button>
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<button className="ok">OK</button>
					<button className="zero">0</button>
					<button>.</button>
				</div>
			</NumberPadSection>
		</MyLayout>
	);
}
export default Money;
