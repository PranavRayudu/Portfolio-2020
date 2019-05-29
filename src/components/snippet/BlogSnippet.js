import React from "react"
import { Link } from "gatsby/index"
import styled from "styled-components"

const Snippet = styled.div`    
    
`;

const Title = styled.h1`
    //padding-bottom: 0;
    margin-bottom: 0;
`;

const Subtitle = styled.h4`
    //padding-top: 0;
    margin-top: 0;
    color: grey;
`;

const Text = styled.p`
    
`;

export default (props) => (
    <Snippet>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <Text>{props.body} <Link to={props.link}>Read More</Link></Text>
    </Snippet>
)