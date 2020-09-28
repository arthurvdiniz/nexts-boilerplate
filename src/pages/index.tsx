import React from 'react'
import Head from 'next/head'

import DefaultLayout from '@/layouts/DefaultLayout'
import Typography, { TypographyVariant } from '@/components/Typography'
import LinkText, { LinkTextVariant } from '@/components/LinkText'
import Highlighted from '@/components/Highlighted'

import { Section } from '@/styled/pages/home'

export default function Home(): React.ReactElement {
  return (
    <DefaultLayout>
      <Head>
        <title>NexTS Boilerplate</title>
        <meta name="description" content="a good description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Section>
        <Typography className="title" variant={TypographyVariant.Title}>
          Hello! 🤙
        </Typography>
        <Typography className="subtitle" variant={TypographyVariant.Subtitle}>
          I'm a simple{' '}
          <LinkText variant={LinkTextVariant.External} href="https://nextjs.org/" target="_blank" rel="noreferrer">
            NextJS
          </LinkText>{' '}
          boilerplate with <Highlighted>Typescript</Highlighted>.
        </Typography>
        <Typography className="subtitle" variant={TypographyVariant.Subtitle}>
          Some additional features built-in: <Highlighted>Dark mode switcher</Highlighted>,{' '}
          <Highlighted>Highlighted, LinkText and Typography components</Highlighted> written with{' '}
          <LinkText
            variant={LinkTextVariant.External}
            href="https://styled-components.com/"
            target="_blank"
            rel="noreferrer"
          >
            styled-components
          </LinkText>
          .
        </Typography>
        <Typography className="subtitle" variant={TypographyVariant.Subtitle}>
          Hope you like me ✌️ and go to{' '}
          <LinkText variant={LinkTextVariant.Internal} href="/void">
            /void
          </LinkText>
          .
        </Typography>
      </Section>
    </DefaultLayout>
  )
}
