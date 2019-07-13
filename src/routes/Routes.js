import { Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy, Component } from 'react';
import LoadingIndicator from '../layouts/public/components/LoadingIndicator/index';

const Home = lazy(() => import('../layouts/public/Home/index'));
const About = lazy(() => import('../layouts/public/About/index'));
const Page = lazy(() => import('../layouts/public/Page/index'));
const Contact = lazy(() => import('../layouts/public/Contact/index'));
const WIP = lazy(() => import('../layouts/public/WIP/index'));
const InCountryTours = lazy(() => import('../layouts/public/Tours/inCountry'));
const InternationalTours = lazy(() => import('../layouts/public/Tours/international'));
const TourDetail = lazy(() => import('../layouts/public/TourDetail/index'));
const Service = lazy(() => import('../layouts/public/Service/index'));
const Images = lazy(() => import('../layouts/public/Images/index'));

class Routes extends Component {
    render() {
        return (
            <Suspense fallback={<LoadingIndicator />}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/gioi-thieu" exact component={About} />
                    <Route path="/lien-he" exact component={Contact} />
                    <Route path="/tours-trong-nuoc" exact component={InCountryTours} />
                    <Route path="/tours-quoc-te" exact component={InternationalTours} />
                    <Route path="/tours/:tour" exact component={TourDetail} />
                    <Route path="/dich-vu" exact component={Service} />
                    <Route path="/thong-tin/:page" exact component={Page} />
                    <Route path="/hinh-anh" exact component={Images} />
                    <Route component={WIP} />
                </Switch>
            </Suspense>
        );
    }
}

export default Routes;