import * as React from "react";
import { graphql } from "gatsby";
import { css, styled } from "src/theme";
import { Container } from "../components/Container";
import { H3, P } from "src/components/Text";
import { Phone } from "styled-icons/material/Phone";
import { Email } from "styled-icons/material/Email";
import { Home } from "styled-icons/material/Home";
import { Banner } from "src/components/Banner";

interface ContactNode {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    district: string;
    country: string;
    postCode: string;
  };
}

const icon = css`
  flex-shrink: 0;
  border-color: ${props => props.theme.colors.divider.main};
`;

const PhoneIcon = styled(Phone)`
  ${icon}
`;

const EmailIcon = styled(Email)`
  ${icon}
`;

const AddressIcon = styled(Home)`
  ${icon}
`;

const ContactGroup = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => props.theme.devices[2]} {
    flex-direction: row;
  }
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.divider.light};
  padding: ${props => props.theme.sizes[3]};
  text-align: center;
`;

const Title = styled(H3)``;

const Body = styled.div`
  padding: ${props => props.theme.sizes[3]};
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  margin: ${props => props.theme.sizes[3]};
  padding-left: ${props => props.theme.sizes[3]};
  border-left: ${props => props.theme.borders[1]};
  border-color: ${props => props.theme.colors.divider.light};
  & ${P} {
    color: ${props => props.theme.colors.text.dark};
  }
`;

export interface Props {
  data: {
    content: {
      frontmatter: {
        title: string;
        image: any;
        subtitle: string;
        contacts: ContactNode[];
      };
    };
  };
}

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0;
  box-shadow: 0;
  overflow: hidden;
  color: ${props => props.theme.colors.text.dark};
  margin: ${props => props.theme.sizes[4]} 0;
  ${props => props.theme.devices[1]} {
    border-radius: ${props => props.theme.radii[2]};
    box-shadow: ${props => props.theme.shadows[1]};
    margin-left: ${props => props.theme.sizes[3]};
    margin-right: ${props => props.theme.sizes[3]};
  }
`;

const ContactPage: React.SFC<Props> = ({ data: { content } }) => {
  return (
    <>
      <Banner
        title={content.frontmatter.title}
        image={content.frontmatter.image}
      />
      <Container>
        {content.frontmatter.contacts.map(c => (
          <ContactCard>
            <Header>
              <Title>{c.name}</Title>
            </Header>
            <Body>
              <ContactGroup>
                {c.phone && (
                  <ContactItem>
                    <PhoneIcon size={26} />
                    <Info>
                      <P>{c.phone}</P>
                    </Info>
                  </ContactItem>
                )}
                {c.email && (
                  <ContactItem>
                    <EmailIcon size={26} />
                    <Info>
                      <P>{c.email}</P>
                    </Info>
                  </ContactItem>
                )}
                {c.address && (
                  <ContactItem>
                    <AddressIcon size={26} />
                    <Info>
                      <P>{c.address.street}</P>
                      <P>{c.address.district}</P>
                      <P>{c.address.city}</P>
                      <P>{c.address.country}</P>
                    </Info>
                  </ContactItem>
                )}
              </ContactGroup>
            </Body>
          </ContactCard>
        ))}
      </Container>
    </>
  );
};

export default ContactPage;

export const query = graphql`
  query ContactPageQuery($locale: String!) {
    content: markdownRemark(
      fields: { pageName: { eq: "contact" }, lang: { eq: $locale } }
    ) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contacts {
          name
          phone
          email
          address {
            street
            country
            city
            district
            postCode
          }
        }
      }
    }
  }
`;
