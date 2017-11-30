import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Deck,
  Slide,
  H1,
  H2,
  H3,
  H4,
  H5,
  Center,
  Button,
  TomatoButton,
  AlertButton,
  Rotate,
  Card,
  StyledCard,
  Link,
  ThemedButton,
  Image,
  Input,
  theme as th
} from '../components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/styles/monokai-sublime';
/*eslint-disable no-template-curly-in-string */
class Home extends Component {
  render() {
    return (
      <Deck navigation={false} routing={true} slideCount={true} color="#1D1F27">
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="rgb(219, 112, 147)">Slides will be at</H1>
            <H3 color="#DA9962">graphql.nearbycoder.com</H3>
            <H5 color="rgb(219, 112, 147)">
              https://github.com/tulsajs/graphql-presentation
            </H5>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="rgb(219, 112, 147)">Graphql</H1>
            <H3 color="#DA9962">A query language for your API</H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="rgb(219, 112, 147)">Why graphql?</H1>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="#DA9962">
              Current web api patterns are not designed for client / server
              architecture
            </H2>
            <H4 color="rgb(219, 112, 147)">IMO</H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="rgb(219, 112, 147)">What does that mean?</H2>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="#DA9962">REST</H1>
            <H4 color="rgb(219, 112, 147)">
              software design pattern typically used for web applications
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H2 color="#DA9962">where does REST fail</H2>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
GET   /users
GET   /users/:id
POST  /users
PUT   /users/:id
DELTE /users/:id
          `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              That works great we have a single resource to fetch from
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Now we want to add a post resource to the user
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
GET   /users/:id/posts
GET   /users/:id/posts/:post_id
POST  /users/:id/posts
PUT   /users/:id/posts/:post_id
DELTE /users/:id/posts/:post_id
      `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">Still not to bad</H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              Feature requests comes through and now we need to be able to
              upvote or downvote a post
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              This complexity adds new endpoints and a new controllers for a
              simple boolean flip
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
PUT   /users/:id/posts/:post_id/upvote
PUT   /users/:id/posts/:post_id/downvote
  `}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Could this be done with update? Totally but would it declare the
              purpose of what your updating on a post?
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">Another common issue</H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Fetching multiple nested resources
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
PUT   /users_with_posts/:id
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
PUT   /users_with_posts_and_another_resource/:id
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">more controllers and more actions</H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">another approach to this</H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
PUT   /users/:id

{
  id: 1,
  name: "Josh Hamilton",
  posts: [
    '/posts/1',
    '/posts/2',
    '/posts/3',
  ]
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">
              Requires multiple requests to get all resources.
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              REST limits us to sending 10's of requests or creating complex
              resources to fetch associations
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="rgb(219, 112, 147)">Enter GraphQL</H1>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H1 color="rgb(219, 112, 147)">Basic Query Structure</H1>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
user(id: 1) {
  id
  firstName
  lastName
  email
  posts {
    id
    title
    votes
  }
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
{
  "data": {
    "user": {
      "id": "1",
      "firstName": "Lafayette",
      "lastName": "Jones",
      "email": "Zoey.Jast78@yahoo.com",
      "posts": [
        {
          "id": "89",
          "title": "Quia aut fuga voluptatem libero.",
          "votes": 96
        }
      ]
    }
  }
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Simple describe what you want back from the server in the same
              format you want to receive it
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              What if you needed to return back two different users?
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
firstUser: user(id: 4) {
  id
  firstName
  lastName
  email
  posts {
    id
    title
    votes
  }
}
secondUser: user(id: 5) {
  id
  firstName
  lastName
  email
  posts {
    id
    title
    votes
  }
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
{
  "data": {
    "firstUser": {
      "id": "4",
      "firstName": "Lafayette",
      "lastName": "Jones",
      "email": "Zoey.Jast78@yahoo.com",
      "posts": [
        {
          "id": "89",
          "title": "Quia aut fuga voluptatem libero.",
          "votes": 96
        }
      ]
    },
    "secondUser": {
      "id": "5",
      "firstName": "Antonetta",
      "lastName": "Goodwin",
      "email": "Onie_Steuber@hotmail.com",
      "posts": [
        {
          "id": "65",
          "title": "Provident expedita debitis et.",
          "votes": 26
        }
      ]
    }
  }
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <H3 color="#DA9962">
              Graphql provides the flexibility to handle complex queries within
              a single request
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <H3 color="#DA9962">Recursive queries can be fun and dangerous</H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
users {
  id
  posts {
    id
    user {
      id
      posts {
        user
      }
    }
  }
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
{
"data": {
  "users": [
    {
      "id": "1",
      "posts": [
        {
          "id": "66",
          "user": {
            "id": "1",
            "posts": [
              {
                "user": {
                  "id": "1"
                }
              },
              {
                "user": {
                  "id": "1"
                }
              }
            ]
          }
        },
        {
          "id": "129",
          "user": {
            "id": "1",
            "posts": [
              {
                "user": {
                  "id": "1"
                }
              },
              {
                "user": {
                  "id": "1"
                }
              }
            ]
          }
        }
      ]
    }
  }
]
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)" left>
              Don't do this
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)" left>
              What about pagination?
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
users(first: 3, skip: 0) {
  id
  firstName
  email
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
{
  "data": {
    "users": [
      {
        "id": "1",
        "firstName": "Aryanna",
        "email": "Douglas.McGlynn65@gmail.com"
      },
      {
        "id": "2",
        "firstName": "Keyon",
        "email": "Anthony_Borer6@yahoo.com"
      },
      {
        "id": "3",
        "firstName": "Deanna",
        "email": "Emelia.Maggio27@gmail.com"
      }
    ]
  }
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
users(first: 3, skip: 3) {
  id
  firstName
  email
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
{
  "data": {
    "users": [
      {
        "id": "4",
        "firstName": "Blaise",
        "email": "Nestor61@gmail.com"
      },
      {
        "id": "5",
        "firstName": "Arvel",
        "email": "Otto43@hotmail.com"
      },
      {
        "id": "6",
        "firstName": "Shakira",
        "email": "Corrine_Braun6@hotmail.com"
      }
    ]
  }
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">Filtering by column?</H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largerSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
users(email: "@yahoo.com") {
  id
  firstName
  email
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center largeSyntax>
            <SyntaxHighlighter
              language="js"
              style={theme}
              showLineNumbers={false}>
              {`
{
  "data": {
    "users": [
      {
        "id": "2",
        "firstName": "Keyon",
        "email": "Anthony_Borer6@yahoo.com"
      },
      {
        "id": "9",
        "firstName": "Myles",
        "email": "Josianne0@yahoo.com"
      },
      {
        "id": "11",
        "firstName": "Ardith",
        "email": "Edythe80@yahoo.com"
      },
      {
        "id": "12",
        "firstName": "Bernice",
        "email": "Carey_Gislason@yahoo.com"
      }
    ]
  }
}
`}
            </SyntaxHighlighter>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="#DA9962">The possibilities are endless</H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              Time for a Demo and Code Walkthrough
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              So What Client Side Frameworks will this work with?
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)" left>
              - React
            </H4>
            <H4 color="#DA9962" left>
              - Vue
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Angular
            </H4>
            <H4 color="#DA9962" left>
              - Ember
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Elm
            </H4>
            <H4 color="#DA9962" left>
              - Polymer
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Meteor
            </H4>
            <H4 color="#DA9962" left>
              - Blaze
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Vanilla JS
            </H4>
            <H4 color="#DA9962" left>
              - Next.js
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">
              So What Server Side Languages have GraphQL support?
            </H3>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H4 color="rgb(219, 112, 147)" left>
              - Ruby
            </H4>
            <H4 color="#DA9962" left>
              - Go
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Scala
            </H4>
            <H4 color="#DA9962" left>
              - Python
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Elixir
            </H4>
            <H4 color="#DA9962" left>
              - PHP
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Many more
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">Things that weren't covered</H3>
            <H4 color="rgb(219, 112, 147)" left>
              - Fragments (reusable queries)
            </H4>
            <H4 color="#DA9962" left>
              - Caching
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Cursor Pagination
            </H4>
            <H4 color="#DA9962" left>
              - Relay Nodes and Edges
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              - Auth
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">Awesome Resources</H3>
            <H4 color="#DA9962" left>
              <a
                target="_blank"
                style={{ color: '#DA9962' }}
                href="https://github.com/apollographql">
                https://github.com/apollographql
              </a>
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              <a
                target="_blank"
                style={{ color: 'rgb(219, 112, 147)' }}
                href="https://github.com/chentsulin/awesome-graphql">
                https://github.com/chentsulin/awesome-graphql
              </a>
            </H4>
            <H4 color="#DA9962" left>
              <a
                target="_blank"
                style={{ color: '#DA9962' }}
                href="https://www.apollographql.com/engine/">
                https://www.apollographql.com/engine/
              </a>
            </H4>
          </Center>
        </Slide>
        <Slide transition="cross-fade" bgColor="#1D1F27">
          <Center>
            <H3 color="rgb(219, 112, 147)">Code Example Links</H3>
            <H4 color="#DA9962" left>
              <a
                target="_blank"
                style={{ color: '#DA9962' }}
                href="https://github.com/tulsajs/graphql-client-example">
                https://github.com/tulsajs/graphql-client-example
              </a>
            </H4>
            <H4 color="rgb(219, 112, 147)" left>
              <a
                target="_blank"
                style={{ color: 'rgb(219, 112, 147)' }}
                href="https://github.com/tulsajs/graphql-server-example">
                https://github.com/tulsajs/graphql-server-example
              </a>
            </H4>
          </Center>
        </Slide>
      </Deck>
    );
  }
}

export default Home;
