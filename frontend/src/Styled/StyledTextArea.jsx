import styled from 'styled-components'

const StyledTextArea = styled.textarea`
background: ${props =>  props.isEditing ? "#fff" : props.background};
border: none;
border-radius: 3px;
box-shadow: none;
height: ${props => props.height ? props.height : "32px"};
width: ${props => props.width ? props.width : "inherit"};
min-height: ${props => props.minHeight ? props.minHeight : "24px"};
padding-top: ${props => props.paddingY ? props.paddingY : "4px"};
padding-bottom: ${props => props.paddingY ? props.paddingY : "4px"};
padding-left: ${props => props.paddingX ? props.paddingX : "8px"};
padding-right: ${props => props.paddingY ? props.paddingY : "4px"};
resize: none;
text-decoration: none;
`


export default StyledTextArea