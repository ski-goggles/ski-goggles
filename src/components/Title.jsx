// @flow

import React from 'react';
import { Image, Label, Icon, Grid } from 'semantic-ui-react';
import moment from 'moment';

type Props = {
  logo: string,
  title: string,
  timeStamp: number
};

export default class Title extends React.Component<Props> {
    render() {
        return (
            <Grid>
                <Grid.Column floated='left' width={5}>
                    <Icon name='dropdown' />
                    <Image src={'images/providers/' + this.props.logo} avatar spaced />
                    <span>{this.props.title}</span>
                </Grid.Column>
                <Grid.Column floated='right' width={2} className='large screen only'>
                    <Label>
                        {formatTime(this.props.timeStamp)}
                    </Label>
                </Grid.Column>
            </Grid>
        );
    }
}

const formatTime = (timeStamp: number): string => {
    return moment(timeStamp).format('HH:mm:ss.SSS');
};