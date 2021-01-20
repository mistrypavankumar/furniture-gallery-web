import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Beds from '../CardsDetails/beds/Beds';
import Sofa from '../CardsDetails/sofa/Sofa';
import DinningTable from '../CardsDetails/dinningTable/DinningTable';
import Chairs from '../CardsDetails/chairs/Chairs';
import TvStand from '../CardsDetails/tvStand/TvStand';
import DressingTables from '../CardsDetails/dressingTable/DressingTable';

import './HomeFragment.css';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


export default function HomeFragment() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="Container">
            <AppBar position="static" color="default" className="appBar">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    className="tabs"
                >
                    <Tab disableRipple label="Beds" {...a11yProps(0)} color="red" />
                    <Tab label="Sofas" {...a11yProps(1)} />
                    <Tab label="Dinning Tables" {...a11yProps(2)} />
                    <Tab label="Chairs" {...a11yProps(3)} />
                    <Tab label="Tv Stands" {...a11yProps(4)} />
                    <Tab label="Dressing Tables" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className="tabPanel">
                <Beds />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Sofa />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <DinningTable />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Chairs />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <TvStand />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <DressingTables />
            </TabPanel>

        </div>
    );
}