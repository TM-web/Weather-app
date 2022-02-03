import React, {FC} from 'react';
import classes from './Layout.module.scss';

export type Props = {};

const Layout: FC = ({children}) => {
    return (<div className={classes.layout}>{children}</div>);
}

export default Layout;