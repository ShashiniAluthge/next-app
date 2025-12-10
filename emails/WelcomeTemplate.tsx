import { Body, Container, Html, Preview, Text, Tailwind } from "@react-email/components";
import React, { CSSProperties } from 'react'

const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcom aboard!</Preview>
            <Tailwind>
                <Body >
                    <Container>
                        <Text className="text-3xl font-bold">Hello {name}</Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

// const body: CSSProperties = {

// }

// const heading: CSSProperties = {
//     fontSize: '32px'
// }

export default WelcomeTemplate