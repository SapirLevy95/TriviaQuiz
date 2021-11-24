import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { RulesComponent } from './RulesComponent/RulesComponent';

import { TabPanel, a11yProps } from './MenuTabsUtilities';
import { QuizComponent } from '../quizComponent/QuizComponent';

export const MenuTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                >
                    <Tab label="Rules" {...a11yProps(0)} />
                    <Tab label="Start The Game" {...a11yProps(1)} />
                    <Tab label="Score Table" {...a11yProps(2)} />
                    <Tab label="Add questions" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <RulesComponent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <QuizComponent />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Score Table
            </TabPanel>
            <TabPanel value={value} index={3}>
                Add questions
            </TabPanel>
        </Box>
    );
};
