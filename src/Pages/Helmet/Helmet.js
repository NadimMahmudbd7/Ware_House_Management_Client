import React from 'react';
import Helmet from 'react-helmet';

const Helmeted = ({ title }) => {
    return (
        <div>
            <Helmet>
                <title>{title} - Walton House</title>
            </Helmet>
        </div>
    );
};

export default Helmeted;