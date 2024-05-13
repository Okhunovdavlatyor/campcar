import styled from 'styled-components';

export const Display = styled.div`
display: flex;
padding: 20px 70px 20px 20px;

`
export const Flex = styled.div`
display: flex;
flex: 1;

`
export const Flexcol = styled.div`
display: flex;
flex: 1;
justify-content: ${props=>props.$main ? 'end' : ''};
flex-direction: column;
`

