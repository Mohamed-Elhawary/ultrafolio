import styled from 'styled-components';

export const ListItem = styled.li`
    background: #dcdcdc;
    &.active {
        background: #E33545;
        color: #fff
    }
`

export const Item = styled.div`
    &:hover .overlay {
        display: block!important;
    }
`