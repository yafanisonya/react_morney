import styled from 'styled-components';

const Wrapper = styled.section`
  display:flex;
  flex-direction:column;
  > .output{
    padding:0 16px;
    text-align:right;
    font-size:36px;
    line-height:56px;
    background:white;
    box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,0.25),
              inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  > .pad{
    > button{
      float:left;
      border:none;
      width:25%;
      height:56px;
      font-size:18px;
      &.ok{
        float:right;
        height:112px;
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

export {Wrapper};