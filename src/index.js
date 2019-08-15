import React, { Component } from 'react';
import styled from 'styled-components';
import BreadCrumbArrow from './breadcrumbArrow';
import { link } from 'fs';
// a separator component to use if separator prop isn't passed through props.

class BreadCrumbs extends Component {
  render() {
    const { crumbs, separator } = this.props; // initializing the props that we pass while using this component.

    const arrowIcon = separator ? (
      <img src={separator} alt="breadcrumbArrow" />
    ) : (
      <BreadCrumbArrow />
    );

    return (
      <BreadCrumbsWrapper>
        {crumbs && crumbs.length && (
          <div className="breadCrumbs">
            {crumbs.map((l, key) => (
              <React.Fragment>
                {key !== 0 && arrowIcon}
                <a
                  href={l.link}
                  style={{ color: l.tintColor ? l.tintColor : '#B736FF' }}
                >
                  {l.title}
                </a>
              </React.Fragment>
            ))}
          </div>
        )}
      </BreadCrumbsWrapper>
    );
  }
}

export { BreadCrumbs };

const BreadCrumbsWrapper = styled.div`
  .breadCrumbs {
    margin-left: 80px;
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 767px) {
      margin-left: 20px;
      flex-wrap: wrap;
    }
    a {
      text-decoration: none;
      ::first-letter {
        text-transform: uppercase;
      }
    }
    img {
      margin: 0 20px;
      @media screen and (max-width: 767px) {
        margin: 3px 9px 0 5px;
      }
    }
  }
`;
