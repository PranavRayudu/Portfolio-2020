import React from "react"
import {Link} from "gatsby"
import Grid from "../components/layout/master-grid"
import Sidebar from "../components/layout/sidebar-grid"
import Content from "../components/layout/content-grid"

export default () => (
  <div>
    <Grid>
      <Sidebar>
        <h3>Contact Me</h3>
        <p>tarakapranav@gmail.com</p>
        <p>Austin, TX USA</p>

        <p>
          <Link to="/"><ion-icon name="appstore"></ion-icon>

          </Link>
          <Link to="">Github</Link>
        </p>

        <Link to="/"> > Home</Link>
      </Sidebar>

      <Content>
        <p>
          Hello, this is something about me
        </p>

      </Content>
    </Grid>
  </div>
)
