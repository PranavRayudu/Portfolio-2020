import React from "react"
import styled from "styled-components"
import Grid from "../components/layout/master-grid"
import Sidebar from "../components/layout/sidebar-grid"
import BlogSnippet from "../components/blog-snippet"

// import Sidebar from "../components/layout/sidebar"
/**
 * Follow tutorial @ https://www.gatsbyjs.org/tutorial/part-one/#linking-between-pages
 */

const Content = styled.div`
    grid-column: content-left-flush / content-right-flush;
    grid-row: content-top-flush / content-bottom-flush;
    padding: 20px;
`;

export default () => (
    <div>
        <Grid>

            <Sidebar>
                <div>This is sidebar Content</div>
            </Sidebar>

            <Content>
                <BlogSnippet title="Testing" subtitle="actually tho" body="This is a test" />
            </Content>
        </Grid>
    </div>
)
