import React, { memo } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import AppHeader from 'src/pages/Root/components/AppHeader';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

import { headingLargeCSS, headingH5CSS } from 'src/components/Typography/Heading';

const data = [
	{ price: 10 },
	{ price: 11 },
	{ price: 12 },
	{ price: 15 },
	{ price: 18 },
	{ price: 20 },
	{ price: 25 },
	{ price: 23 },
	{ price: 45 },
	{ price: 42 },
	{ price: 41 },
	{ price: 35 },
	{ price: 39 },
	{ price: 40 },
	{ price: 41 },
	{ price: 45 },
	{ price: 50 },
	{ price: 51 },
	{ price: 55 },
	{ price: 58 },
];

const Splash = memo(() => (
	<>
		<GlobalStyle />
		<Container>
			<AppHeader isOnSplashPage={true} />
			<Hero>
				<Welcome>Welcome to</Welcome>
				<Heading>Synthetix.Exchange</Heading>
				<Subtitle>
					An L2 testnet trading competition powered by the OVM. Experience the speed of optimistic
					rollups.
				</Subtitle>
			</Hero>
			<ResponsiveContainer width="100%" height={200}>
				<LineChart data={data} margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
					<Line
						dataKey="price"
						stroke="#00E2DF"
						fill="url(#splashChartArea)"
						dot={false}
						activeDot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</Container>
	</>
));

Splash.propTypes = {
	children: PropTypes.node.isRequired,
};

const Hero = styled.div`
	text-align: center;
	padding: 200px 30px 30px 30px;
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

const Welcome = styled.div`
	${headingH5CSS};
	padding-bottom: 12px;
	text-transform: uppercase;
	background: -webkit-linear-gradient(167.03deg, #f4c625 -8.54%, #e652e9 101.04%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	display: inline;
`;

const Heading = styled.h1`
	${headingLargeCSS};
	text-shadow: 0px 0px 10px #b47598;
	padding-bottom: 12px;
	text-transform: uppercase;
`;

const Subtitle = styled.h3`
	${headingH5CSS};
	font-size: 24px;
	padding-bottom: 58px;
	max-width: 650px;
	margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  body {
		color: #fff;
    background: linear-gradient(180deg, #020B29 0%, #0F0F33 100%);
  }
`;

export default Splash;
