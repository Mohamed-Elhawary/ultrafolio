import styled from 'styled-components';

export const SocialBox = styled.section`
    background: ${props => props.num === 1 ? '#3b5998' : ''};
    background: ${props => props.num === 2 ? '#498cbf' : ''};
    background: ${props => props.num === 3 ? '#cc2127' : ''};
    height: 140px;
    margin-right: ${props => props.num != 3 ? "-30px" : null};
    opacity: .6;
    &:hover {
        opacity: 1
    }
`