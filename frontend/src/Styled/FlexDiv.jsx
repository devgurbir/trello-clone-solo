import styled from 'styled-components'

const FlexDiv = styled.div`
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify ? props.justify : "flex-start"};
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap ? props.gap : 0};
    flex-basis: ${props => props.basis ? props.basis : "auto"};
    
`

export default FlexDiv