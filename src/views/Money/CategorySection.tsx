import styled from 'styled-components'

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

export { CategorySection }