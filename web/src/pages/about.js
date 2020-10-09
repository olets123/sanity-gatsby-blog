import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import PortableText from '../components/portableText'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import omOss from '../images/omoss.jpg'

//style
import "../styles/about.css";

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query AboutPageQuery {
        sanityAbout(slug:{current:{eq:"om-oss"}}) {
          title
          _rawBody
        }
      }
    
    `
/**
 *  query AboutPageQuery {
  allSanityAbout {
    edges {
      node {
        id
        slug {
          _key
          _type
          current
        }
        title
      }
    }
    nodes {
      _rawBody
    }
  }
}
 */
const AboutPage = props => {
  const {data, errors} = props
  const { title } = data.sanityAbout
  const { _rawBody } = data.sanityAbout

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  
  return (
    <Layout>
      <SEO title={ title } />
      
        <div className="about-page">
        <h1 className={responsiveTitle1}>{ title }</h1>
        </div>
        <div className="content-about">
        <div className="paragraphs-about">
        {_rawBody && <PortableText blocks={_rawBody} />}
        <img className="om-oss" src={omOss} alt="gutta-redbull"></img>
        
        </div>
  
        </div>
        
        
     
    </Layout>
  )
}

export default AboutPage
// <pre>{JSON.stringify(data, null, 2)}</pre>