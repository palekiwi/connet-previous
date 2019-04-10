import * as React from "react";
import { graphql } from "gatsby";
import { css, styled, Box, Flex, Card } from "primithemes";
import { Text } from "src/components/Text";
import { Container } from "../components/Container";
import { Phone } from "styled-icons/material/Phone";
import { Email } from "styled-icons/material/Email";
import { Home } from "styled-icons/material/Home";
import { Banner } from "src/components/Banner";
import sc from "styled-components";

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

const PhoneIcon = sc(Phone)`
  ${icon}
`;

const EmailIcon = sc(Email)`
  ${icon}
`;

const AddressIcon = sc(Home)`
  ${icon}
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

const ContactCard = styled(Card)`
  color: ${props => props.theme.colors.text.dark};
  & p {
    margin: ${props => props.theme.sizes[1]} 0;
  }
`;

const ContactPage: React.SFC<Props> = ({ data: { content } }) => {
  return (
    <>
      <Banner
        title={content.frontmatter.title}
        image={content.frontmatter.image}
      />
      <Box>
        <Container>
          <Flex flexWrap="wrap" justifyContent="center" my={3}>
            {content.frontmatter.contacts.map(c => (
              <Box w={1} p={[0, 0, 3]} key={c.name}>
                <ContactCard radius={[0, 0, 2]} shadow={[0, 0, 1]}>
                  <Box bg="grey.200" p={3}>
                    <Text
                      fontSize={4}
                      fontWeight={3}
                      color="text.main"
                      textAlign="center"
                    >
                      {c.name}
                    </Text>
                  </Box>
                  <Flex justifyContent="center">
                    <Flex
                      w={["auto", "auto", "auto", "100%"]}
                      p={3}
                      flexDirection={["column", "column", "column", "row"]}
                      justifyContent={[
                        "center",
                        "center",
                        "center",
                        "space-around",
                      ]}
                      alignItems={[
                        "flex-start",
                        "flex-start",
                        "flex-start",
                        "center",
                      ]}
                    >
                      {c.phone && (
                        <Card my={2} p={3} flexDirection="row">
                          <PhoneIcon size={26} />
                          <Card bl={1} ml={3} pl={3} borderColor="divider.main">
                            <Text>{c.phone}</Text>
                          </Card>
                        </Card>
                      )}
                      {c.email && (
                        <Card
                          my={2}
                          p={3}
                          alignItems="center"
                          flexDirection="row"
                          justifyContent="center"
                        >
                          <EmailIcon size={26} />
                          <Card bl={1} ml={3} pl={3} borderColor="divider.main">
                            <Text>{c.email}</Text>
                          </Card>
                        </Card>
                      )}
                      {c.address && (
                        <Card
                          my={2}
                          p={3}
                          alignItems="center"
                          flexDirection="row"
                          justifyContent="center"
                        >
                          <AddressIcon size={26} />
                          <Card bl={1} ml={3} pl={3} borderColor="divider.main">
                            <Text>{c.address.street}</Text>
                            <Text>{c.address.district}</Text>
                            <Text>{c.address.city}</Text>
                            <Text>{c.address.country}</Text>
                          </Card>
                        </Card>
                      )}
                    </Flex>
                  </Flex>
                </ContactCard>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
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
