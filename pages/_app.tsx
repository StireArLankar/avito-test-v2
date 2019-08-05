import App, { Container } from 'next/app'
import React from 'react'
import AppContext from 'Src/context/app-context'
import { withRouter, SingletonRouter } from 'next/router'
import Layout from 'Components/layout'
import Head from 'Components/head'
import 'Src/styles/main.scss'

interface IProps {
  router?: SingletonRouter
}

class MyApp extends App<IProps> {
  public static async getInitialProps (newProps: any) {
    let pageProps = {}

    if (newProps.Component.getInitialProps) {
      pageProps = await newProps.Component.getInitialProps(newProps.ctx)
    }

    return { pageProps }
  }

  public state = {
    products: []
  }

  public updateState = (newState: object) => {
    this.setState(newState)
  }

  public render = () => {
    const { Component, pageProps } = this.props
    const { updateState } = this

    return (
      <Container>
        <AppContext.Provider value={{ ...this.state, updateState }}>
          <Layout>
            <Head />
            <Component {...pageProps} key={this.props.router.route} />
          </Layout>
        </AppContext.Provider>
      </Container>
    )
  }
}

export default withRouter(MyApp)
