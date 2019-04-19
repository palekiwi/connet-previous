import * as React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { radius, shadow, space, color } from "src/theme";
import { tablet, desktop } from "src/theme/media";
import { Container } from "../components/Container";
import { trafalgar, longPrimer } from "src/theme/typography";
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
  ${desktop(css`
    flex-direction: row;
  `)}
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
  background: ${color("divider.light")};
  padding: ${space(3)};
  text-align: center;
`;

const Title = styled.h2`
  ${trafalgar};
  margin-bottom: 0;
`;

const Body = styled.div`
  padding: ${space(3)};
  display: flex;
  justify-content: center;
`;

const Info = styled.div`
  margin: ${space(3)};
  padding-left: ${space(3)};
  border-left: 1px solid ${color("divider.main")};
`;

const P = styled.p`
  ${longPrimer};
  margin-bottom: 0;
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
  color: ${color("text.dark")};
  margin: ${space(4)} 0;
  ${tablet(css`
    border-radius: ${radius(2)};
    box-shadow: ${shadow(1)};
    margin-left: ${space(3)};
    margin-right: ${space(3)};
  `)}
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
          <ContactCard key={c.name}>
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
