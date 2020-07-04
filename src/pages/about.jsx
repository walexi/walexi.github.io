import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Me'} />
    <Header title=" ">Olawale Onabola</Header>
    <Container center={center}>
    <table width="800" border="0" align="center" cellpadding="20">
      <tbody>
        <tr>
          <td>
            <table width="100%" align="center" border="0" cellpadding="10">
              <tbody>
                <tr>
                  <td width="72%" valign="top">
                    <p>I'm a Machine Learning Fellow at <a href="https://www.fellowship.ai">Fellowship.AI</a> and the Founder of <a href="https://www.bridgethewall.tech">Bridge The Wall Initiative</a>.</p>
                    <p>My research interests include <em>Encrypted and Decentralized Artificial Intelligence (Federated Learning), Deep Learning, Meta-learning, Computer Vision, Graph Networks</em> and <em>Generative Adversarial Networks</em>.</p>
                    <p align="center">
                      <a href="mailto:walexi4great@gmail.com">Email</a> &nbsp;&nbsp;&nbsp;
                      <a href="https://docs.google.com/document/d/1PTzPiZ6dZ0hOFrrPIKIf0aoliCQLlQWb7WM1jaC6PnU/export?format=pdf">Resume</a> &nbsp;&nbsp;&nbsp;
                      <a href="https://www.linkedin.com/in/olawaleonabola">LinkedIn</a> &nbsp;&nbsp;&nbsp;
                      <a href="https://github.com/walexi">GitHub</a> &nbsp;&nbsp;&nbsp;
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <p>
              <font color="#B22222" size="4px">News</font>
            </p>
            <ul>
              <li>
                <span>I will be joining the <a href="https://mayen.world">Mayen</a> Team as a Fullstack Developer (Remote) working on exciting AI applications</span>
              </li>
              <li>
                <span>Applications are open for the first cohort of <a href="https://bridgethewall.tech/">Bridge The Wall Fellowship</a>. Visit <a href="https://bridgethewall.tech">here</a> for more details</span>
              </li>
            </ul>
            <p></p>
            <hr />  
          </td>
        </tr>
      </tbody>
    </table>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};



