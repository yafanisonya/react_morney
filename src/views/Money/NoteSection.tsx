import styled from 'styled-components';
import React,{useRef,useState} from 'react';

const Wrapper = styled.section`
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

const NoteSection: React.FC = ()=>{
  const [note, setNote] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = ()=>{
    if(refInput.current !== null){
      setNote(refInput.current.value);
    }
  };
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" 
          placeholder="在这里添加备注" 
          ref={refInput} 
          defaultValue={note}
          onBlur={onBlur}
        />
        {/* <input type="text" 
          placeholder="在这里添加备注" 
          value={note}
          onChange={(e)=>setNote(e.target.value)}
        /> */}
      </label>
    </Wrapper>
  )
}

export {NoteSection}