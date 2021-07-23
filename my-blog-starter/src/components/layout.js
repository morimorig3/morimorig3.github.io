import * as React from "react"
import { Link } from "gatsby"
import { Container, Header, Grid, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

const Layout = ({ location, title, description, children }) => {
  const pageTitle = {
    color: "rgba(0,0,0,.87)",
    fontSize: "20px",
  }
  const iconLink = {
    color: "rgba(0,0,0,.87)",
  }
  const wrapper = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }
  const footer = {
    marginTop: "auto",
    color: "rgba(0,0,0,.6)",
  }
  return (
    <div className="wrapper" style={wrapper}>
      <Container as="header" style={{ marginTop: "1em" }}>
        <Grid>
          <Grid.Column width={12}>
            <Header>
              <Link to="/" style={pageTitle}>
                {title}
              </Link>
              <Header sub>{description}</Header>
            </Header>
          </Grid.Column>
          <Grid.Column floated="right" textAlign="right" width={4}>
            <Link style={iconLink} to="/">
              <Icon name="github" size="large" link />
            </Link>
            <Link style={iconLink} to="/">
              <Icon name="twitter" size="large" link />
            </Link>
          </Grid.Column>
        </Grid>
      </Container>
      <Container as="main" text>
        {children}
      </Container>
      <footer style={footer}>
        <Container textAlign="center">©︎ morimorig3</Container>
      </footer>
    </div>
  )
}

export default Layout
