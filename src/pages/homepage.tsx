import React from 'react';

import Button from '../components/Button/Button';

function HomePage(): React.ReactElement {
    return (
        <form>
        <Button design="raised" type="submit" loading="false">
            Login
        </Button>
        </form>
    );
};

export default HomePage;



