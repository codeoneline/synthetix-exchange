import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../../utils/history';

import { ROUTES } from '../../constants/routes';

import { getCurrentTheme } from '../../ducks/ui';

import GlobalEventsGate from '../../gates/GlobalEventsGate';

import { darkTheme } from '../../styles/theme';

import MainLayout from './components/MainLayout';
import HomeLayout from './components/HomeLayout';
import WalletPopup from '../../components/WalletPopup';
import GweiPopup from '../../components/GweiPopup';

import Trade from '../TradeNew';
import Splash from '../Splash';

const App = ({ isAppReady }) => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Router history={history}>
				{isAppReady && (
					<>
						<GlobalEventsGate />
						<WalletPopup />
						<GweiPopup />
					</>
				)}
				<Switch>
					<Route
						path={ROUTES.TradeMatch}
						render={routeProps => (
							<MainLayout isAppReady={isAppReady}>
								<Trade {...routeProps} />
							</MainLayout>
						)}
					/>
					<Route
						path={ROUTES.Trade}
						render={routeProps => (
							<MainLayout isAppReady={isAppReady}>
								<Trade {...routeProps} />
							</MainLayout>
						)}
					/>
					<Route path={ROUTES.Home} component={Splash} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

App.propTypes = {
	isAppReady: PropTypes.bool.isRequired,
	currentTheme: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	currentTheme: getCurrentTheme(state),
});

export default connect(mapStateToProps, null)(App);
